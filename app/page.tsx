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
    <main className="relative bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <EducationSection />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default page

