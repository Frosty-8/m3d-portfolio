import { Hero,ShowcaseSection,FeatureCards,ExperienceSection,TechStack,Testimonials,Footer,Contact } from './sections/index'
import { Navbar,LogoSection } from './components/index'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  )
}



export default App