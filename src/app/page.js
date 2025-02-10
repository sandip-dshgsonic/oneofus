// app/page.js
import Header from '../app/components/Header'
import Hero from '../app/components/Hero-section'
import WhyChooseSection from '../app/components/WhyChooseSection'
import StylesSelector from './components/StylesSelector'


export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
          <WhyChooseSection />
          <StylesSelector />

      </main>
    </>
  )
}

// // app/page.js
// import Header from '../app/components/Header'
// import Hero from '../app/components/Hero-section'
// import whychoosesection from '../app/components/WhyChooseSection'

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <main className="min-h-screen bg-white relative">
//         {/* Background Pattern Container */}
//         <div 
//           className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236B7280' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
//             backgroundSize: '40px 40px'
//           }}
//         />
//         {/* Content */}
//         <div className="relative z-10">
//           <Hero />
//           <whychoosesection />
//         </div>
//       </main>
//     </>
//   )
// }