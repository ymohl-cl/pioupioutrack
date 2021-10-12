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

    constructor() {
        this.info().then((data: DeviceInfo) => {
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
        })
    }
    async info(): Promise<DeviceInfo> {
        return await Device.getInfo();
    }
}
