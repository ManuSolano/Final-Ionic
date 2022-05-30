<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Agregar Claves</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-row class="ion-justify-content-center">
        <ion-col size="5">
          <ion-item>
            <ion-input placeholder="Clave" type="text" id="input"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Claves</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-row class="ion-justify-content-center">
        <ion-col size="5">
          <ion-button expand="block" @click="agregarClaves()"
            >Agregar claves</ion-button
          >
        </ion-col>
      </ion-row>

      <alert-controller></alert-controller>
      <ExploreContainer name="Tab 3 page" />
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
import { getDatabase, ref, set } from "firebase/database";
export default {
  name: "Tab3Page",
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
  data() {
    return {
      claves: 1,
    };
  },
  methods: {
    async agregarClaves() {
      const db = getDatabase();

      var errores = 0;
      set(ref(db, "clavesQR/" + document.getElementById("input").value), {
        status: "d",
      })
        .then(async () => {
          // Data saved successfully!
        })
        .catch(async (error) => {
          console.log(error);
          errores++;
        });

      document.getElementById("input").value = "";
      if (errores > 0) {
        const alert = await alertController.create({
          cssClass: "clase claves no agregadas",
          header: "Claves NO agregadas",
          subHeader: "Error",
          message: "No se agregagon las claves",
          buttons: ["Aceptar"],
        });
        await alert.present();
        const { role } = await alert.onDidDismiss();
        console.log("onDidDismiss resolved with role", role);
      } else {
        const alert = await alertController.create({
          cssClass: "clase claves agregadas",
          header: "Claves agregadas",
          subHeader: "Éxito",
          message: "Se agregaron las claves con éxito",
          buttons: ["Aceptar"],
        });
        await alert.present();
        const { role } = await alert.onDidDismiss();
        console.log("onDidDismiss resolved with role", role);
      }
    },
  },
};
</script>

