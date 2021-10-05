import { defineComponent } from 'vue';
import {
    IonContent,
    IonCard,
    IonPage,
    IonItem,
    IonInput,
    IonButton,
} from '@ionic/vue';
import { useStore } from '@/store';
import { isSimilare } from '@/scripts/SignUp';
import { User } from '@/store/user';

export default defineComponent({
    name: 'Login',
    components: {
        IonContent,
        IonCard,
        IonPage,
        IonItem,
        IonInput,
        IonButton,
    },
    data() {
        const name = ""
        const surname = ""
        const email = ""
        const fstPassword = ""
        const scdPassword = ""
        const message = ""
        return {
            name,
            surname,
            email,
            fstPassword,
            scdPassword,
            message,
        }
    },
    setup() {
        useStore()
    },
    methods: {
        signUp(): void {
            this.message = "";
            if (this.name === "" || this.surname === "" || this.email === "" || this.fstPassword === "" || this.scdPassword === "") {
                this.message = "Please, fill in all the neccessaries fields!"
                return;
            }
            else if (!isSimilare(this.fstPassword, this.scdPassword)) {
                this.message = "Password error!";
                return;
            }
            else {
                this.$store.commit("setUser", new User(this.name, this.surname, this.email, this.fstPassword));
                this.$router.push('/flight');
            }
        },
    },
})