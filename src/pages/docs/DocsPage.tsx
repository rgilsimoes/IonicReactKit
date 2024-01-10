import { IonContent, IonPage } from '@ionic/react';
import './DocsPage.scss';

/**
 * Renders the Docs page component, which displays a page containing an iframe with the content of '/docs/index.html'.
 *
 * @return The rendered Docs page component
 */
const DocsPage: React.FC = () => (
  <IonPage>
    <IonContent fullscreen>
      <iframe
        src='/docs/index.html'
        style={{ width: '100%', height: '100%' }}
        frameBorder={0}
      />
    </IonContent>
  </IonPage>
);

export default DocsPage;
