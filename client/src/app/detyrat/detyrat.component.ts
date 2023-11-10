import { Component } from '@angular/core';

@Component({
  selector: 'app-detyrat',
  templateUrl: './detyrat.component.html',
  styleUrls: ['./detyrat.component.scss']
})
export class DetyratComponent {

  arr = [
    { id: 1, name: 'Donate For Palestine', describe: 'donation', price: 0 },
  
  ];

  Donation(selectDonateid:number,increasePrice: boolean){
    for(let donate of this.arr){
if(selectDonateid === donate.id ){
  increasePrice ?(donate.price +=5) : (donate.price -=5)
      }
    }
  }
}


