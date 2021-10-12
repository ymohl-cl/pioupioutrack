<template>
	<ion-page>
		<Header title="Flight"/>
		<ion-content>
			<ion-tabs>
				<ion-tab-bar slot="top">
					<ion-tab-button tab="resume" href="/flight/resume">
						<ion-label>Resume</ion-label>
					</ion-tab-button>
					<ion-tab-button tab="history" href="/flight/history">
						<ion-label>History</ion-label>
					</ion-tab-button>
				</ion-tab-bar>
			</ion-tabs>
			<ion-fab vertical="bottom" horizontal="start" slot="fixed">
				<ion-fab-button @click="position" color="secondary">
					<ion-icon :icon="navigate"></ion-icon>
				</ion-fab-button>
			</ion-fab>
			<ion-fab vertical="bottom" horizontal="end" slot="fixed">
				<ion-fab-button @click="addFlight" color="secondary">
					<ion-icon :icon="add" />
				</ion-fab-button>
			</ion-fab>
		</ion-content>
	</ion-page>
</template>

<script src="./TabsFlight.ts"></script>