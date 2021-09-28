import { defineComponent } from 'vue';
import {
	IonContent,
	IonPage,
	IonList,
	IonItem,
	IonLabel,
} from '@ionic/vue';
import { useStore } from '@/store';
import { Flight } from '@/store/flight';

export default defineComponent({
	name: 'FlightHistory',
	components: {
		IonContent,
		IonPage,
		IonList,
		IonItem,
		IonLabel,
	},
	methods: {
		flights(): Array<Flight> {
			return this.$store.getters.flights
		}
	},
	setup() {
		useStore()
	}
})
