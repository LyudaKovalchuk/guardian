import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data;
  error = false;
  counter:number = 1;
  pageAmount:number;
  currentPage:number;
  errorMessage;
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.api.getData().subscribe( (response)=>{
      this.data = response.response.results;
      this.pageAmount = response.response.pages;
    }, (error)=> {
      this.error = true;
      this.errorMessage = error.response.message || "Sorry, we could`t find news for you.";
    })
  }
  refresh() {
    this.api.getData().subscribe( (response)=>{
      this.data = response.response.results;
      this.counter = 1;
    })
  }
  loadNext() {
    if (this.counter <= this.pageAmount-1) {
      this.counter++;
      this.loadPage(this.counter);
    }
  }
  loadPrevious() {
    if (this.counter > 1) {
      this.counter--;
      this.loadPage(this.counter);
    }
  }
  loadNew(event){
    this.counter = +event.target.value;
    this.loadPage(this.counter);
  }

  loadPage(number) {
    this.api.moreData(number).subscribe( (resp)=> {
      this.data = resp.response.results;
      this.error = false;
    }, (error) => {
      this.error = true;
      this.errorMessage = error.response ? error.response.message : "Sorry, we could`t find news for you.";
    })
  }

}
