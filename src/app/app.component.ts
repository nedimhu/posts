import { Component, OnInit } from '@angular/core';
import { Posts} from './post'
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts: Posts[];

  constructor(private dataService: PostService) {}

  ngOnInit() {
    return this.dataService.getPosts()
      .subscribe(data => this.posts = data)
  }
}
