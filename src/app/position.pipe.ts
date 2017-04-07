import { Pipe, PipeTransform } from '@angular/core';
import { Legislator } from './legislator.model';

@Pipe({
  name: 'position',
  pure: false
})
export class PositionPipe implements PipeTransform {

  transform(input: Legislator[], selectedPosition) {
    if(input){
      let output: Legislator[] = [];
      if(selectedPosition === "Censor"){
        for(var index = 0; index < input.length; index++){
          if(input[index].position === selectedPosition){
            output.push(input[index]);
          }
        }
        return output;
      } else if(selectedPosition === "Consul"){
        for(var index = 0; index < input.length; index++){
          if(input[index].position === selectedPosition){
            output.push(input[index]);
          }
        }
        return output;
      } else if(selectedPosition === "Senator"){
        return input;
      }
    }
  }
}
