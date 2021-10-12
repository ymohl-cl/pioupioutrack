import { Flight } from '@/store/flight';
import { Storage } from'@capacitor/storage';
import { DeviceInformations } from './Device';

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
            id: id,
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
}