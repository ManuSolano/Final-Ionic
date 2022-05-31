<template>
  <ion-page>
    <ion-content>
      <ion-header>
        <ion-title class="wrapper2" style="font-size: 32px; text-align: center"
          >Nueva Clave</ion-title
        >
      </ion-header>

      <div class="wrapper">
        <ion-row class="ion-justify-content-center">
          <ion-col size="6">
            <ion-item>
              <ion-input placeholder="Clave" type="text" id="input"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>

        <ion-row class="ion-justify-content-center">
          <ion-col size="6">
            <ion-button expand="block" @click="agregarClaves()"
              >Agregar claves</ion-button
            >
          </ion-col>
        </ion-row>

        <alert-controller></alert-controller>
      </div>
      <ExploreContainer name="Tab 3 page" />
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
import { getDatabase, ref, set } from "firebase/database";

import { defineComponent } from 'vue';

export default  defineComponent({
  name: 'Tab3Page',
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
      var errores = 0;
      const db = getDatabase();
      if (document.getElementById("input").value == "") {
        errores += 1;
      } else {
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
      }
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
});
</script>

<style>
.wrapper {
  margin-top: 20%;

  align-items: center;
}
.wrapper2 {
  margin-top: 10%;
  align-items: center;
}
ion-content {
  --ion-background-color: #243343;
}

ion-input {
  --background: #3d535c;
}
</style>