import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'directivesTest';
  longList: any[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Cambio';
    }, 3000);

    const longList = [];
    for (let i = 0; i < 5; i++) {
      longList.push({ id: i });
    }
    this.longList = longList;
  }
}
