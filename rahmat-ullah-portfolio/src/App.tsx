import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <>
      <Navbar />
      <main><HomePage /></main>
      <Footer />
      <BackToTop />
    </>
  )
}
