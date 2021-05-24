import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userName!: string;

  @Output() userUpdated = new EventEmitter<any>();
  


  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.userUpdated.emit(this.userName);
    this.userName = ''
}

}
