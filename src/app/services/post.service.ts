import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

  getPosts() {
    return this.http.get(this.BASE_URL)
  }

  editPost(id: any) {
    const endpoint = `/${id}`
    const requestUrl = this.BASE_URL + endpoint

    return this.http.delete(requestUrl)
  }

  deletePost(id: number) {
    const endpoint = `/${id}`
    const requestUrl = this.BASE_URL + endpoint

    return this.http.delete(requestUrl)
  }
}
