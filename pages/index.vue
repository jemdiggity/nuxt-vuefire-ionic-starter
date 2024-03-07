<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle> Home </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonButton @click="doLogOut">Logout</IonButton>
      <IonButton router-link="/devices">Devices</IonButton>
      <IonButton router-link="/login">Login</IonButton>
      <IonCard>
        <IonCardContent>{{ user?.email }}</IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
</template>
<script lang="ts" setup>
definePageMeta({
  alias: ["/index"],
  middleware: ["auth"],
});
const router = useRouter();
const user = useFbAuth()?.currentUser;
console.log(user);

const doLogOut = async () => {
  await useFbAuth()?.signOut();
  router.replace("/login");
};
</script>
