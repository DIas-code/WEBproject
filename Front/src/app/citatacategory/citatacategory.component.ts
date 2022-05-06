import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryServiceService} from "../services/category-service.service";
import {Category} from "../models";

@Component({
  selector: 'app-citatacategory',
  templateUrl: './citatacategory.component.html',
  styleUrls: ['./citatacategory.component.css']
})
export class CitatacategoryComponent implements OnInit {
  // @ts-ignore
  category: Category;
  constructor(private route: ActivatedRoute,
              private cService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory(){
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.cService.getCategore(id).subscribe((data)=>{
        this.category = data
      });
    });
  }
}
