<template>
  <ion-page>
    <ion-router-outlet></ion-router-outlet>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-row class="ion-justify-content-center">
        <ion-col size="4">
          <ion-item>
            <ion-label>Correo</ion-label>
            <ion-input Type="email" id="correo"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col size="4">
          <ion-item>
            <ion-label>Contraseña</ion-label>
            <ion-input Type="password" id="contraseña"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col size="4">
          <ion-button expand="block" @click="agregarClaves()" href="tabs/tab1">Iniciar Sesión</ion-button>
          <alert-controller></alert-controller>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>


<script>


import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  alertController,
  IonButton,
  IonItem,
  IonInput,
} from "@ionic/vue";
import { useRouter } from "vue-router";
export default {

  name: "Login-Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    alertController,
    IonButton,
    IonItem,
    IonInput,
  },
setup() {
      const router = useRouter();
     const end = () => {
      // something to do.
      return router.push({ name: 'tab1'});
    };
    return {
      end,
    }
    },
  data() {
    return {
      claves: 1,
    };
  },
  methods: {
    async agregarClaves() {
      {
        document.getElementById("correo").value = "";
        document.getElementById("contraseña").value = "";
        const alert = await alertController.create({
          cssClass: "Inicio de sesión exitoso",
          header: "Inicio de sesión exitoso",
          buttons: ["Aceptar"],
        });
        await alert.present();
      }
    },
  },
};




</script>

