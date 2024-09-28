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
      <IonToolbar color={'primary'}>
        <IonTitle>{t('about.title')}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse='condense'>
        <IonToolbar color={'primary'}>
          <IonTitle size='large'>{t('about.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className='about-content ion-padding'>
        <h2>{t('about.brief')}</h2>
        <p>{t('about.description')}</p>
        <a href='https://github.com/hometech/pt.hometech.ionicreactkit'>
          {t('about.repo_link')}
        </a>
        <h3>{t('about.packages')}</h3>
        <ul>
          <li>
            <strong>@ionic/react</strong> - Used for building cross platform
            apps with React
          </li>
          <li>
            <strong>@ionic/react-router</strong> - Used for routing in Ionic
            React apps
          </li>
          <li>
            <strong>redux</strong> - Used for global state management
          </li>
          <li>
            <strong>react-redux</strong> - Used for the Redux integration with
            React
          </li>
          <li>
            <strong>@reduxjs/toolkit</strong> - Used for Redux actions and
            reducers creation
          </li>
          <li>
            <strong>@i18next/react</strong> - Used for internationalization
          </li>
          <li>
            <strong>@i18next/http-backend</strong> - Used for the fetching of
            translations from a remote server
          </li>
          <li>
            <strong>@i18next/chained-backend</strong> - Used for the chaining of
            multiple backends
          </li>
          <li>
            <strong>@i18next/localstorage-backend</strong> - Used for the
            storing of translations in the browser&apos;s local storage
          </li>
          <li>
            <strong>@i18next/browser-languagedetector</strong> - Used for
            automatic language detection
          </li>
        </ul>
      </div>
    </IonContent>
  </IonPage>
);

export default AboutPage;
