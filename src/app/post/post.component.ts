import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  isAuth = false;

  @Input() postTitle!: string;
  @Input() postContent!: string;
  @Input() postLove!: number;
  @Input() postDate!: Date;


  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
   }

  ngOnInit(): void {
  }
  onPlus() {
    this.postLove ++;
  }

  onMinus() {
    this.postLove --;
  }
}
