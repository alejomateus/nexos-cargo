import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from 'src/app/services/send-email.service';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.scss'],
})
export class CotizarComponent implements OnInit {
  focusedEmail: boolean = null;
  loading: boolean = false;
  loader: boolean = false;
  formCotizar: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^([a-zA-Z0-9-+_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'
      ),
    ]),
    origen: new FormControl('', [Validators.required]),
    destino: new FormControl('', [Validators.required]),
    volumen: new FormControl('', [Validators.required]),
    peso: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required]),
    comentrarios: new FormControl(''),
  });
  cotizarValidaciones = {
    email: [
      { type: 'required', message: 'Campo requerido' },
      { type: 'pattern', message: 'Formato invalid' },
    ],
    origen: [{ type: 'required', message: 'Campo requerido' }],
  };
  constructor(private sendEmailService: SendEmailService) {}

  ngOnInit(): void {}

  async cotizar(): Promise<any> {
    try {
      this.loading = true;
      await this.sendEmailService.sendEmail("cotization", this.formCotizar.value);
    } catch (error) {

    }
    finally {
      this.loading = false;
    }
  }

}
