import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { map, Observable, Subscription, tap } from 'rxjs';
import { TimeZone } from 'src/app/models/time-zone.modele';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnDestroy, AfterViewInit {

  @Input() timeZone!: TimeZone;
  @Input() set timeObservable(value: Observable<Date>) {
    this.subscription.add(value.pipe(
      map(baseTime => 
        baseTime.getTime() + (this.timeZone.zone * 60 * 60 * 1000)
      )
    ).subscribe(time => {
      this.rxTime = new Date(time);
    }));
  }
  rxTime = new Date();

  hourHandStyle: any;
  minuteHandStyle: any;
  secondHandStyle: any;


  private intervalId: any;
  private subscription: Subscription = new Subscription();

  ngAfterViewInit() {

    this.intervalId = setInterval(() => {
      this.animateAnalogClock();
    }, 1000);
  }

  animateAnalogClock() {
    this.hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.rxTime.getHours() * 30) + (this.rxTime.getMinutes() * 0.5) + (this.rxTime.getSeconds() * (0.5 / 60))}deg)` };

    this.minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.rxTime.getMinutes() * 6) + (this.rxTime.getSeconds() * 0.1)}deg)` };

    this.secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${this.rxTime.getSeconds() * 6}deg)` };
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
