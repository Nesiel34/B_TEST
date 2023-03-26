import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDevice } from 'src/app/model/IComponent.interface';
import { SensorService } from 'src/app/service/Sensor.service';

@Component({
  selector: 'app-new-sensor',
  templateUrl: './new-sensor.component.html',
  styleUrls: ['./new-sensor.component.scss']
})
export class NewSensorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewSensorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sensorService:SensorService,
  ) {}


  fg!:FormGroup;
  devices!:IDevice[];
  ngOnInit(): void {
    this.fg = new FormGroup({
      name:new FormControl('',Validators.required),
      Device:new FormControl(null,Validators.required),
      status:new FormControl(null,Validators.required),
    })
    this.devices = this.sensorService.sensorsList;
  }

  close(){
    this.dialogRef.close();
  }

  addSensor(){
    this.fg.markAsTouched();
    if(this.fg.valid){
      this.dialogRef.close(this.fg.value);
    }
  }

}
