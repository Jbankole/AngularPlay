import { Injectable } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

@Injectable({
  providedIn: 'root'
})
export class BuckyTutorialServiceService {
  public static MAIN_HEADING = 'My Video(s): ';
  public test = 'My Video;'
  constructor() { }
  getMainHeading(){
    return BuckyTutorialServiceService.MAIN_HEADING;
  }
}
