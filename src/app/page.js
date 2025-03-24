// // app/page.js
// import Header from '../app/components/Header'
// import Hero from '../app/components/Hero-section'
// import WhyChooseSection from '../app/components/WhyChooseSection'
// import StylesSelector from './components/StylesSelector'
// import HowItWorks from './components/Howitworks'
// import UseCasesPage from './components/UseCasesPage'

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <main className="min-h-screen bg-white">
//         <Hero />
        
//           <WhyChooseSection />

//           <HowItWorks />  
//           <UseCasesPage/> 


//           <StylesSelector />

//       </main>
//     </>
//   )
// }




import Header from './components/landing/Header'
import HeroSection from './components/landing/Hero-section'
import WhyChooseSection from './components/landing/WhyChooseSection'
import StylesSelector from './components/landing/StylesSelector'
import HowItWorks from './components/landing/Howitworks'
import UseCasesPage from './components/landing/UseCasesPage'
import ActionNotesSection from './components/landing/ActionNotesSection'
import PricingSection from './components/landing/PricingSection'
// import UserTestimonials from './components/UserTestimonials'
import FAQ from './components/landing/FAQ'
import Footer from './components/landing/Footer'

export default function Home() {
  return (
    <div className="pattern-background">
      <Header />
      <main className="min-h-screen bg-white relative">
        <div className="absolute inset-0 pattern-overlay pointer-events-none"></div>
        <div className="relative z-10">
          <HeroSection />
          <WhyChooseSection />
          <HowItWorks />  
          {/* <UseCasesPage />  */}
          {/* <StylesSelector /> */}
          {/* <ActionNotesSection />   */}
          {/* <PricingSection />   */}
          {/* <UserTestimonials />   (please you imported this code in pricingsection's code please check there )*/}

          {/* <FAQ /> */}

          <Footer />  
        </div>
      </main>
    </div>
  )
}
