import { Geolocation, Position } from '@capacitor/geolocation';

export interface DGPS {
    speed: number;
    altitude: number;
    latitude: number;
    longitude: number;
    accuracy: number;
}

export default class SGPS {
    data: DGPS = {} as DGPS;

    constructor() {
        this.geolocation().then((loc) => {
            if (loc !== undefined) {
                if (loc.coords.speed !== null) {
                    this.data.speed = loc.coords.speed;
                } else {
                    this.data.speed = 0;
                }

                if (loc.coords.altitude !== null) {
                    this.data.altitude = loc.coords.altitude;
                } else {
                    this.data.altitude = 0;
                }

                if (loc.coords.latitude !== null) {
                    this.data.latitude = loc.coords.latitude;
                } else {
                    this.data.latitude = 0;
                }

                if (loc.coords.longitude !== null) {
                    this.data.longitude = loc.coords.longitude;
                } else {
                    this.data.longitude = 0;
                }

                if (loc.coords.accuracy !== null) {
                    this.data.accuracy = loc.coords.accuracy;
                } else {
                    this.data.accuracy = 0;
                }
            }
        })
    }
    async geolocation(): Promise<Position | undefined> {
        const information = await Geolocation.getCurrentPosition();
        if (information !== undefined) {
            return information;
        }
        return undefined
    }
}

