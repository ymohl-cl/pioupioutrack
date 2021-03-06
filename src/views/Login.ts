import { defineComponent } from 'vue';
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
        const email = ""
        const password = ""
        const message = "Please log in"
        return {
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