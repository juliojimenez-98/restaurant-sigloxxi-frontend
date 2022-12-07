import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BebestiblesService } from '../../services/bebestibles.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-actualizar-imagen-bebestible',
  templateUrl: './actualizar-imagen-bebestible.component.html',
  styleUrls: ['./actualizar-imagen-bebestible.component.css'],
})
export class ActualizarImagenBebestibleComponent implements OnInit {
  selectedFile!: ImageSnippet;
  file!: File;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: BebestiblesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    Swal.close();
    Swal.fire(
      'Éxito',
      'Se ha actualizado la imagen en la base de datos',
      'success'
    );
    this.router.navigateByUrl('/admin/bebestibles/lista');
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
    Swal.close();
    Swal.fire(
      'Error',
      `Error al subir la imagen, intentelo otra vez.`,
      'error'
    );
    this.router.navigateByUrl('/admin/bebestibles/lista');
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
        let id_bebida = parseInt(id);
        Swal.fire({
          allowOutsideClick: false,
          icon: 'info',
          text: 'Subiendo imagen...',
          showConfirmButton: false,
        });
        this.service.uploadImage(id_bebida, this.selectedFile.file).subscribe(
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
