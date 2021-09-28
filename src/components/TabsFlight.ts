import { defineComponent } from 'vue';
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonItem,
	IonButton,
	IonMenuButton,
	IonTitle,
	IonContent,
	IonTabs,
	IonTabBar,
	IonTabButton,
	IonLabel,
	IonFab,
	IonFabButton,
	IonIcon,
} from '@ionic/vue';
import { add } from 'ionicons/icons';
import Header from '@/components/Header.vue';
import ModalAddFlight from '@/components/ModalAddFlight.vue';
import Modal from '@/scripts/Modal'

export default defineComponent({
	name: 'TabsFlight',
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonItem,
		IonButton,
		IonMenuButton,
		IonTitle,
		IonContent,
		IonTabs,
		IonTabBar,
		IonTabButton,
		IonLabel,
		IonFab,
		IonFabButton,
		IonIcon,
		Header,
	},
	methods: {
		addFlight() {
			this.modal.open(ModalAddFlight)
		}
	},
	setup() {
		const modal = new Modal();
		return { add, modal }
	}
})