import { useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonicSlides,
  useIonRouter,
} from '@ionic/react';
import { Icons } from '@utils/Icons';
import SwiperType from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';
// ------------------------------------------
import './Welcome.scss';
import Slide from '@models/Slide';
import WelcomeSlides from '@assets/data/slides.json';
import { t } from 'i18next';
import { RouteName } from '@utils/RouteName';

/**
 * Renders the Welcome page component.
 *
 * @return The Welcome page component.
 */
const Welcome: React.FC = () => {
  //  Utils.setNavigationBarColor(Utils.CONFIG.COLOR_DARKPINK);

  const router = useIonRouter();
  const welcomeSlides: Slide[] = WelcomeSlides;
  const [lastSlide, setLastSlide] = useState<boolean>(false);

  //const checkSkipShowIntro = useRef<HTMLIonCheckboxElement>(null);
  //  const skipShowIntro = AppStore.useState(Selectors.getSkipShowIntro);

  // useEffect((): void => {
  //   if (skipShowIntro) {
  //     router.push(RouteName.START, 'root', 'replace');
  //   }
  // }, [skipShowIntro, router]);

  /**
   * Jump to App
   */
  function startApp(): void {
    // checkSkipShowIntro.current &&
    //   Actions.setSkipIntro(checkSkipShowIntro.current.checked);
    router.push(RouteName.TABS, 'root', 'replace');
  }

  /**
   * Hide Skip Link on Slide End
   * @param event
   */
  function checkLastSlide(event: SwiperType): void {
    setLastSlide(event.isEnd);
  }

  return (
    <IonPage className='welcome-page'>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonTitle color='light'>{t('welcome.title')}</IonTitle>
          <IonButtons slot='end'>
            <IonButton color='tertiary' hidden={false} onClick={startApp}>
              {t('welcome.skipButton')}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent
        fullscreen={true}
        className='ion-align-items-center'
        forceOverscroll={false}
      >
        <Swiper
          modules={[Pagination, IonicSlides]}
          pagination={true}
          onSlideChange={(event): void => checkLastSlide(event)}
        >
          {welcomeSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                className='slide-image'
                alt={slide.title}
              />
              <h2 className='slide-title'>{slide.title}</h2>
              {slide.description && <p>{slide.description}</p>}
            </SwiperSlide>
          ))}
        </Swiper>
        {lastSlide && (
          <IonGrid class='ion-padding'>
            <IonRow class='ion-justify-content-center ion-no-margin'>
              <IonCol size='6'>
                <IonCheckbox
                  labelPlacement='start'
                  color='primary'
                  class='check-show-intro'
                >
                  {t('welcome.checkShowIntroLabel')}
                </IonCheckbox>
              </IonCol>
            </IonRow>

            <IonRow class='ion-justify-content-center ion-no-margin'>
              <IonCol size='5'>
                <IonButton
                  fill='outline'
                  expand='block'
                  color='white'
                  onClick={startApp}
                >
                  {t('welcome.continue')}
                  <IonIcon slot='end' icon={Icons.arrowForward} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
