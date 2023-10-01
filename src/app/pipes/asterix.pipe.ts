import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string) {
  let result:string="" ;
  let vowles:any=["a","i","e","o","u","y"];
    
 for (let i = 0; i < ch.length; i++) {
  let inter=ch[i]  ;
  for (let j= 0; j <vowles.length; j++) {
         
       if (ch[i].toLowerCase()==vowles[j]) {
        inter="*";
       break;
       }
    
      }
 result=result+inter
  }
  return result;
  }

}
