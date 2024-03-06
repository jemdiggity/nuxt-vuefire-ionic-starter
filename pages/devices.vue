import { IonBackButton } from '#build/components'; import { IonButtons } from
'#build/components';
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
        <IonCardContent>blurg</IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
</template>
