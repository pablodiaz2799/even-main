import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/shared/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('name') nombre: ElementRef;
  @ViewChild('email') mail: ElementRef;
  @ViewChild('phone') telefono: ElementRef;
  @ViewChild('message') mensaje: ElementRef;
  private contactService: ContactService;
  private lettersRegex = /^[A-Za-z]+$/;
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(this.lettersRegex),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    tel: new FormControl('', null),
    message: new FormControl('', [
      Validators.required,
    ])
  });

  constructor(private http: HttpClient) {
    this.contactService = new ContactService(this.http);
   }

  ngOnInit(): void {
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get tel() {
    return this.form.get('tel');
  }

  get message() {
    return this.form.get('message');
  }

  submit() {
    const name = this.name.value;
    const email = this.email.value;
    const tel = this.tel.value;
    const message = this.message.value;
    this.name.setValue('');
    this.email.setValue('');
    this.tel.setValue('');
    this.message.setValue('');
    this.form.markAsUntouched();
    Swal.fire(
      'E-mail enviado!',
      'Nos contactaremos con usted a la brevedad',
      'success'
    );
    this.contactService.sendEmail(name, email, message, tel)
    .subscribe((res) => {
      console.log(res);
    });
  }

}
