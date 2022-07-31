import About from '../components/about'
import Contact from '../components/contact'
import Experience from '../components/experience'
import Footer from '../components/footer'
import Header from '../components/Header'
import Projects from '../components/projects'
import ScrollToTop from '../components/ScrollToTop'


export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
