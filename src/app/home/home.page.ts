import { Component } from '@angular/core';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private LocalNotifications: LocalNotifications) {}
  
  waterCount: number = 0;
  calorieCount: number = 0;

  single_notification() {
    this.LocalNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
    });
  }

  multi_notification() {
    this.LocalNotifications.schedule([{
      id: 1,
      text: 'Multi ILocalNotification 1',
    }, {
      id: 2,
      title: 'Local ILocalNotification Example',
      text: 'Multi ILocalNotification 2',
    }]);  
  }

  delayed_notification() {
    this.LocalNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: { at: new Date(new Date().getTime() + 3600) },
    });
  }

  add_CupOfWater() { this.waterCount++ }

}
