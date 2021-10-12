import { Device, DeviceInfo } from '@capacitor/device'

export class DeviceInformations {
    name: string;
    model: string;
    platform: string;
    osVersion: string;
    memUsed: number;
    diskFree: number;
    diskTotal: number;

    constructor(name: string, model: string, platform: string, osVersion: string, memUsed: number, diskFree: number, diskTotal: number) {
		this.name = name,
        this.model = model,
        this.platform = platform,
        this.osVersion = osVersion,
        this.memUsed = memUsed,
        this.diskFree = diskFree,
        this.diskTotal = diskTotal
	}
}

const logDeviceInfo = async () => {
    const info =  await Device.getInfo();
    return info;
};

export function device(): any {
    const info: DeviceInformations = {
        "name" : "",
        "model" : "",
        "platform" : "",
        "osVersion" : "",
        "memUsed" : 0,
        "diskFree" : 0,
        "diskTotal" : 0
    }
    
    logDeviceInfo().then((data: DeviceInfo) => {
        if (data.name !== undefined) {
            info.name = data.name;
        }
        if (data.model !== undefined) {
            info.model = data.model;
        }
        if (data.platform !== undefined) {
            info.platform = data.platform;
        }
        if (data.osVersion !== undefined) {
            info.osVersion = data.osVersion;
        }
        if (data.memUsed !== undefined) {
            info.memUsed = data.memUsed;
        }
        if (data.diskFree !== undefined) {
            info.diskFree = data.diskFree;
        }
        if (data.diskTotal !== undefined) {
            info.diskTotal = data.diskTotal;
        }
    })
    return info;
}

// const logDeviceLanguage = async () => {
//     const lang = await Device.getLanguageCode();
//     return lang;
// };
