import { defineComponent } from 'vue';
import { camera, trash, close } from 'ionicons/icons';
import { 
	IonPage, 
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
import SCamera, { DCameraUserPhoto } from "@/scripts/ServiceCamera";

const photos: Array<DCameraUserPhoto> = [];
export default  defineComponent ({
	name: 'Pictures',
	components: { 
		IonPage, 
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
		IonImg 
	},
	data() {
		return {
			photos,
		}
	},
	setup() {
		const scam = new SCamera();
		return {
			scam,
			//takePhoto,
			camera, trash, close
		}
	},
	methods: {
		picture(): void {
			this.scam.takePhoto().then((photo: DCameraUserPhoto) => {
				this.photos.push(photo);
			})
		}
	}
})