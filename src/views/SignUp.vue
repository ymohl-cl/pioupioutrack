<template>
	<ion-page>
		<ion-card class="ion-text-center">
			<ion-card-header center>
				<ion-card-title ion-text-center>Welcome to PiouPiouTrack!</ion-card-title>
			</ion-card-header>
			<br>
			<ion-item class="ion-text-center" lines="none">
                <ion-label ion-text-center>{{ message }}</ion-label>
            </ion-item>
			<br>
			<ion-card-content :fullscreen="true">
                <ion-item lines="none">
                    <ion-input v-model="name" placeholder="Enter your first name"></ion-input>
                </ion-item>
                <ion-item lines="none">
                    <ion-input v-model="surname" placeholder="Enter your last name"></ion-input>
                </ion-item>
				<ion-item lines="none">
					<ion-input type="email" v-model="email" placeholder="Enter your email"></ion-input>
				</ion-item>
				<ion-item lines="none">
					<ion-input type="password" v-model="fstPassword" placeholder="Enter your password"></ion-input>
				</ion-item>
				<ion-item lines="none">
					<ion-input type="password" v-model="scdPassword" placeholder="Enter your password again"></ion-input>
				</ion-item>
                <br>
                <br>
                <br>
				<ion-button expand="block" shape="round" fill="outline" type="submit" v-on:click="signUp()">Sign up</ion-button>
			</ion-card-content>
		</ion-card>
	</ion-page>
</template>
<script src="./SignUp.ts"></script>