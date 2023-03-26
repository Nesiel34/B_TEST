import { Component, OnDestroy, OnInit } from '@angular/core';
import { IComponent, ISensors } from './model/IComponent.interface';
import { SensorService } from './service/Sensor.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NewSensorComponent } from './components/new-sensor/new-sensor.component';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {

  constructor(private sensorService:SensorService,private dialog: MatDialog){}


  sensors!:IComponent[];
  sensorsFilter!:IComponent[];
  subscriptionDialog!:Subscription;
  subscriptionInput!:Subscription;
  search!:FormControl;

  ngOnInit(): void {
    this.sensorService.getSensors().subscribe(s=>{
      this.sensors = s.components;
      this.sensorsFilter = this.sensors;
      let sensorsArr =  this.sensors.map(m=>{
        return {
          DeviceId:m.DeviceId,
          DeviceType:m.DeviceType,
          DeviceTypeHebrew:m.DeviceTypeHebrew,
          Picture:m.Picture+""
        }
      });
      this.sensorService.sensorsList =Object.values(sensorsArr.reduce((acc, obj) => ({ ...acc, [obj.Picture]: obj }), {}))
      console.log(this.sensorService.sensorsList);
    });
    this.search = new FormControl();
    this.subscriptionInput = this.search.valueChanges.subscribe(s=>{
      this.sensorsFilter = this.sensors.filter(f=>f.WebSiteDeviceName.includes(s));
    })

  }

  newSensor(){
    const dialogRef = this.dialog.open(NewSensorComponent,{

    });
    this.subscriptionDialog =  dialogRef.afterClosed().subscribe(result => {
      this.sensors.push({
        ComponentOk:+result.status,
        InstallDate:new Date().toString(),
        LastReportDate:new Date().toString(),
        WebSiteDeviceName:result.name,
        DeviceId:result.Device.DeviceId,
        DeviceType:result.Device.DeviceType,
        DeviceTypeHebrew:result.Device.DeviceTypeHebrew,
        Picture:result.Device.Picture
      })
      console.log('The dialog was closed',result);
    });
    this.sensorsFilter = this.sensors;
  }

  countStatus(status:number){
    return this.sensors?.filter(f=>f.ComponentOk==status).length;
  }

  ngOnDestroy(): void {
    this.subscriptionDialog.unsubscribe();
  }
}
