import Modal from '@/scripts/Modal';
import {
    IonHeader,
    IonTitle,
    IonButton,
    IonToolbar,
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { ok, useStore } from '@/store';
import SGPS from '@/scripts/ServiceGPS';

export default defineComponent({
    name: "ModalServices",
    props: {
        modalInstance: { type: Modal, required: true },
    },
    components: {
        IonHeader,
        IonTitle,
        IonButton,
        IonToolbar,
        IonPage,
        IonContent,
        IonItem,
        IonLabel,
        IonInput,
    },
    data() {
        const dataGeolocation: SGPS = this.$store.getters.geolocation;
        const speed: number = dataGeolocation.data.speed;
        const altitude: number = dataGeolocation.data.altitude;
        const latitude: number = dataGeolocation.data.latitude;
        const longitude: number = dataGeolocation.data.longitude;
        const accuracy: number = dataGeolocation.data.accuracy;
        console.log(ok);
        return {
            speed,
            altitude,
            latitude,
            longitude,
            accuracy,
            ok,
        }
    },
    setup() {
        useStore()
        return {}
    },
    methods: {
        close() {
            this.modalInstance.close();
        },
        read() {
            this.$store.commit("read");
        }
    },
})