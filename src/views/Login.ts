import { defineComponent } from 'vue';
import { Device, DeviceInfo, BatteryInfo } from '@capacitor/device';
import { Geolocation, Position } from '@capacitor/geolocation';
import {
    IonContent,
    IonPage,
    IonItem,
    IonInput,
    IonButton,
} from '@ionic/vue';
import {
    logoFacebook,
    logoGoogle,
} from 'ionicons/icons';
import { useStore } from '@/store';
import { connection } from '@/scripts/Connection';
import { User } from '@/store/user';


export default defineComponent({
    name: 'Login',
    components: {
        IonContent,
        IonPage,
        IonItem,
        IonInput,
        IonButton,
    },
    data() {
        const pos: Position = null
        const name = ""
        const level = 0
        const email = ""
        const password = ""
        const message = "Please log in"
        return {
            pos,
            name,
            level,
            email,
            password,
            message,
        }
    },
    setup() {
        useStore()
        return {
            logoFacebook,
            logoGoogle,
        }
    },
    methods: {
        nameDevice(): void {
            console.log("coucou- 1")
            this.dInfo().then((data: DeviceInfo) => {
                if (data.name !== undefined) {
                    this.name = data.name
                }
            })
        },
        async dInfo(): Promise<DeviceInfo> {
            const info = await Device.getInfo();
            return info
            
        },
        batteryDevice(): void {
            console.log("coucou- 2")
            this.bInfo().then((data: BatteryInfo) => {
                if (data.batteryLevel !== undefined) {
                    this.level = data.batteryLevel * 100.0
                }
            })
        },
		async bInfo(): Promise<BatteryInfo> {
            const info = await Device.getBatteryInfo();
            return info
        },
        tOu(): void {
            console.log("coucou- 3")
            this.gInfo().then((data: Position) => {
                if (data.coords !== undefined ) {
                    this.pos = data
                }
            })
        },
        async gInfo(): Promise<Position> {
            const info = await Geolocation.getCurrentPosition()
            return info
        },
        checkUser(): void {
            if (this.email === "" || this.password === "" ){
                this.message = "Please enter your informations to login!";
                return
            }
            if (connection(this.email, this.password)) {
                this.$store.commit("setUser", new User("chris", "bat", this.email, this.password));
                this.$router.push('/flight');
                return;
            } else {
                this.message = "Password or username error!";
            }
        },
    },
})