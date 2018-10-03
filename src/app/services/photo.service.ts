import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService{
	constructor(private http: Http){
		console.log('PhotoService initialized...');
	}

	getPhotos(){
		return this.http.get('https://jsonplaceholder.typicode.com/photos')
		.map(res => res.json());
	}
} 