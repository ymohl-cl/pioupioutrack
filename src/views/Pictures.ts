import { usePhotoGallery, UserPhoto } from "@/scripts/Pictures";
import { images, square, triangle } from 'ionicons/icons';

import { camera, trash } from 'ionicons/icons';
import { IonPage, 
         IonHeader, 
         IonFab, 
         IonFabButton, 
         IonIcon,
         IonToolbar, 
         IonTitle, 
         IonContent, 
         IonGrid, 
         IonRow,
         IonCol, 
         IonImg } from '@ionic/vue';        

export default  {
  name: 'Pictures',
  components: { IonPage, 
                IonHeader, 
                IonFab, 
                IonFabButton, 
                IonIcon,
                IonToolbar, 
                IonTitle, 
                IonContent, 
                IonGrid, 
                IonRow,
                IonCol, 
                IonImg },
  setup() {
      const { photos, takePhoto } = usePhotoGallery();

    return {
      takePhoto,
      camera, trash
    }
  }
}