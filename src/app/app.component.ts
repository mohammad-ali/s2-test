import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [{
    title : 'red',
    imageUrl:'assets/images/1.jpg',
    content:'this is red'
  },
  {
    title : 'yellow',
    imageUrl:'assets/images/2.jpg',
    content:'this is yellow'
  },
  {
    title : 'blue',
    imageUrl:'assets/images/3.jpg',
    content:'this is blue'
  }
];

getdata(){
  return this.posts;
}

}
