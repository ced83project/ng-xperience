import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Canyon } from './canyon';
import { CanyonService } from './canyon.service';
//import { CanyonLevelFilter } from './canyon.pipe';

@Component({
  moduleId: module.id,
  selector: 'my-canyons',
  //pipes: [ CanyonLevelFilter ],
  templateUrl: 'canyons.component.html',
  styleUrls:  ['canyons.component.css']
})

export class CanyonsComponent implements OnInit { 

  canyons: Canyon[];
  selectedCanyon: Canyon;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private canyonService: CanyonService
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd){
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          // you can use DomAdapter
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }
        else {
          window.scrollTo(0,0);
        }
      }
    });
  }
  
  ngOnInit(): void {
    this.getCanyons();
  }

  getCanyons(): void {
    this.canyonService.getCanyons().then(canyons => this.canyons = canyons);
  }

  onSelect(canyon: Canyon): void {
    this.selectedCanyon = canyon;
  }

  gotoDetail(): void {
    this.router.navigate(['/canyon', this.selectedCanyon.id]);
  }
  
}



