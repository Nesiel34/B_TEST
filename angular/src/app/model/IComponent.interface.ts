export interface ISensors {
  components: IComponent[]
}

export interface IComponent {
  InstallDate: string
  ComponentOk: number
  DeviceTypeHebrew: string
  DeviceId: string
  DeviceType: string
  WebSiteDeviceName: string
  LastReportDate: string
  Picture?: string
  ManufacturerName?: string
  ReceptionLevel?: string
}

export interface IDevice{
  DeviceTypeHebrew: string
  DeviceId: string
  DeviceType: string
  Picture: string
}
