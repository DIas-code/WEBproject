import { Component, OnInit } from '@angular/core';
import {CommentService} from "../services/comment.service";
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }
  getComments(){
    // return this.commentService.get
  }
}
