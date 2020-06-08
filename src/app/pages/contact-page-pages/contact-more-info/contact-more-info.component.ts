import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/shared/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-more-info',
  templateUrl: './contact-more-info.component.html',
  styleUrls: ['./contact-more-info.component.css']
})
export class ContactMoreInfoComponent implements OnInit {
  private lettersRegex = /^[A-Za-z]+$/;
  private state$: Observable<object>;
  private contactService: ContactService;
  platform: string;
  plan: string;
  cart: boolean;
  categories: boolean;
  community: boolean;
  logo: boolean;
  about: boolean;
  form = new FormGroup({
    example: new FormControl(),
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    message: new FormControl('',[
      Validators.required
    ]),
    phone: new FormControl(),
  });

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    this.contactService = new ContactService(this.http);
   }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));
    this.state$.forEach(element => {
      this.platform = element['platform'];
      this.plan = element['plan'];
      this.cart = element['cart'];
      this.categories = element['categories'];
      this.community = element['community'];
      this.logo = element['logo'];
      this.about = element['about'];
    });
  }

  get example(){
    return this.form.get('example');
  }

  get name(){
    return this.form.get('name');
  }

  get email(){
    return this.form.get('email');
  }

  get message(){
    return this.form.get('message');
  }

  get phone(){
    return this.form.get('phone');
  }

  submit(){
    const example = this.example.value;
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    const phone = this.phone.value;
    const mensaje = `
    Plataforma: ${this.platform}, Plan: ${this.plan}, Carrito: ${this.cart}, Community Management: ${this.community}, 
    Muchas Categorias: ${this.categories}, Logo: ${this.logo}, Acerca del negocio: ${this.about}, Ejemplo: ${example}, 
    Mensaje: ${message}
    `;
    Swal.fire(
      'E-mail enviado!',
      'Nos contactaremos con usted a la brevedad',
      'success'
    );
    this.contactService.sendEmail(name, email, mensaje, phone).subscribe((res) =>{
      console.log(res);
    });
  }
}
