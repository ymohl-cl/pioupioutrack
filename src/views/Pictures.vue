<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Gallery</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Tab 2</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-tab-button tab="tab2" href="/tabs/tab2">
                <ion-icon :icon="images" />
                <ion-label>Photos</ion-label>       
            </ion-tab-button>
            <ion-fab vertical="bottom" horizontal="center" slot="fixed">
                <ion-fab-button @click="takePhoto()">
                    <ion-icon :icon="camera"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script src="./Pictures.ts"></script>
