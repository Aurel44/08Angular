import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Date();

  posts = [
    {
      title: "Mon Premier Post",
      content: "Ad cillum duis aute anim anim eiusmod voluptate irure proident. Id non sint excepteur velit. Laborum amet cupidatat eiusmod ipsum officia reprehenderit. Exercitation tempor duis aliquip ullamco ad fugiat cupidatat laborum labore magna occaecat in minim anim. Dolor commodo cupidatat voluptate sunt eu ex consequat pariatur amet enim adipisicing ex ad excepteur. Amet exercitation in cupidatat cupidatat tempor ad dolore. Fugiat irure consectetur Lorem excepteur adipisicing veniam in cillum tempor nulla exercitation veniam est.",
      loveIts: 0,
      created_at: this.lastUpdate,
      index: 0
    },
    {
      title: "Mon Deuxième Post",
      content: "Ad cillum duis aute anim anim eiusmod voluptate irure proident. Id non sint excepteur velit. Laborum amet cupidatat eiusmod ipsum officia reprehenderit. Exercitation tempor duis aliquip ullamco ad fugiat cupidatat laborum labore magna occaecat in minim anim. Dolor commodo cupidatat voluptate sunt eu ex consequat pariatur amet enim adipisicing ex ad excepteur. Amet exercitation in cupidatat cupidatat tempor ad dolore. Fugiat irure consectetur Lorem excepteur adipisicing veniam in cillum tempor nulla exercitation veniam est.",
      loveIts: 0,
      created_at: this.lastUpdate,
      index: 1
    },
    {
      title: "Mon Troisième Post",
      content: "Ad cillum duis aute anim anim eiusmod voluptate irure proident. Id non sint excepteur velit. Laborum amet cupidatat eiusmod ipsum officia reprehenderit. Exercitation tempor duis aliquip ullamco ad fugiat cupidatat laborum labore magna occaecat in minim anim. Dolor commodo cupidatat voluptate sunt eu ex consequat pariatur amet enim adipisicing ex ad excepteur. Amet exercitation in cupidatat cupidatat tempor ad dolore. Fugiat irure consectetur Lorem excepteur adipisicing veniam in cillum tempor nulla exercitation veniam est.",
      loveIts: 0,
      created_at: this.lastUpdate,
      index: "2",
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
  };

 
  
}
