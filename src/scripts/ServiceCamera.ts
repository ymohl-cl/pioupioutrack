import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


export interface DCameraUserPhoto {
    filepath: string;
    webViewPath?: string;
}

export default class SCamera {
    async takePhoto(): Promise<DCameraUserPhoto> {
        const cameraPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        const filename = new Date().getTime() + ".jpeg";
        const savedFileImage = {
            filepath: filename,
            webViewPath: cameraPhoto.webPath,
        };
        return savedFileImage;
    }
}