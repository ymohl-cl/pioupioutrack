<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Your geolocation</ion-title>
                <ion-button slot="end">
					<ion-button @click="close()">Close</ion-button>
				</ion-button>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-item lines="none">
                <ion-label>Speed :</ion-label>
                <ion-input disabled color="primary" name="speed" :value="speed"></ion-input>
            </ion-item>
            <ion-item lines="none">
                <ion-label>Altitude:</ion-label>
                <ion-input disabled color="primary" name="altitude" :value="altitude" ></ion-input>
            </ion-item>
            <ion-item lines="none">
                <ion-label>Latitude :</ion-label>
                <ion-input disabled color="primary" name="latitude" :value="latitude" ></ion-input>
            </ion-item>
            <ion-item lines="none">
                <ion-label>Longitude :</ion-label>
                <ion-input disabled color="prButton disabledimary" name="longitude" :value="longitude"></ion-input>
            </ion-item>
            <ion-item lines="none">
                <ion-label>Accurate :</ion-label>
                <ion-input disabled color="primary" name="accurate" :value="accuracy"></ion-input>
            </ion-item>
            <ion-item lines="none" v-if="ok == true">
                <p>You can click on :</p>
                <ion-button expand="block" shape="round" fill="outline" type="submit" v-on:click="read()">Play</ion-button>
            </ion-item>
            <ion-item lines="none" v-else>
                <p>It's not ok</p>
            </ion-item>
        </ion-content>
    </ion-page>
</template>

<script src="./ModalServices.ts"></script>