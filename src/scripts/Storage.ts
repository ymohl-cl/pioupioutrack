//import { Flight } from '@/store/flight';
import { GetResult, Storage } from'@capacitor/storage';
//import { DeviceInformations } from './SDevice';

export default class SStorage {
    constructor() {
        // check the access storage
    }
    async write(key: string, value: any): Promise<void> {
        return await Storage.set({
            key: key,
            value: JSON.stringify({
                value: value,
            })
        })
    }
    read(key: string): any {
        let value: any;
        this.internalRead(key).then((data: GetResult) => {
            if (data.value !== null) {
                value =  JSON.parse(data.value);
            }
        })
        return value
    }
    async internalRead(key: string): Promise<GetResult> {
        return await Storage.get({key: key})
   }
}

// get(options: { key: string; }) => Promise<{ value: string | null; }>
/*
export async function setFlight(flight: Flight, id: number): Promise<void> {
    await Storage.set({
        key: 'flight',
        value: JSON.stringify({
            id: id,
            value: flight
        }),
    })
}

export async function getFlight() {
    const ret = await Storage.get({ key: 'flight'});
    if (ret.value !== null) {
        const fly = JSON.parse(ret.value);
        return fly
    }
}

export async function setDevice(device: DeviceInformations, id: number): Promise<void> {
    await Storage.set({
        key: 'device',
        value: JSON.stringify({
            //id: id,
            value: device
        }),
    })
}

export async function getDevice() {
    const ret = await Storage.get({ key: 'device'});
    if (ret.value !== null) {
        const dev = JSON.parse(ret.value);
        return dev;
    }
}*/