import {Pipe, PipeTransform, PipeTransform } from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "empty",
  pure: false
})
export class EmptyPipe implements PipeTransform {
  // The only thing that our class needs is a method that must be called transform
  // Its first parameter is the array of objects that we are transforming, and we tell it to expect an array of Tasks
  // The second parameter is an array of arguments - we can put any extra information that our method needs here.
  transform(input: Keg[], args) {
    var desiredEmptyState = args[0];
    console.log('input: ', input); // the array of kegs (kegList from the component that called this)
    console.log("args[0]: " + args[0]); // "all" or "done" or "notDone"
    
    if(desiredEmptyState === "empty") {
      //test each thing in the array that we are filtering by putting it into a temporary variable called keg
      return input.filter((keg) => {
        return keg.size === 0;
      });
    } else if (desiredEmptyState === "low") {
      return input.filter((keg) => {
        return keg.size <= 10;
      });
    } else {
      return input;
    }
  }
}
