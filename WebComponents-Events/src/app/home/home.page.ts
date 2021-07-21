import { browser } from 'protractor';
import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions, InAppBrowserEventType } from '@ionic-native/in-app-browser/ngx';
var datos: string;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {


  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };
  inAppBrowserData: string;
  dataGuardad: string;
  informacion: any;
  inApp: any;



  constructor(private theInAppBrowser: InAppBrowser) {

  }
  public openWithSystemBrowser(url: string) {
    let target = '_system';
    this.theInAppBrowser.create(url, target, this.options);
    this.postCordovaMessage(url)

  }
  public openWithInAppBrowser(url: string) {
    let target = '_blank';
    this.theInAppBrowser.create(url, target, this.options);
    this.postCordovaMessage(url)
  }
  public openWithCordovaBrowser(url: string) {
    let target = '_self';
    this.theInAppBrowser.create(url, target, this.options);
    this.postCordovaMessage(url)


  }


  postCordovaMessage(url) {
    let browser = this.theInAppBrowser.create(url, '_blank', 'location=no');
    browser.on('loadstart').subscribe(event => {
      browser.executeScript({
        code: '\
      var message = \'this is the message\';\
      var messageObj = {my_message: message};\
      var stringifiedMessageObj = JSON.stringify(messageObj);\
      window.webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);\
      '
      });
    });
    browser.show();
  }



}


