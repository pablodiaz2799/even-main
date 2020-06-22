import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { async } from '@angular/core/testing';

declare var paypal;
@Component({
  selector: 'app-mercado-pago',
  templateUrl: './mercado-pago.component.html',
  styleUrls: ['./mercado-pago.component.css']
})
export class MercadoPagoComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  product = {
    price: 777.77,
    description: 'used couch, decent condition',
  }

  paidFor = false;
  constructor() { }
  ngOnInit(): void {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

}
