import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SendEmailService } from "src/app/services/send-email.service";
import { estiloMapa } from "./map-styles";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.scss"],
})
export class ContactoComponent implements OnInit {
  loading: boolean = false;
  lat = 4.6964333;
  lng = -74.0447252;
  style = estiloMapa;
  putos = [
    {
      latitud: "4.689480",
      longitud: "-74.147448",
    },
  ];
  focusedEmail: boolean = null;
  formContacto: FormGroup = new FormGroup({
    nombre: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    mensaje: new FormControl("", [Validators.required]),
  });
  cotizarValidaciones = {
    email: [
      { type: "required", message: "Campo requerido" },
      { type: "pattern", message: "Formato invalid" },
    ],
    nombre: [{ type: "required", message: "Campo requerido" }],
    phone: [{ type: "required", message: "Campo requerido" }],
    asunto: [{ type: "required", message: "Campo requerido" }],
    mensaje: [{ type: "required", message: "Campo requerido" }],
  };
  constructor(private sendEmailService: SendEmailService) {}

  ngOnInit(): void {}

  async contacto(): Promise<any> {
    try {
      this.loading = true;
      await this.sendEmailService.sendEmail("contact", this.formContacto.value);
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }
}
