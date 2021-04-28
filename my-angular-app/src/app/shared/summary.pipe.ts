import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'summary'})
export class SummaryPipe implements PipeTransform {

    transform(data : string, format?:string, size? : number): string {

        if (data) {
            let len = size ? size : 10;
            if(format){
             
                if(format === 'U'){
                    return (data.substr(0, len) + "...").toUpperCase();
                }
                else if(format === 'L'){
                  return (data.substr(0, len) + "...").toLowerCase();
               }
                
                return data.substr(0, len);
                  
            }
        }
        return data;

    }

}
