import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatosService } from 'src/app/dashboard/services/platos.service';
import Swal from 'sweetalert2';
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
    private service: PlatosService,
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
    this.router.navigateByUrl('/admin/platos/lista-platos');
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
    this.router.navigateByUrl('/admin/platos/lista-platos');
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
        Swal.fire({
          allowOutsideClick: false,
          icon: 'info',
          text: 'Subiendo imagen...',
          showConfirmButton: false,
        });
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
