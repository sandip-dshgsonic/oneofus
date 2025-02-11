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




import Header from '../app/components/Header'
import Hero from '../app/components/Hero-section'
import WhyChooseSection from '../app/components/WhyChooseSection'
import StylesSelector from './components/StylesSelector'
import HowItWorks from './components/Howitworks'
import UseCasesPage from './components/UseCasesPage'
import ActionNotesSection from './components/ActionNotesSection'
import PricingSection from './components/PricingSection'
// import UserTestimonials from './components/UserTestimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="pattern-background">
      <Header />
      <main className="min-h-screen bg-white relative">
        <div className="absolute inset-0 pattern-overlay pointer-events-none"></div>
        <div className="relative z-10">
          <Hero />
          <WhyChooseSection />
          <HowItWorks />  
          <UseCasesPage /> 
          <StylesSelector />
          <ActionNotesSection />  
          <PricingSection />  
          {/* <UserTestimonials />   (please you imported this code in pricingsection's code please check there )*/}

          <FAQ />

          <Footer />  
        </div>
      </main>
    </div>
  )
}
