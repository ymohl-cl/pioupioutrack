import { defineComponent } from 'vue';
import {
	IonMenu,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonItem,
	IonIcon,
	IonLabel,
	IonButton,
	IonMenuButton,
} from '@ionic/vue';
import {
	idCardOutline,
	personOutline,
	pricetagsOutline,
	locationOutline,
	cartOutline,
	peopleOutline,
	accessibilityOutline,
	cameraOutline,
} from 'ionicons/icons';

export default defineComponent({
	name: 'Header',
	components: {
		IonMenu,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonList,
		IonItem,
		IonIcon,
		IonLabel,
		IonButton,
		IonMenuButton,
	},
	props: {
		title: { type: String, required: true }
	},
	setup(){
		return{
			idCardOutline,
			personOutline,
			pricetagsOutline,
			locationOutline,
			cartOutline,
			peopleOutline,
			accessibilityOutline,
			cameraOutline,
		}
	}
})