<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>

        <IonTitle> Devices </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonButton>Logout</IonButton>
      <IonButton router-link="/">Home</IonButton>
      <IonCard>
        <IonCardContent>
          <IonList v-for="device in devices" :key="device.id">
            <IonItem>
              <IonLabel
                >{{ device.deviceName }} | {{ device.deviceType }}</IonLabel
              >
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
</template>
<script setup lang="ts">
import { collection } from "firebase/firestore";

definePageMeta({
  alias: ["/devices"],
  middleware: ["auth"],
});
const db = useFirestore();
const devices = useCollection(collection(db, "devices"));
</script>
