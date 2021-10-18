import SDevice from "@/scripts/ServiceDevice";
import SGPS from "@/scripts/ServiceGPS";
import SCamera from "@/scripts/ServiceCamera";

export class Driver {
    device: SDevice;
    geolocation: SGPS;
    camera: SCamera;

    constructor() {
        this.device = new SDevice();
        this.geolocation = new SGPS();
        this.camera = new SCamera();
    }
}