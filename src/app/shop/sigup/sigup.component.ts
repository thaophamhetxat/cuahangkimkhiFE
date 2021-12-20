import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {
  form: any;
  hide: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngSubmit() {
    return false;
  }
}
