<template>
  <ion-page>
    <ion-content>
      <ion-header>
        <ion-title class="wrapper2" style="font-size: 32px; text-align: center"
          >Usuarios</ion-title
        >
      </ion-header>

      <div class="wrapper">
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col size="5">
              <div class="ion-text-center title">Usuario</div>
            </ion-col>
            <ion-col size="5">
              <div class="ion-text-center title">Carrera</div>
            </ion-col>
          </ion-row>
          <ion-row
            class="ion-justify-content-center"
            v-for="(item, index) in listaClaves"
            :key="index"
          >
            <ion-col size="5">
              <div>{{ listaKeys[index] }} {{ listaApe[index] }}</div>
            </ion-col>
            <ion-col size="5">
              <div>{{ listaCar[index] }}</div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ExploreContainer name="Usuarios" />
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
  name: 'Tab2Page',
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
    const starCountRef = ref(db, "usuario/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0;
      snapshot.forEach((element) => {
        this.listaApe[cont] = element.child("apellido").val();
        this.listaKeys[cont] = element.child("nombre").val();
        this.listaCar[cont] = element.child("carrera").val();
        this.listaClaves[cont] = element.toJSON();
        cont++;
      });
    });
  },
  data() {
    return {
      listaClaves: [{ usuario: "" }],
      listaKeys: [],
      listaApe: [],
      listaCar: [],
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
.wrapper {
  margin-top: 15%;
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
