import { Component, OnInit } from '@angular/core';
import environment from '../assets/environment.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nx-test-release';

  configuration = environment;

  ngOnInit() {
    console.log(this.configuration);
  }
}
