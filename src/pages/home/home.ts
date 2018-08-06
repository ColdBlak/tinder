import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }
  public loader;

  public perfil_atual: number = 0;

  private array_indices:Array<number> = [];

  public array_dados_perfis = [
    //Patrick
    {
      nome:"Patrick", 
      sobrenome:"Felipe",
      img_01: "patrick_01.jpeg",
      img_02: "patrick_02.jpg",
      img_03: "patrick_03.jpg",
      curso: "Engenharia Elétrica",
      periodo: "3º"
    },
    
    //Verica
    {
      nome:"Verônica", 
      sobrenome:"Dadalto",
      img_01: "v_01.png",
      img_02: "v_02.png",
      img_03: "v_03.png",
      periodo: "-",
      curso: "-"
    },
    
    //Bruno
    {
      nome:"Bruno", 
      sobrenome:"Almeida",
      img_01: "bruno_01.png",
      img_02: "bruno_02.png",
      img_03: "bruno_03.png",
      curso: "Engenharia da Computação",
      periodo: "4º"
    }
    
  ]

  ionViewDidLoad() {
    this.carregarFotos();
  }

  btIgnorar(){
    if (this.perfil_atual < (this.array_dados_perfis.length)-1){
      this.carregarFotos();
      this.perfil_atual += 1;
      this.slides.slideTo(0, 500);
    } 
    else{
      this.irParaPaginaResultado();
      
    }
  }

  btSuperLike(){
    alert("Em construção");
    // alert(Math.floor(Math.random() * this.array_dados_perfis.length));
  }

  btLike(){
    if (this.perfil_atual < (this.array_dados_perfis.length)-1){
      this.carregarFotos();
      alert("Curtiu né?! Uhummm");
      this.array_indices.push(this.perfil_atual); //Adiciona valor a um array
      this.perfil_atual += 1;
      this.slides.slideTo(0, 500); //Faz a transição para o slide indicado, o segundo parâmetro é o tempo em milissegundos
      
    }
    else{
      this.array_indices.push(this.perfil_atual); //Adiciona valor a um array
      this.irParaPaginaResultado();
    }
    
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando fotos...",
      duration: 500 //Tempo de duração
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  carregarFotos(){
    this.abreCarregando();
    //this.fechaCarregando(); //Fecha carregando
       
  }

  irParaPaginaResultado(){
    this.navCtrl.push(ContactPage, {array_dados_perfis: this.array_dados_perfis, array_indices: this.array_indices});
  }

  

}
