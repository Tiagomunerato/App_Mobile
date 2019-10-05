import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  public assunto: string;
  public para: string;
  public msg: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  public verificar(): void {

    if (isNullOrUndefined(this.para)) {
      this.msg = 'O campo de email é obrigatorio';
      this.presentAlertConfirm();
    } else if (isNullOrUndefined(this.assunto)) {
      this.msg = 'Campo assunto vazio';
      this.presentAlertConfirm();
    } else {
      this.msg = 'Email enviado com sucesso';
      this.presentAlertConfirm();
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: this.msg,
      buttons: ['OK']
    });
    await alert.present();
  }

}
