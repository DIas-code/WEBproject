import { Component, OnInit } from '@angular/core';
import {Citata, Comment} from "../models";
import {ActivatedRoute} from "@angular/router";
import {CitataService} from "../services/citata.service";
import {CommentService} from "../services/comment.service";

@Component({
  selector: 'app-citata-detail',
  templateUrl: './citata-detail.component.html',
  styleUrls: ['./citata-detail.component.css']
})
export class CitataDetailComponent implements OnInit {
  // @ts-ignore
  citata: Citata;
  comments: Comment[]=[];
  text ='';
  constructor(private route: ActivatedRoute,
              private citataService: CitataService,
              private commentService: CommentService) { }

  ngOnInit(): void {
    this.getCitata()
    this.getCitataComments()
  }

  getCitata(){
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      const id = +params.get('id');
      this.citataService.getCitata(id).subscribe(data1 =>{
        this.citata=data1
      })
    });
  }
//
  getCitataComments(){
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      const id = +params.get('id');
      this.commentService.getCitataComments(id).subscribe(data =>{
        this.comments =data;
        }
      )
    });
  }

  postComment(){
    if (this.text===''){
      window.alert('Print a text, please!');
    }
    const comment = {
      text: this.text,
    }
    this.commentService.addComment(this.citata.id, comment).subscribe(data=>{
      this.comments.push(data)
      this.text=''
    });
  }

  destroy (comment:Comment){
    this.comments = this.comments.filter(comm => comm !== comment);
  }
}
