import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './AboutPage.scss';
import { t } from 'i18next';

/**
 * Renders the AboutPage component.
 *
 * @return The rendered AboutPage component.
 */
const AboutPage: React.FC = () => (
  <IonPage className='about-page'>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{t('about.title')}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse='condense'>
        <IonToolbar>
          <IonTitle size='large'>{t('about.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
  </IonPage>
);

export default AboutPage;
