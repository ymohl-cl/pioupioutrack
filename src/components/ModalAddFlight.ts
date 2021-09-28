import { defineComponent } from 'vue';
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonInput,
	IonButtons,
	IonButton,
	IonList,
	IonItem,
	IonLabel,
	IonSelect,
	IonSelectOption,
	IonItemDivider,
	IonTextarea,
	IonCheckbox,
} from '@ionic/vue';
import Modal from '@/scripts/Modal';
import { useStore } from '@/store';
import { Spot } from '@/store/spot'
import { Flight } from '@/store/flight';

export default defineComponent({
	name: "ModalAddFlight",
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonInput,
		IonButtons,
		IonButton,
		IonList,
		IonItem,
		IonLabel,
		IonSelect,
		IonSelectOption,
		IonItemDivider,
		IonTextarea,
		IonCheckbox,
	},
	props: {
		modalInstance: { type: Modal, required: true }
	},
	methods: {
		close() {
			this.modalInstance.close()
		},
		updateTakeOff() {
			this.takeOffSpot = this.$store.getters.takeOff(this.flight.takeOffId)
		},
		updateLanding() {
			this.landingSpot = this.$store.getters.landing(this.flight.landingId)
		},
		valid() {
			this.$store.commit("addFlight", this.flight)
			this.close()
		}
	},
	data(){
		const takeOffSpot: Spot = this.$store.getters.popularTakeOff
		const landingSpot: Spot = this.$store.getters.popularLanding
		const flight: Flight = new Flight(0)

		flight.takeOffId = takeOffSpot.suid
		flight.landingId = landingSpot.suid

		return {
			takeOffSpot,
			landingSpot,
			flight,
		}
	},
	setup(){
		useStore()
		return{}
	}
})