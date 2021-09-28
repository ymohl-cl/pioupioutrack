import { defineComponent } from 'vue';
import {
	IonContent,
	IonPage,
	IonTitle,
} from '@ionic/vue';
import { useStore } from '@/store';
import { Spot } from '@/store/spot'
import { Flight } from '@/store/flight';

export default defineComponent({
	name: 'FlightResume',
	components: {
		IonContent,
		IonPage,
		IonTitle,
	},
	data() {
		const popularTakeOff: Spot = this.$store.getters.popularTakeOff
		const landingSpot: Spot = this.$store.getters.popularLanding
		const myTakeOffs: Array<Spot> = this.$store.getters.takeOffs
		const myLandingsSpots: Array<Spot> = this.$store.getters.landings
		const flights: Array<Flight> = this.$store.getters.flights

		return {
			popularTakeOff,
			landingSpot,
			myTakeOffs,
			myLandingsSpots,
			flights,
		}
	},
	setup(){
		useStore()
		return
	}
})
