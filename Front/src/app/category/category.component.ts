import { Component, OnInit } from '@angular/core';
import {Category} from "../models";
import {CategoryServiceService} from "../services/category-service.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  constructor(private  catService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.catService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
}
