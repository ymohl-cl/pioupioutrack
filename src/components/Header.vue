<template>
	<ion-menu side="start" menu-id="menuAppId" content-id="menuAppContent">
		<ion-header>
			<ion-toolbar color="primary">
				<ion-title>PiouPiou-Track</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content id="menuAppContent">
			<ion-list>
				<ion-item button>
					<ion-icon :icon="idCardOutline" slot="start"></ion-icon>
					<ion-label>
						<ion-button fill="clear" href="/flight">Flight</ion-button>
					</ion-label>
				</ion-item>
				<ion-item button>
					<ion-icon :icon="locationOutline" slot="start"></ion-icon>
					<ion-label>
						<ion-button fill="clear" href="/flight">Spots</ion-button>
					</ion-label>
				</ion-item>
				<ion-item button>
					<ion-icon :icon="pricetagsOutline" slot="start"></ion-icon>
					<ion-label>
						<ion-button fill="clear" href="/flight">Paragliding sails</ion-button>
					</ion-label>
				</ion-item>
				<ion-item button>
					<ion-icon :icon="accessibilityOutline" slot="start"></ion-icon>
					<ion-label>
						<ion-button fill="clear" href="/flight">Learning</ion-button>
					</ion-label>
				</ion-item>
				<ion-item button>
					<ion-icon :icon="peopleOutline" slot="start"></ion-icon>
					<ion-label>
						<ion-button fill="clear" href="/flight">Social</ion-button>
					</ion-label>
				</ion-item>
				<ion-item button>
					<ion-icon :icon="cartOutline" slot="start"></ion-icon>
					<ion-label>
						<ion-button fill="clear" href="/flight">Troc</ion-button>
					</ion-label>
				</ion-item>
				<ion-item button>
					<ion-icon :icon="personOutline" slot="start"></ion-icon>
					<ion-label>
						<ion-button fill="clear" href="/flight">Profile</ion-button>
					</ion-label>
				</ion-item>
				<ion-item button>
					<ion-icon :icon="cameraOutline" slot="start"></ion-icon>
					<ion-label>
						<ion-button fill="clear" href="/picture">Gallery</ion-button>
					</ion-label>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-menu>
	<ion-header>
		<ion-toolbar>
			<ion-item>
				<ion-button fill="clear" slots="icon-only">
					<ion-menu-button menu="menuAppId"></ion-menu-button>
				</ion-button>
				<ion-title>{{ title }}</ion-title>
			</ion-item>
		</ion-toolbar>
	</ion-header>
</template>

<script src="./Header.ts"></script>