import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor() { }

setLocal(key: any,  value: any) {
  window.localStorage.setItem(key,value);
}

getLocal(key) {
  return window.localStorage.getItem(key);
}

removeLocal(key){
  window.localStorage.removeItem(key);
}

setSession(key: any,  value: any) {
  window.sessionStorage.setItem(key,value);
}

getSession(key) {
  return window.sessionStorage.getItem(key);
}

removeSession(key){
  window.sessionStorage.removeItem(key);
}

}