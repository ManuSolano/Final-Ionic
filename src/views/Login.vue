<template>
  <ion-page>
    <ion-content>
    <ion-router-outlet></ion-router-outlet>
    <ion-header>
      <ion-title class="wrapper2" style="font-size: 36px; text-align: center;">Login</ion-title>
    </ion-header>
    
      <div class="wrapper">
        <ion-row class="ion-justify-content-center">
          <ion-col size="6">
            <ion-item>
              <ion-input
                placeholder="Correo"
                Type="email"
                id="correo"
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size="6">
            <ion-item>
              <ion-input
                placeholder="Contraseña"
                Type="password"
                id="contraseña"
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size="5">
            <ion-button
              expand="block"
              @click="agregarClaves()"
              >Iniciar Sesión</ion-button
            >
            <alert-controller></alert-controller>
          </ion-col>
        </ion-row>
      </div>
    </ion-content>
  </ion-page>
</template>


<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  alertController,
  IonButton,
  IonItem,
  IonInput,
} from "@ionic/vue";

  

export default {
  name: "Login-Page",
  components: {
    IonHeader,
    IonTitle,
    IonContent,
    IonPage,
    alertController,
    IonButton,
    IonItem,
    IonInput,
  },

  data() {
    return {
      claves: 1,
    };
  },
  methods: {
    async agregarClaves() {
     if(document.getElementById("correo").value == "manuso@gmail.com"&& document.getElementById("contraseña").value == "manuso")
      {
        document.getElementById("correo").value = "";
        document.getElementById("contraseña").value = "";
        const alert = await alertController.create({
          cssClass: "Inicio de sesión exitoso",
          header: "Inicio de sesión exitoso",
          buttons: ["Aceptar"],
        });
        await alert.present();
        await new Promise(r => setTimeout(r, 1500));
        window.location.href = "https://ionic-database.herokuapp.com/";
      }
      
    },
  },
};
</script>
<style>
.wrapper {
  margin-top: 25%;
  align-items: center;
}

.wrapper2 {
  margin-top: 10%;
  align-items: center;
}

ion-content {
  --ion-background-color: #243343;
}
</style>
