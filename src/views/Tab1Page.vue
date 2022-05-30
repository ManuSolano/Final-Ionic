<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Claves</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="4">
            <div  class="ion-text-center title">Clave</div>
          </ion-col>
          <ion-col size="4">
            <div class="ion-text-center title" >Status</div>
          </ion-col>
        </ion-row >
        <ion-row class="ion-justify-content-center" v-for="(item, index) in listaClaves" :key="index">
          <ion-col size="4">
            <div>{{ listaKeys[index] }}</div>
          </ion-col>
          <ion-col size="4">
            <div>{{ listaStats[index] }}</div>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 1 page" />
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
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";
import { getDatabase, ref, onValue } from "firebase/database";
export default {
  name: "Tab1Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
  },
  mounted() {
    const db = getDatabase();
    const starCountRef = ref(db, "clavesQR/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0;
      snapshot.forEach((element) => {
        var stat = "";
        if (element.child("status").val() == "o") {
          stat = "Ocupado";
        } else {
          stat = "Disponible";
        }
        this.listaKeys[cont] = element.key;
        this.listaStats[cont] = stat;
        this.listaClaves[cont] = element.toJSON();
        cont++;
      });
    });
  },
  data() {
    return {
      listaClaves: [{ usuario: "" }],
      listaStats: [],
      listaKeys: [],
    };
  },
};
</script>


<style>
 .title {

  padding: 10px;
  background-color: rgb(47, 79, 79);
}
ion-col > div {
  

  padding: 10px;
  background-color: rgb(83, 115, 99);
}
</style>

