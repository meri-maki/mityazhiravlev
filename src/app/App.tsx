/* eslint-disable i18next/no-literal-string */
import { HeroSection } from 'widgets/sections/HeroSection'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <Footer />
        </div>
    )
}

export default App
