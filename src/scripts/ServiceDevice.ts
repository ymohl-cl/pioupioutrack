import { Device, DeviceInfo } from '@capacitor/device'

export interface DDevice {
    name: string;
    model: string;
    platform: string;
    osVersion: string;
    memUsed: number;
    diskFree: number;
    diskTotal: number;
}

export default class SDevice {
    data: DDevice = {} as DDevice;
    init = false;

    constructor() {
        Device.getInfo().then((data: DeviceInfo) => {

            if (data.name !== undefined) {
                this.data.name = data.name;
            }
            if (data.model !== undefined) {
                this.data.model = data.model;
            }
            if (data.platform !== undefined) {
                this.data.platform = data.platform;
            }
            if (data.osVersion !== undefined) {
                this.data.osVersion = data.osVersion;
            }
            if (data.memUsed !== undefined) {
                this.data.memUsed = data.memUsed;
            }
            if (data.diskFree !== undefined) {
                this.data.diskFree = data.diskFree;
            }
            if (data.diskTotal !== undefined) {
                this.data.diskTotal = data.diskTotal;
            }
            this.init = true;
        })
    }
    // async info(): Promise<DeviceInfo> {
    //     return await Device.getInfo();
    // }

    fromJson(json: any): void {
        console.log("3")
        this.data.name = json.name
        this.data.model = json.model
        console.log("Model" + this.data.model)
        this.data.platform = json.platform
        this.data.osVersion = json.osVersion
        this.data.memUsed = json.memUsed
        this.data.diskFree = json.diskFree
        this.data.diskTotal = json.diskTotal
        this.init = true;
    }
}
