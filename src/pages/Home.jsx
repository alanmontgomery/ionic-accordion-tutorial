import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Accordion } from "../components/Accordion";

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Topics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Topics</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Accordion />
      </IonContent>
    </IonPage>
  );
};

export default Home;
