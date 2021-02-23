import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent implements OnInit {
  loading: boolean = false;
  categories: Array<any> = [];
  subcategories: Array<any> = [];
  selectedItems: Array<any> = [];
  total: number;
  lat = 4.6964333;
  lng = -74.0447252;
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
  constructor() { }

  ngOnInit(): void {
    this.lists();
  }

  contacto(): void {
    if (!this.loading) {
      console.log('contacto enviar');
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  lists(): void {
    this.categories = [
      {
        label: "Gimnasio-Hogar",
        value: 1
      },
      {
        label: "Habitación",
        value: 2
      },
      {
        label: "Oficina",
        value: 3
      },
      {
        label: "Electrodomésticos",
        value: 4
      },
      {
        label: "Muebles",
        value: 5
      }
    ]
    this.subcategories = [
      {
        label: "Caminadora 1m³",
        id: 1,
        value: 1,
        fatherId: 1
      },
      {
        label: "Elíptica 1m³",
        id: 2,
        value: 1,
        fatherId: 1
      },
      {
        label: "Estática 1m³",
        id: 3,
        value: 1,
        fatherId: 1
      },
      {
        label: "Cama sencilla desarmable + colchón 1m³",
        id: 4,
        value: 1,
        fatherId: 2
      },
      {
        label: "Cama sencilla base cama + colchón 2m³",
        id: 5,
        value: 2,
        fatherId: 2
      },
      {
        label: "Cama doble desarmable + colchón 1.5m³",
        id: 6,
        value: 1.5,
        fatherId: 2
      },
      {
        label: "Cama doble normal base cama + colchón 2.5m³",
        id: 7,
        value: 2.5,
        fatherId: 2
      },
      {
        label: "Cama queen o king desarmable + colchón 3m³",
        id: 8,
        value: 3,
        fatherId: 2
      },
      {
        label: "Cama queen o king base cama + colchón 4m³",
        id: 9,
        value: 4,
        fatherId: 2
      },
      {
        label: "Mesa de noche 0.3m³",
        id: 10,
        value: 3,
        fatherId: 2
      },
      {
        label: "Comoda o cajonera 1m³",
        id: 11,
        value: 1,
        fatherId: 2
      },
      {
        label: "Mesa de TV 1m³",
        id: 12,
        value: 1,
        fatherId: 2
      },
      {
        label: "Armario o closet de un cuerpo 1m³",
        id: 13,
        value: 1,
        fatherId: 2
      },
      {
        label: "Armario o closet dos cuerpos 2m³",
        id: 14,
        value: 1,
        fatherId: 2
      },
      {
        label: "Tocador normal 2m³",
        id: 15,
        value: 1,
        fatherId: 2
      },
      {
        label: "Muñequeros 1m³",
        id: 16,
        value: 1,
        fatherId: 2
      },
      {
        label: "Cajas grandes Oikos Storage 0.3m³",
        id: 17,
        value: 1,
        fatherId: 2
      },
      {
        label: "Cajas medianas Oikos Storage 0.1m³",
        id: 18,
        value: 1,
        fatherId: 2
      },
      {
        label: "Archivador tipo escritorio 0.4 m³",
        id: 19,
        value: 0.4,
        fatherId: 3
      },
      {
        label: "Archivador grande tipo módulo 1 m³",
        id: 20,
        value: 1,
        fatherId: 3
      },
      {
        label: "Silla rodachina tipo oficina 0.5 m³",
        id: 21,
        value: 0.5,
        fatherId: 3
      },
      {
        label: "Escritorio entero 1 m³",
        id: 22,
        value: 1,
        fatherId: 3
      },
      {
        label: "Escritorio desarmable 0.5 m³",
        id: 23,
        value: 0.5,
        fatherId: 3
      },
      {
        label: "Biblioteca sencilla 1 m³",
        id: 24,
        value: 1,
        fatherId: 3
      },
      {
        label: "Cajas grandes Oikos Storage 0.3 m³",
        id: 25,
        value: 0.3,
        fatherId: 3
      },
      {
        label: "Cajas medianas Oikos Storage 0.1 m³",
        id: 26,
        value: 0.1,
        fatherId: 3
      },
      {
        label: "Biblioteca doble 2 m³",
        id: 27,
        value: 2,
        fatherId: 3
      },
      {
        label: "Nevera 1 m³",
        id: 28,
        value: 1,
        fatherId: 4
      },
      {
        label: "Secadora 1 m³",
        id: 29,
        value: 1,
        fatherId: 4
      },
      {
        label: "Lavadora 1 m³",
        id: 30,
        value: 1,
        fatherId: 4
      },
      {
        label: "Nevecom 2 m³",
        id: 31,
        value: 2,
        fatherId: 4
      },
      {
        label: "Cajas grandes Oikos Storage 0.3 m³",
        id: 32,
        value: 0.3,
        fatherId: 4
      },
      {
        label: "Cajas medianas Oikos Storage 0.1 m³",
        id: 33,
        value: 0.1,
        fatherId: 4
      },
      {
        label: "Bife normal 1 m³",
        id: 34,
        value: 1,
        fatherId: 5
      },
      {
        label: "Bife doble 2 m³",
        id: 35,
        value: 2,
        fatherId: 5
      },
      {
        label: "BBQ grande 1 m³",
        id: 36,
        value: 1,
        fatherId: 5
      },
      {
        label: "Centro de entretenimiento 2 m³",
        id: 37,
        value: 2,
        fatherId: 5
      },
      {
        label: "Alacena sencilla 1 m³",
        id: 38,
        value: 1,
        fatherId: 5
      },
      {
        label: "Alacena doble 2 m³",
        id: 39,
        value: 2,
        fatherId: 5
      },
      {
        label: "Silla mecedora 1 m³",
        id: 40,
        value: 1,
        fatherId: 5
      },
      {
        label: "Poltrona 1 m³",
        id: 41,
        value: 1,
        fatherId: 5
      },
      {
        label: "Silla de comedor 4, 6 y 8 puestos 1 m³",
        id: 42,
        value: 1,
        fatherId: 5
      },
      {
        label: "Vitrina 1 m³",
        id: 43,
        value: 1,
        fatherId: 5
      },
      {
        label: "Cajas grandes Oikos Storage 0.3 m³",
        id: 44,
        value: 0.3,
        fatherId: 5
      },
      {
        label: "Cajas medianas Oikos Storage 0.1 m³",
        id: 45,
        value: 0.1,
        fatherId: 5
      },
      {
        label: "Sofá 4 puestos 2.5 m³",
        id: 46,
        value: 2.5,
        fatherId: 5
      },
      {
        label: "Sofá 3 puestos 2 m³",
        id: 47,
        value: 2,
        fatherId: 5
      },
      {
        label: "Sofá 2 puestos 1 m³",
        id: 48,
        value: 1,
        fatherId: 5
      },
      {
        label: "Mesa de centro grande 1 m³",
        id: 49,
        value: 1,
        fatherId: 5
      },
      {
        label: "Mesa de centro mediana 0.3 m³",
        id: 50,
        value: 0.3,
        fatherId: 5
      },
      {
        label: "Mesa auxiliar 0.3 m³",
        id: 51,
        value: 0.3,
        fatherId: 5
      },
      {
        label: "Biblioteca doble 2 m³",
        id: 52,
        value: 2,
        fatherId: 5
      },
    ]
  }
  addtoCar(item: any) {
    this.selectedItems.push(item);
  }
  deletefromCar(index) {
    this.selectedItems.splice(index, 1);
  }
  calcualteTotal() {
    let value = 0;
    this.selectedItems.forEach(item => {
      value += item.value;
    });
    value = Math.ceil(value);
    this.total = value* environment.quote;
  }

}
