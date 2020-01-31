import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../../services/photo-service.service';
import {ActivatedRoute, Router } from '@angular/router'
import {Photo} from '../../interfaces/Photo'

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  img: string;
  photo:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.img = params['img'];
      this.photoService.getPhoto(this.img)
        .subscribe(
          res => {
            this.photo = res;
           console.log(this.photo)
          },
          err => console.log(err)
        )
    });
  }

}
