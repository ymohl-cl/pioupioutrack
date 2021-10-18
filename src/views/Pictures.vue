<template>
    <ion-grid>
        <ion-page>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Gallery</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content :fullscreen="true">
                <ion-row>
                    <ion-col size="6" v-bind:key="photo.filepath" v-for="photo in photos">
                        <p>{{ photo.filepath }}</p>
                        <ion-img :src="photo.webViewPath"></ion-img>
                    </ion-col>
                </ion-row>
                <ion-fab vertical="bottom" horizontal="center" slot="fixed">
                    <ion-fab-button v-on:click="picture()">
                        <ion-icon :icon="camera"></ion-icon>
                    </ion-fab-button>
                </ion-fab>
            </ion-content>
        </ion-page>
    </ion-grid>
</template>

<script src="./Pictures.ts"></script>
