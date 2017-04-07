import { Pipe, PipeTransform } from '@angular/core';
import { Legislator } from './legislator.model';

@Pipe({
  name: 'party',
  pure: false
})
export class PartyPipe implements PipeTransform {

  transform(input: Legislator[], selectedParty) {
    if(input){
      let output: Legislator[] = [];
      if(selectedParty === "Optimate"){
        for(var index = 0; index < input.length; index++){
          if(input[index].party === selectedParty){
            output.push(input[index]);
          }
        }
        return output;
      } else if(selectedParty === "Populare"){
        for(var index = 0; index < input.length; index++){
          if(input[index].party === selectedParty){
            output.push(input[index]);
          }
        }
        return output;
      } else if(selectedParty === "All"){
        return input;
      }
    }
  }
}
