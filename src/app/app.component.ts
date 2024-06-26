import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'https://angular.io', 3),
      new Article('FullStack', 'https://fullstack.io', 2),
      new Article('Angular Homepage', 'https://angular.io', 1)
    ];
  }


  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArray(): Article[] {
    return this.articles.sort((a, b) => b.votes - a.votes);
  }
}
