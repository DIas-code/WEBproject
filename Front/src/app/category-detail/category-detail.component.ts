import { Component, OnInit } from '@angular/core';
import {Category, Citata} from "../models";
import {ActivatedRoute} from "@angular/router";
import {CategoryServiceService} from "../services/category-service.service";
import {CitataService} from "../services/citata.service";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  // @ts-ignore
  category: Category;
  citatas: Citata[] = [];
  constructor(private route: ActivatedRoute,
              private categoryService: CategoryServiceService,
              private citatasService: CitataService) { }

  ngOnInit(): void {
    this.GetId()
  }
  GetId(): void{
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      const id = +params.get('id');
      this.getCategory(id);
      this.getCitatas(id);
    })
  }
  getCategory(id:number): void{
    this.citatasService.getCategory(id).subscribe(data => {
      this.category = data;
    })
  }
  getCitatas(id: number): void{
    this.citatasService.getCategoryCitata(id).subscribe(data => {
      this.citatas = data;
    })
  }
}
