import { BreakpointState } from '@angular/cdk/layout';
import { Pipe, PipeTransform } from '@angular/core';
import { HIGH_SCREEN, LOW_SCREEN } from '../constants';
import { MediaService } from '../media.service';

@Pipe({
  name: 'strCut'
})
export class StrCutPipe implements PipeTransform {
res:string
  constructor(
    private media:MediaService
  ){}
  transform(value: string, ...args: unknown[]) {
      this.media.switchScreen().subscribe((size :BreakpointState)=>{
          Object.entries(size.breakpoints).map(([key,val])=>{
          if(key===LOW_SCREEN && val===true){
            this.res =  value.substring(0,3)
          }
          if(key===HIGH_SCREEN && val===true){
            this.res =  value
          }
        })
      })
      return this.res
  }
}
