<template>
	<ion-page class="ion-text-center">
		<ion-content scroll-y="false" :fullscreen="true">
			<ion-grid>
				<ion-col class="ion-margin">
					<ion-header center class="ion-no-border ion-margin">
						<img src="@/assets/tmp-profiles/pioupioutrackLogo.png">
						<ion-col class="ion-padding-bottom ion-margin">
							<ion-title color="" ion-text-center>{{ message }}</ion-title>
						</ion-col>
					</ion-header>
				</ion-col>
				<ion-col class="ion-margin">
					<ion-item lines="none">
						<ion-input type="email" v-model="email" placeholder="Enter your email"></ion-input>
					</ion-item>
					<ion-item lines="none">
						<ion-input type="password" v-model="password" placeholder="Enter your password"></ion-input>
					</ion-item>
					<ion-item lines="none">
						<ion-button slot="end" fill="clear">Forgot password</ion-button>
					</ion-item>
				</ion-col>
				<ion-col class="ion-margin-top">
					<div class="row">
						<div class="col text-center">
							<ion-button expand="block" shape="round" fill="outline" type="submit" v-on:click="checkUser()">Log in</ion-button>
							<ion-button expand="block" shape="round" fill="outline" Href="/signUp">Sign up</ion-button>
						</div>
					</div>
				</ion-col>
				<ion-footer class="ion-no-border ion-margin-top">
					<ion-col class="ion-margin-end ion-margin-bottom">
						<div class="row">
							<ion-label ion-text-center>Or connect you with</ion-label>
						</div>
					</ion-col>
					<ion-col class="ion-margin">
						<div class="row">
							<div class="col text-center">
								<ion-button><ion-icon button slot="start" :icon="logoFacebook"></ion-icon>Facebook</ion-button>
								<ion-button><ion-icon slot="start" :icon="logoGoogle"></ion-icon>Google</ion-button>
							</div>
						</div>
					</ion-col>
					<ion-col class="ion-margin ion-padding-top">
						<div class="row">
							<div class="col text-center">
								<p>&copy; 2021 All Rights Reserved</p>
							</div>
						</div>
					</ion-col>
				</ion-footer>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>
<script src="./Login.ts"></script>