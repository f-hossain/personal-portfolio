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
      <div className='md:px-24'>
        {/* <About /> */}
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
