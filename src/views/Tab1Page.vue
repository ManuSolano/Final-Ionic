<template>
  <ion-page>
    <ion-content>
      <ion-header>
        <ion-title class="wrapper2" style="font-size: 32px; text-align: center"
          >Claves</ion-title
        >
      </ion-header>

      <div class="wrapper">
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col size="5">
              <div class="ion-text-center title">Clave</div>
            </ion-col>
            <ion-col size="5">
              <div class="ion-text-center title">Status</div>
            </ion-col>
          </ion-row>
          <ion-row
            class="ion-justify-content-center"
            v-for="(item, index) in listaClaves"
            :key="index"
          >
            <ion-col size="5">
              <div>{{ listaKeys[index] }}</div>
            </ion-col>
            <ion-col size="5">
              <div>{{ listaStats[index] }}</div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ExploreContainer name="Tab 1 page" />
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
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";
import { defineComponent } from 'vue';
import { getDatabase, ref, onValue } from "firebase/database";
export default  defineComponent({
  name: 'Tab1Page',
  components: {
    IonHeader,
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
});
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

.wrapper2 {
  margin-top: 10%;
  align-items: center;
}
</style>

