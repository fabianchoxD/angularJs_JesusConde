import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
	selector: 'timer',
	template: `
    <div class="text-center">
      <img src="assets/img/reloj.png" height="80" width="80" alt="Reloj">
      <h1> {{ minutes }}:{{ seconds | number: '2.0' }} </h1>
      <p>
        <button (click)="togglePause()"
          class="btn btn-danger">
          {{ buttonLabel }}
        </button>
      </p>
    </div>
`
})

class TimerComponent{
	minutes: number;
	seconds: number;
	isPaused: boolean;
	buttonLabel: string;

	constructor() {
		this.resetTimer();
		setInterval(() => this.tick(), 1000);
	}

	resetTimer(): void {

		this.minutes=24;
		this.seconds=59;
		this.buttonLabel= 'Comenzar';
		this.togglePause();
	}

	private tick(): void{
		if(!this.isPaused){
			this.buttonLabel= 'Detener';

		if(--this.seconds < 0){
			this.seconds = 59;
			if(--this.minutes < 0 ){
				this.resetTimer();
				}
			}
		}
	}

	togglePause(): void{
		this.isPaused = !this.isPaused;
		if(this.minutes < 24 || this.seconds < 59){
			this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener' ;
		} 
	}
}

bootstrap(TimerComponent);


