import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  URL = 'https://jairo-restserver-begin.herokuapp.com/photo/';
  URI = 'http://localhost:3000/photo/'

  constructor(private http: HttpClient) { }

  createPhoto(name: string, detail: string, img: File) {
    const fd = new FormData();
    fd.append('img',img);
    fd.append('name',name);
    fd.append('detail',detail);
    return this.http.post(this.URI,fd);
  }
  getPhotos() {
    return this.http.get<Photo[]>(this.URI);
  }
  getPhoto(img: string) {
    return this.http.get(this.URI +`${img}`);
  }
  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

}
