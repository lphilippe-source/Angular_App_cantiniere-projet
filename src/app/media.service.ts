import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HIGH_SCREEN, LOW_SCREEN } from './constants';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(public breakpoint:BreakpointObserver) { }

  switchScreen(){
    return this.breakpoint.observe([
      LOW_SCREEN,
      HIGH_SCREEN
    ]);
  }
}
