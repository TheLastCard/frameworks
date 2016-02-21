import {Component} from 'angular2/core';
import { Http } from 'angular2/http'
import { } from '../interfaces/interfaces'


@Component({
    selector: 'my-app',
    template: '<h1>{{main.maintitle}}{{main.angular2.title}}</h1>'
})


export class AppComponent {
    constructor(http: Http) {
        http.get('../../data/data.json')
            .subscribe(response => this.main = response.json(); );
    }

    public main: MainModel = {
        maintitle: '',
        angular2: {
            title: ''
        }
    }
}
