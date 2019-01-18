// import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-post',
//   templateUrl: './post.component.html',
//   styleUrls: ['./post.component.css']
// })
// export class PostComponent implements OnInit {
//  posts: any;
//  private url = 'https://jsonplaceholder.typicode.com/posts';
//   constructor(private http: HttpClient) {
//     http.get('https://jsonplaceholder.typicode.com/posts')
//     .subscribe(response => {
//       console.log(response);
//       this.posts = response;
//     });
//   }
//   createPost(input: HTMLInputElement) {
//     let post: any = { title: input.value };
//     this.http.post(this.url, JSON.stringify(post))
//       .subscribe(response => {
//         post.id = response.json().id;
//         console.log(response.json());
//       });
//   }
//   updatePost(post) {
//     this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
//       .subscribe(response => {
//         console.log(response);
//       });
//   }
//   deletePost(post) {
//     this.http.delete(this.url + '/' + post.id)
//       .subscribe(response => {
//         const index = this.posts.indexOf(post);
//         this.posts.splice(index, 1);
//       });
//   }
//   ngOnInit() {
//   }

// }
