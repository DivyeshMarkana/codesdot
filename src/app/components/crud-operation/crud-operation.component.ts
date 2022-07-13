import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.scss']
})
export class CrudOperationComponent implements OnInit {

  posts: any = []
  editMode: boolean = false
  searchKey: string = ''
  searchTerm: string = ''

  constructor(private postService: PostService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.postService.getPosts().subscribe((response) => {
      this.posts = response
      console.log(response);

    })
  }


  addTask(post: any) {
    this.posts.unshift({
      title: post.value,
      body: '',
      id: 908,
      userId: 1
    })
    // console.log(post.value);


  }

  editTask(post: any) {

    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '300px',
      height: '300px',
      data: {
        title: post.title
      }
    })

    dialogRef.afterClosed().subscribe((response) => {

      post.title = response

      this.postService.editPost(response).subscribe((res) => {
        console.log(res);

      })

    })
  }

  deletePost(post: any) {
    // console.log(post);

    this.postService.deletePost(post).subscribe((response) => {
      console.log(response);
      const index: number = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
  }

  search(event: any) {
    this.searchTerm = event.target.value
  }

}
