import { IonCol, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import './Welcome.scss';

const Welcome: React.FC = () => (
  <div className='welcome'>
    <IonText className='ion-text-center' color='secondary'>
      <h1>Welcome!</h1>
    </IonText>
    <IonImg
      src='/src/assets/img/irsk_logo.png'
      alt='IRSK logo'
      className='welcome-logo'
    />

    <IonGrid className='ion-text-center'>
      <IonRow>
        <IonCol className='ion-justify-content-center'>
          <a
            href='https://ionicframework.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              src='/src/assets/img/ionic.svg'
              className='logo ionic'
              alt='Ionic logo'
            />
            Ionic
          </a>
        </IonCol>
        <IonCol className='ion-justify-content-center'>
          <a
            href='https://reactjs.org'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              src='/src/assets/img/react.svg'
              className='logo react'
              alt='React logo'
            />
            React
          </a>
        </IonCol>
        <IonCol className='ion-justify-content-center'>
          <a
            href='https://vitejs.dev'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              src='/src/assets/img/vite.svg'
              className='logo vite'
              alt='Vite logo'
            />
            Vite
          </a>
        </IonCol>
      </IonRow>
    </IonGrid>
  </div>
);

export default Welcome;
