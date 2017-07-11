import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.Component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos=[
            new Video(1,"Installing Django","f8qBeaGe2S4","How to install"),
            new Video(2,"Installing Django 2","bKWDKmHvF78","How to install2"),
        ]
    }

}
