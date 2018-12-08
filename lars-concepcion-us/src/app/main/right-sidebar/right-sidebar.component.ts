import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fade } from '../../animationsDir/fade';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
  animations: [
    fade
  ]
})
export class RightSidebarComponent implements OnInit {

  constructor(private router: Router) { }

    // all image is just a sample
    image5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglGBWRUI4Dh9dJi_ZDN_krt3GdgoGuDuJsPHKo-ZPiHMTCPkISA';
    image4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa73KD1HCOWdbn-EmFFmjgqtp6K5L_5-IGoxD170DXIx4DaGuDYQ';
    image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EkcrkKj7HiGnWQxIfDNcq8YDPIo9FBOSK7EscCDI6p0s48pXDg';
    image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1oiViBvC1nK6D_8iijuf9ddU-ifN8RLkO5Iv8NlTlAuYjXw6ptw';
    image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2mfQa0q941jagIJeMAmDWT67v5tMjYLV7oD_9PvFFzXI-skz';
    image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSS-J71MsJN8sgouv1KRM4G_VMRg4Vfv1i8wV_2aajaVHSSc7Dg';
    profile = 'assets/m.jpg';

  ngOnInit() {
  }

}
