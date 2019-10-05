import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {

  constructor(public toastController: ToastController,public alertController: AlertController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'E-mails atualizados',
      duration: 2000

    });

    toast.present();
  }
  ngOnInit() {
  }

}
