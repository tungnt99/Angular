import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Thanh Tùng';
  public age = 15;
  public traicay = ['Táo', 'Nho', 'Cam', 'Chanh', 'Bưởi', 'Ổi'];
  constructor() { }

  public ngOnInit(): void {
    console.log('traicay = ', this.traicay);
  }

}
