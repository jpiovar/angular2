import {Component} from 'angular2/core';
import {Config} from './config.service';
import {PlaylistComponent} from './playlist.component';
import {Video} from './video';


@Component({
    selector: 'component-basic-1', 
    //template: '<h1>bbbb111 {{ okvariable }}</h1>'   
    //moduleId: module.id,
    templateUrl: 'app/ts/app.component.html',
    styleUrls: ['app/css/app.component.css'],
    
    directives: [PlaylistComponent]
})

export class AppComponent {
  //okvariable = 'ok variable value';
  okvariable = Config.MAIN_HEADING;
  videos:Array<Video>;
  message:string = "popo";
  constructor(){
    this.videos = [
      new Video(1,"Janko","code1","video of Janko"),
      new Video(2,"Jozko","code2","video of Jozko")
    ];
    this.message = 'aaaaallll';
  }
  
  ngOnInit(){
    this.message = 'ou je';
  }
  
  onChange(newValue) { debugger;
    console.log(newValue);
    this.message = newValue;  
    
  }


}
