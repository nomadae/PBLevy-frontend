import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductsService} from '../products.service';
import {IPayPalConfig, ICreateOrderRequest} from 'ngx-paypal';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./scsestile.scss']
})
export class CarritoComponent implements OnInit {
  public payPalConfig ?: IPayPalConfig;
  n = 0;
  showSuccess = false;
  showError = false;
  showCancel = false;
  constructor(router: Router,
              dataProvider: ProductsService,
              ) { }

  ngOnInit(): void {
    this.initConfig();
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'MXN',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'MXN',
            value: '2099.00',
            breakdown: {
              item_total: {
                currency_code: 'MXN',
                value: '2099.00'
              }
            }
          },
          items: [{
            name: 'Paquete sistema purificador personal',
            quantity: '1',
            category: 'PHYSICAL_GOODS',
            unit_amount: {
              currency_code: 'MXN',
              value: '1899.00'}
            },
            {
              name: 'Envio Nacional DHL',
              quantity: 1,
              category: 'PHYSICAL_GOODS',
              unit_amount: {
                currency_code: 'MXN',
                value: '200.00'
              }
            }],
        }],
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.showCancel = true;

      },
      onError: err => {
        console.log('OnError', err);
        this.showError = true;
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
        // this.resetStatus();
      },
    };
  }
}
