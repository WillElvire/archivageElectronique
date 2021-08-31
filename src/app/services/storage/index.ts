import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class storage {


  constructor() {}

  GetObject(name) {
    return Promise.resolve(localStorage.getItem(name));
  }

  StoreItem(name: string, value: any) {
    return localStorage.setItem(name, value);
  }

  StoreObject(key, value: {}) {
    return this.Looker({ key, value });
  }

  GetItem(name: string) {
    return Promise.resolve(localStorage.getItem(name));
  }

  RemoveItem(name: string) {
    return Promise.resolve(localStorage.removeItem(name));
  }

  Looker(data: { key: any; value: any }) {
    return localStorage.setItem(data.key, JSON.stringify(data.value));
  }

  StoreValue(key, value) {
    return localStorage.setItem(key, value);
  }

  StoreArray(items: any[]) {
    items.forEach((el: any) => {
      this.StoreValue(el.key, el.value);
    });
  }

  RemoveArray(items: any[]): boolean {
    let bool = false;

    items.forEach((el) => {
      localStorage.removeItem(el);

      bool = true;
    });

    return bool;
  }

  GetItems(items: any[]): any {
    const dataContainer = [];

    items.forEach((name) => {
      dataContainer.push({
        key: name,
        value: JSON.parse(localStorage.getItem(name)),
      });
    });
    return dataContainer;
  }


}
