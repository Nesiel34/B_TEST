import { Component, Input, OnInit } from '@angular/core';
import { IComponent } from 'src/app/model/IComponent.interface';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

  constructor() { }


  @Input() sensor!:IComponent;

  ngOnInit(): void {
  }

  changeStatus(){
    if(this.sensor.ComponentOk==1){
      this.sensor.ComponentOk = 0;
    }
    else {
      this.sensor.ComponentOk = 1;
    }
    this.sensor.LastReportDate = new Date().toString();
  }

}
