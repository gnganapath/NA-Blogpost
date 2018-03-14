import {Component} from 'angular2/core';
import {TranslatePipe} from './pipe/translate.pipe';
import {NvlPipe} from './pipe/nvl.pipe';

@Component({
  selector: 'app-component',
  templateUrl: 'src/app.component.tpl.html',
  pipes: [TranslatePipe, NvlPipe]
})
export class AppComponent {}