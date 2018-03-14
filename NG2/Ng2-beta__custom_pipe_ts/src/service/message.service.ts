import {Injectable} from "angular2/core"
import {Http} from 'angular2/http';
import 'rxjs/Rx'

@Injectable()
export class MessageService{
    constructor(http: Http){
        this.http = http;
    }
    getBundle (){
        return this.http.get('./src/bundle.json').map(res => res.json());
    }
}