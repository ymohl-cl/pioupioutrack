<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<ion-list>
				<ion-item v-for="f in flights()" v-bind:key="f.id">
					<ion-label :set="spot = this.$store.getters.takeOff(f.takeOffId)">
						<h2>{{ spot.name }}</h2>
						<h3>time: {{ f.duration}} min</h3>
					</ion-label>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>
<script src="./FlightHistory.ts"></script>