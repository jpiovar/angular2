import {Component} from 'angular2/core';
import {Config} from './config.service';

@Component({
    selector: 'component-basic-1', 
    //template: '<h1>bbbb111 {{ okvariable }}</h1>'   
    //moduleId: module.id,
    templateUrl: 'app/views/app.component.html',
    styleUrls: ['app/css/app.component.css']
})

export class AppComponent {
  //okvariable = 'ok variable value';
  okvariable = Config.MAIN_HEADING;
}
