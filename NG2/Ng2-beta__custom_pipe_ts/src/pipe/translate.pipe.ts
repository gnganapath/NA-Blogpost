import {Pipe, PipeTransform, Inject} from 'angular2/core';
import {MessageService} from '../service/message.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe  implements PipeTransform{

private messageBundle:any;
private request:any;
    
    constructor(private _messageService: MessageService){
        this._messageService = _messageService;
        this.messageBundle = {};
    }
    
    transform(value:string, args:string[]):any {
        if(!this.request){
            this.request = this._messageService.getBundle();
            this.request.subscribe(
                data => this.messageBundle = data
             );
        }
        
        return this.messageBundle[value];
    }
}
