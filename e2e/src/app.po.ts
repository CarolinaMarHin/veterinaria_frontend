import { browser } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /*getTitleText() {
    return element(by.css('contenedor-toolbar')).getText() as Promise<string>;
  }*/
}
