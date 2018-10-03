import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  providers: [PostService, PhotoService]
})

export class UserComponent{
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: post[];
  photos: photo[];
  
  wid:number=50;

   constructor(private postsService: PostService, private photoService: PhotoService){
  	this.name= 'Rahul Kumar';
  	this.email= 'rahulraj.holi@gmail.com',
  	this.address= {
  		street: 'New avas vikas',
  		city: 'kashipur',
  		state: 'USN',
  		pin: '244713'
  	}
  	this.hobbies = ['Music', 'Movies', 'Art', 'Coading', 'Designing'];
  	this.showHobbies= false;

  	this.postsService.getPosts().subscribe(posts => {
  		//console.log(posts);
  		this.posts = posts;
  	})

  	this.photoService.getPhotos().subscribe(photos => {
  		//console.log(photos);
  		this.photos = photos;
  	})

  }

  toggleHobbies(){
  	if(this.showHobbies==true){
	  	console.log('show');
	  	this.showHobbies= false;	  	
  	}else{
  		console.log('hide');
	  	this.showHobbies= true;
  	}
  }
  addHobby(hobby){
  	//console.log(hobby);
  	this.hobbies.push(hobby);
  }

  deleteHobby(i){
  	this.hobbies.splice(i, 1);
  }
}

interface address{
	street: string;
	city: string;
	state: string;
	pin: string;
} 

interface post{
	id: number;
	title: string;
	body: string;
}

interface photo{
	albumId: number;
	id: number;
	title: string;
	url: string;
}