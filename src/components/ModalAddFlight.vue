<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Bravo pour ton nouveau vol !</ion-title>
				<ion-buttons slot="end">
					<ion-button @click="close()">Close</ion-button>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true" class="ion-padding">
			<ion-list>
				<ion-item>
					<ion-label>Take-Off</ion-label>
					<ion-select name="takeOffId" v-model="flight.takeOffId" @ionChange="updateTakeOff()">
						<ion-select-option disabled>Plus recent</ion-select-option>
						<ion-select-option :set="spot = this.$store.getters.popularTakeOff"
										:value="spot.suid"
										:selected="flight.takeOffId === spot.suid">{{ spot.subName }}</ion-select-option>
						<ion-select-option disabled>Deja visites</ion-select-option>
						<ion-select-option v-for="spot in this.$store.getters.knownTakeOffs"
										:value="spot.suid"
										:selected="flight.takeOffId === spot.suid"
										:key="'visited'+spot.suid">{{ spot.subName }}</ion-select-option>
						<ion-select-option disabled>Tous les spots</ion-select-option>
						<ion-select-option v-for="spot in this.$store.getters.takeOffs"
										:value="spot.suid"
										:selected="flight.takeOffId === spot.suid"
										:key="'all' + spot.suid">{{ spot.subName }}</ion-select-option>
					</ion-select>
				</ion-item>
				<ion-item>
					<ion-label>Name</ion-label>
					<ion-input disabled tupe="decimal" name="altitude" :value="takeOffSpot.name"/>
				</ion-item>
				<ion-item>
					<ion-label>Altitude</ion-label>
					<ion-input disabled tupe="decimal" name="altitude" :value="takeOffSpot.altitude"/>
				</ion-item>
				<ion-item>
					<ion-label>Orientation</ion-label>
					<ion-input disabled tupe="text" name="orientation" :value="takeOffSpot.orientationString()"/>
				</ion-item>
				<ion-item>
					<ion-label>Assisted</ion-label>
					<ion-checkbox slot="end" v-model="flight.takeOffEvaluation.assist"></ion-checkbox>
				</ion-item>
				<ion-item>
					<ion-label>Note (/5)</ion-label>
					<ion-input key="takeOff-note" v-model="flight.takeOffEvaluation.note" type="number" min="0" max="5" :value="flight.takeOffEvaluation.note"/>
				</ion-item>
				<ion-item>
					<ion-label>Positive event</ion-label>
					<ion-textarea v-model="flight.takeOffEvaluation.positiveEvaluation" :value="flight.takeOffEvaluation.positiveEvaluation"/>
				</ion-item>
				<ion-item>
					<ion-label>Negative event</ion-label>
					<ion-textarea v-model="flight.takeOffEvaluation.negativeEvaluation" :value="flight.takeOffEvaluation.negativeEvaluation"/>
				</ion-item>
				<ion-item-divider />
				<ion-item>
					<ion-label>Landing</ion-label>
					<ion-select name="takeOffId" v-model="flight.landingId" @ionChange="updateLanding()">
						<ion-select-option disabled>Plus recent</ion-select-option>
						<ion-select-option :set="spot = this.$store.getters.popularLanding"
										:value="spot.suid"
										:selected="flight.landingId === spot.suid">{{ spot.name }}</ion-select-option>
						<ion-select-option disabled>Deja visites</ion-select-option>
						<ion-select-option v-for="spot in this.$store.getters.knownLandings"
										:value="spot.suid"
										:selected="flight.landingId === spot.suid"
										:key="'visited'+spot.suid">{{ spot.name }}</ion-select-option>
						<ion-select-option disabled>Tous les spots</ion-select-option>
						<ion-select-option v-for="spot in this.$store.getters.landings"
										:value="spot.suid"
										:selected="flight.landingId === spot.suid"
										:key="'all' + spot.suid">{{ spot.name }}</ion-select-option>
					</ion-select>
				</ion-item>
				<ion-item>
					<ion-label>Altitude</ion-label>
					<ion-input disabled tupe="decimal" name="altitude" :value="landingSpot.altitude"/>
				</ion-item>
				<ion-item>
					<ion-label>Orientation</ion-label>
					<ion-input disabled tupe="text" name="orientation" :value="landingSpot.orientationString()"/>
				</ion-item>
				<ion-item>
					<ion-label>Assisted</ion-label>
					<ion-checkbox slot="end" v-model="flight.landingEvaluation.assist"></ion-checkbox>
				</ion-item>
				<ion-item>
					<ion-label>Note (/5)</ion-label>
					<ion-input key="landing-note" v-model="flight.landingEvaluation.note" type="number" min="0" max="5" :value="flight.landingEvaluation.note"/>
				</ion-item>
				<ion-item>
					<ion-label>Positive event</ion-label>
					<ion-textarea v-model="flight.landingEvaluation.positiveEvaluation" :value="flight.landingEvaluation.positiveEvaluation" />
				</ion-item>
				<ion-item>
					<ion-label>Negative event</ion-label>
					<ion-textarea v-model="flight.landingEvaluation.negativeEvaluation" :value="flight.landingEvaluation.negativeEvaluation" />
				</ion-item>
				<ion-item-divider />
				<ion-label>Flight</ion-label>
				<ion-item>
					<ion-label>Duration (minutes)</ion-label>
					<ion-input key="flying-duration" v-model="flight.duration" type="number" :value="flight.duration"/>
				</ion-item>
				<ion-item>
					<ion-label>Assisted</ion-label>
					<ion-checkbox slot="end" v-model="flight.flightEvaluation.assist"></ion-checkbox>
				</ion-item>
				<ion-item>
					<ion-label>Note (/5)</ion-label>
					<ion-input key="flight-note" v-model="flight.flightEvaluation.note" type="number" min="0" max="5" :value="flight.flightEvaluation.note"/>
				</ion-item>
				<ion-item>
					<ion-label>Positive event</ion-label>
					<ion-textarea v-model="flight.flightEvaluation.positiveEvaluation" :value="flight.flightEvaluation.positiveEvaluation" />
				</ion-item>
				<ion-item>
					<ion-label>Negative event</ion-label>
					<ion-textarea v-model="flight.flightEvaluation.negativeEvaluation" :value="flight.flightEvaluation.negativeEvaluation" />
				</ion-item>
			</ion-list>
			<ion-item-divider />
			<ion-button @click="valid()" expand="block">OK</ion-button>
		</ion-content>
	</ion-page>
</template>

<script src="./ModalAddFlight.ts"></script>