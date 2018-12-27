import { Injectable } from '@angular/core';

import { Application } from './../Application';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getApps(): Application[] {
    return [
      {
        id: 1,
        name: 'GigIt',
        img: 'https://res.cloudinary.com/barpel/image/upload/v1545157634/GigIt/WhatsApp_Image_2018-12-18_at_18.png',
        url: 'https://gigit-app.herokuapp.com/'
      },
      {
        id: 2,
        name: 'Mister Bitcoin',
        img: 'https://res.cloudinary.com/barpel/image/upload/v1545922079/bitcoin.png',
        url: 'https://barpel.github.io/mister-bitcoin/'
      },

    ]
  }
  constructor() { }
}
