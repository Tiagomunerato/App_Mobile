import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(public toastController: ToastController,public alertController: AlertController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Empty Box',
      duration: 2000

    });

    toast.present();
  }
  ngOnInit() {
  }  

}
