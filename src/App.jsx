import styles from './style';
import { Navbar, CTA, BodyTop, BodyBottom, BodyMiddle, Footer } from './components';

const App = () => (
  <div className='w-full overflow-hidden'>
    <div className='bg-cta-gradient h-[450px]'>
      <div className={`flex-col h-[450px] relative overflow-hidden ${styles.paddingX} ${styles.flexCenter}`}>
        <div className="background-img z-[0] absolute"></div>
        <div className={`mt-5 margin-bottom z-[2] ${styles.boxWidth}`}>
          <Navbar />
        </div>
        <div className={`${styles.boxWidth}`}> 
          <CTA />
        </div>
      </div>
    </div>

    <div className={`bg-bodyColor z-[2] ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}> 
          <BodyTop />
          <BodyMiddle />
          <BodyBottom />
          <Footer />
        </div>
    </div>
    
  </div>
);

export default App;
