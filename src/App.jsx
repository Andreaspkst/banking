import styles from './style';

// Smart Import from Components - Check Components/index.js
import { Billing, Business, CardDeal, Clients, CTA,
  Footer, Hero, NavBar, Stats, Testimonials } from './components'


const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />

        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`bg-primary ${styles.flexStart}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`bg-primary ${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients /> 
          <CTA /> 
          <Footer /> 
        </div>
      </div>

    </div>
  );

export default App