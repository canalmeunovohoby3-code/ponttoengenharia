import { About } from './components/About'
import { Differentials } from './components/Differentials'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Modalities } from './components/Modalities'
import { Process } from './components/Process'
import { Region } from './components/Region'
import { Segments } from './components/Segments'
import { Services } from './components/Services'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { usePremiumMotion } from './hooks/usePremiumMotion'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  usePremiumMotion()

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Modalities />
        <Segments />
        <Gallery />
        <Differentials />
        <Process />
        <Region />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
