import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Experience from '@/components/Experience';
import EducationSection from '@/components/EducationSection';

const page = () => {
  return (
    <div className="relative h-full overflow-y-auto 
    antialiased">
     <div className="fixed inset-0 bg-fixed bg-cover
     bg-center bg-img"></div> 
     <div className='relative z-10 flex flex-col items-center
     p-4 space-y-8 container mx-auto'>
           <Hero />
           <Navbar />
           <About />
           <Experience />
           <Skills />
           <Projects />
           <EducationSection />
           <ContactForm />
           <Footer />
     </div>
    
    </div>
  )
}

export default page

