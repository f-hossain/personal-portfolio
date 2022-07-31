import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Projects from '../components/Projects'
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
