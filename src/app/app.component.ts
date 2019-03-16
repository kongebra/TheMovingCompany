import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private _httpService: Http) {}

	apiValues: string[] = [];
	ngOnInit() {
		this._httpService.get('/api/orders').subscribe(values => {
			console.log(values);
			this.apiValues = values.json() as string[];
		})
	}
}
