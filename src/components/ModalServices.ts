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
import { Geolocation, Position } from '@capacitor/geolocation';

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
    data(){
        return {
            informations: {
                sp: 0,
                al: 0,
                la: 0,
                lo: 0,
                ac: 0
            }
        }
    },
    methods: {
        close() {
            this.modalInstance.close()
        },
        async speed(): Promise<number> {
            const speed = await (await Geolocation.getCurrentPosition()).coords.speed;
            if (speed === null) {
                return 0;
            }
            return speed;
        },
        async altitude(): Promise<number> {
            const altitude = await (await Geolocation.getCurrentPosition()).coords.altitude;
            if (altitude === null) {
                return 0;
            }
            return altitude;
        },
        async latitude(): Promise<number> {
            const latitude = await (await Geolocation.getCurrentPosition()).coords.latitude;
            if (latitude === null) {
                return 0;
            }
            return latitude;
        },
        async longitude(): Promise<number> {
            const longitude = await (await Geolocation.getCurrentPosition()).coords.longitude;
            if (longitude === null) {
                return 0;
            }
            return longitude;
        },
        async accurate(): Promise<number> {
            const accurate = await (await Geolocation.getCurrentPosition()).coords.accuracy;
            if (accurate=== null) {
                return 0;
            }
            return accurate;
        },
        speedInfo(): number { 
            this.speed().then((data: number) => {
                if (data !== null){
                    this.informations.sp = data;
                }
            })
            return this.informations.sp;
        },
        altitudeInfo(): number { 
            this.altitude().then((data: number) => {
                if (data !== null){
                    this.informations.al = data;
                }
            })
            return this.informations.al;
        },
        latitudeInfo(): number { 
            this.latitude().then((data: number) => {
                if (data !== null){
                    this.informations.la = data;
                }
            })
            return this.informations.la;
        },
        longitudeInfo(): number { 
            this.longitude().then((data: number) => {
                if (data !== null){
                    this.informations.lo = data;
                }
            })
            return this.informations.lo
        },
        accurateInfo(): number { 
            this.accurate().then((data: number) => {
                if (data !== null){
                    this.informations.ac = data;
                }
            })
            return this.informations.ac;
        },
    },
})