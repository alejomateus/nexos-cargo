import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private httpClient: HttpClient) { }

  sendEmail(type: string, data: any) {
    return this.httpClient.post(`${environment.urlFunction}/sendMail?type=${type}`, data).toPromise();
  }
}
