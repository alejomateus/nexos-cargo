import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { estiloMapa } from './map-styles';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  loading: boolean = false;
  lat = 4.6964333;
  lng = -74.0447252;
  style = estiloMapa;
  putos = [
    {
      latitud: '4.689480',
      longitud: '-74.147448',
    },
  ];
  focusedEmail: boolean = null;
  formContacto: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^([a-zA-Z0-9-+_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'
      ),
    ]),
    asunto: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [Validators.required]),
  });
  cotizarValidaciones = {
    email: [
      { type: 'required', message: 'Campo requerido' },
      { type: 'pattern', message: 'Formato invalid' },
    ],
    nombre: [{ type: 'required', message: 'Campo requerido' }],
  };
  constructor() {}

  ngOnInit(): void {}

  contacto(): void {
    if (!this.loading) {
      console.log('contacto enviar');
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
