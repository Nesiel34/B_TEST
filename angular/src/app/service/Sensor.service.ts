import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IDevice, ISensors } from "../model/IComponent.interface";

@Injectable({providedIn:"root"})
export class SensorService {
  constructor(private httpClient: HttpClient) { }

  // sensorsList1:IDevice[] = [
  //   {
  //     DeviceId:"1200",
  //     DeviceType:"Boiler",
  //     DeviceTypeHebrew:"בקר דוד",
  //     Picture:"boiler_mcohome_rect",
  //   },
  //   {
  //     DeviceId:"2048",
  //     DeviceType:"Camera",
  //     DeviceTypeHebrew:"מצלמה",
  //     Picture:"camera_vivotek",
  //   },
  //   {
  //     DeviceId:"",
  //     DeviceType:"",
  //     DeviceTypeHebrew:"",
  //     Picture:"",
  //   },
  //   {
  //     DeviceId:"",
  //     DeviceType:"",
  //     DeviceTypeHebrew:"",
  //     Picture:"",
  //   },
  //   {
  //     DeviceId:"",
  //     DeviceType:"",
  //     DeviceTypeHebrew:"",
  //     Picture:"",
  //   },
  //   {
  //     DeviceId:"",
  //     DeviceType:"",
  //     DeviceTypeHebrew:"",
  //     Picture:"",
  //   },
  //   {
  //     DeviceId:"",
  //     DeviceType:"",
  //     DeviceTypeHebrew:"",
  //     Picture:"",
  //   },
  //   {
  //     DeviceId:"",
  //     DeviceType:"",
  //     DeviceTypeHebrew:"",
  //     Picture:"",
  //   },
  //   {
  //     DeviceId:"",
  //     DeviceType:"",
  //     DeviceTypeHebrew:"",
  //     Picture:"",
  //   },
  // ];

  public sensorsList!:IDevice[];

  getSensors() {
    const url = `/assets/sensors.json`;
    return this.httpClient.get<ISensors>(url);
  }
}
