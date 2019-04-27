import { Component, OnInit, Input } from '@angular/core';

//========================================================
//========= INJECTED CUSTOMIZE ANIMATIONS FILES ==========
//========================================================
import { fade } from '../../animationsDir/fade';
//========================================================
//========= INJECTED CUSTOMIZE TYPESCRIPT FILES ==========
//========================================================
import { profileSchema } from '../../customTSFIle/profileSchema';
import { ImageFileSchema } from '../../customTSFIle/imageFIleSchema';
//========================================================
//=================== INJECTED SERVICE ===================
//========================================================
import { TimelineService } from '../../client/timeline/timeline.service';
import { LeftSidebarService } from './left-sidebar.service';



@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
  animations: [
    fade
  ]
})
export class LeftSidebarComponent implements OnInit {

  image8 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhXdHFEyyGFagJuBA_cyYIChmeft7_YmT5VmveGwHP2My8Mpc-A';
  image7 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnC_d1POwP1Wjgw3VDMbCFIxCYzfzl6ekv0PPWJZ1spZeBA7_Sw';
  image6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68MzbGnlHWC0gI_nFqUBTysJtGS84_rkxJ5EO1S3DXn42KxWSCQ';
  image5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFwRcitYzHOMd0aShiM9cTZvQgxjdsz_ttgu9xPtJXmEzaNnuUA';
  image4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZzndZ4b6C859OCJpQRWawv3rW2CzU9lgrBJnpSEKcHiwOnG1';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZBAdeJjynD4TRIJOdWnB2teJjZURQ3cuCZhhJTCuQ097SuHn';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2aGRz5l9AhcKzN8fL08rMGd67WjIN1eL7iYYdpDjEzCvGpISnrg';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0q0eyCIKFtZLgUH1Lv_wAQvS5OxZfYimjg8AvBtmg01EnpnEZsQ';
  image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVozO1ptft0uBp4vKsgx5RAQFX8E3eYQP0pGzP612EfQ4mgCu';

  constructor( 
    private timelineService : TimelineService,
    private leftSidebarService: LeftSidebarService
    ) { }

    @Input() function: string;

  //=================================================================
  //============ DISPLAY ALL UPLAODED IMAGE IN DATABASE =============
  //=================================================================
  metadata: ImageFileSchema;

  getImage() {
    this.leftSidebarService.getImageFile().subscribe((data: ImageFileSchema) => this.metadata = data)
  }
  //=================================================================
  //============= DISPLAY SAVED DATA IN PROFILE SCHEMA ==============
  //=================================================================
  prof : profileSchema;

  get() {
    this.timelineService.getData().subscribe((data: profileSchema) => this.prof = data);
  }

  ngOnInit() {
    this.get();
    this.getImage();
  }

}
