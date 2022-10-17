import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatosService } from 'src/app/dashboard/services/platos.service';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-actualizar-imagen',
  templateUrl: './actualizar-imagen.component.html',
  styleUrls: ['./actualizar-imagen.component.css'],
})
export class ActualizarImagenComponent implements OnInit {
  selectedFile!: ImageSnippet;
  file!: File;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PlatosService
  ) {}

  ngOnInit(): void {}

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    this.file = imageInput.files[0];
  }

  subirImagen() {
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, this.file);

      this.selectedFile.pending = true;
      this.activatedRoute.params.subscribe((params) => {
        let id = params['id'];
        let id_plato = parseInt(id);
        this.service.uploadImage(id_plato, this.selectedFile.file).subscribe(
          (res) => {
            this.onSuccess();
          },
          (err) => {
            this.onError();
          }
        );
      });
    });
    reader.readAsDataURL(this.file);
  }
}
