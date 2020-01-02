import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  storageName = 'showNav';
  constructor() {}

  setNavSettings(data: any) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  getNavSettings() {
    const data = localStorage.getItem(this.storageName);
    return JSON.parse(data);
  }

  clearNavSettings() {
    localStorage.removeItem(this.storageName);
  }

  cleanAll() {
    localStorage.clear();
  }
}
