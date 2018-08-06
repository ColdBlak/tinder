import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private array_indices:Array<number>;
  public array_dados_perfis: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.array_dados_perfis = navParams.get('array_dados_perfis');
    this.array_indices = navParams.get('array_indices');

   // this.escreverNomes();
  }



}
