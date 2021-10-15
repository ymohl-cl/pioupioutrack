import SDevice from "@/scripts/ServiceDevice";
import SGPS from "@/scripts/ServiceGPS";
import SStorage from "@/scripts/Storage";

export class Driver {
    device: SDevice;
    geolocation: SGPS;
    // camera: SCamera;
    storage: SStorage;

    constructor() {
        this.device = new SDevice();
        this.geolocation = new SGPS();
        this.storage = new SStorage();
    }
}