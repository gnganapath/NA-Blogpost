import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'nvl',
  pure: true
})
export class NvlPipe  implements PipeTransform{
    
    constructor(){}
    
    transform(value:string, args:string[]):any {
        return value?value : args[0];
    }
}
