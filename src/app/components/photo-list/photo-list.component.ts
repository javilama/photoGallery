import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../../services/photo-service.service';
import { Router } from '@angular/router'
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos:any[] = [];
  photo:any[]=[];

  constructor(private photoService : PhotoServiceService, private router: Router) {
    
 
    
  } 

  ngOnInit() {

    this.photoService.getPhotos()
      .subscribe(
        res => {
          this.photos = res;
          this.photo = this.photos.photos;
          
          console.log(this.photo)
        },
        err => console.log(err)
      )
    
  }
  selectedCard(img:string) {
    // this.router.navigate(['/photo', img]);

    console.log(img)
  }

}
