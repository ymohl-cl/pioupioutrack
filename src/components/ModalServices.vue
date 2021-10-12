<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Your geolocation</ion-title>
                <ion-buttons slot="end">
					<ion-button @click="close()">Close</ion-button>
				</ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-item lines="none">
                <ion-label>Speed :</ion-label>
                <ion-input disabled color="primary" name="speed" :value="speedInfo()"></ion-input>
            </ion-item>
            <ion-item lines="none">
                <ion-label>Altitude:</ion-label>
                <ion-input disabled color="primary" name="altitude" :value="altitudeInfo()"></ion-input>
            </ion-item>
            <ion-item lines="none">
                <ion-label>Latitude :</ion-label>
                <ion-input disabled color="primary" name="latitude" :value="latitudeInfo()"></ion-input>
            </ion-item>
            <ion-item lines="none">
                <ion-label>Longitude :</ion-label>
                <ion-input disabled color="primary" name="longitude" :value="longitudeInfo()"></ion-input>
            </ion-item>
            <ion-item lines="none">
                <ion-label>Accurate :</ion-label>
                <ion-input disabled color="primary" name="accurate" :value="accurateInfo()"></ion-input>
            </ion-item>
        </ion-content>
    </ion-page>
</template>

<script src="./ModalServices.ts"></script>