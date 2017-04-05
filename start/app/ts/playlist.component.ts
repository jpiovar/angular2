import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
    selector: 'component-playlist', 
    //template: '<h1>bbbb111 {{ okvariable }}</h1>'   
    //moduleId: module.id,
    templateUrl: 'app/ts/playlist.component.html',
    styleUrls: ['app/css/playlist.component.css'],
    
    inputs: ['videos']
})

export class PlaylistComponent {
  show: boolean = true;
  onSelect(vid:Video){
    console.log(JSON.stringify(vid));
  }
  
  constructor(){
    this.show = true;
  }

}
