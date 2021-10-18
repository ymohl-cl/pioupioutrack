import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

const photos = ref<UserPhoto[]>([]);

export function usePhotoGallery() {

    const takePhoto = async () => {
        const cameraPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        const fileName = new Date().getTime() + '.jpeg';
        const savedFileImage = {
            filepath: fileName,
            webviewPath: cameraPhoto.webPath
        };
    };
    return {
        photos,
        takePhoto
    };
}

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}