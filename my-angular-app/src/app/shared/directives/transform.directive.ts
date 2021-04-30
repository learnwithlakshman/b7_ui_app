import { Directive,HostListener,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTransform]'
})
export class TransformDirective {

  @Input("appTransform") format:any;
  constructor(private el:ElementRef) { }

  @HostListener("blur") onBlur(){
    let value:string = this.el.nativeElement.value;
 
      if(this.format === 'upper')
       this.el.nativeElement.value = value.toUpperCase();
       else
       this.el.nativeElement.value = value.toLowerCase();
    
   
  }

}
