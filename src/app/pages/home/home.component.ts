import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable, share, timer } from 'rxjs';
import { TimeZone } from 'src/app/models/time-zone.modele';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  timeZones!: TimeZone[];
  selectedTimeZone!: TimeZone[];
  observableTime: Observable<Date>;

  private URL = 'assets/time-zones.json';

  constructor(http: HttpClient) {
    http.get<any>(this.URL).subscribe(data => {
      this.timeZones = Object.values(data) as TimeZone[];
      this.selectedTimeZone = this.timeZones;
    });

    this.observableTime = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      );
  }

  selectTimeZone(timeZone: TimeZone[]) {
    this.selectedTimeZone = timeZone;
  }
}
