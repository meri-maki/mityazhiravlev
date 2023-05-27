/* eslint-disable i18next/no-literal-string */
import { HeroSection } from 'widgets/sections/HeroSection'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutSection } from 'widgets/sections/AboutSection'
import { ProcessSection } from 'widgets/sections/ProcessSection'
import { WorksSection } from 'widgets/sections/WorksSection'
import { ContactSection } from 'widgets/sections/ContactSection'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import { useRef } from 'react'
import { useTheme } from './providers/ThemeProvider'

function App() {
    const { theme } = useTheme()
    const ref = useRef(null)

    const options = {
        smooth: true,
        repeat: false,
        resetNativeScroll: true,
        reloadOnContextChange: true,
    }

    return (
        <LocomotiveScrollProvider options={options} containerRef={ref}>
            <main className={classNames('app', {}, [theme])} data-scroll-container ref={ref}>
                <Header />
                <HeroSection />
                <AboutSection />
                <ProcessSection />
                <WorksSection />
                <ContactSection />
                <Footer />
            </main>
        </LocomotiveScrollProvider>
    )
}

export default App
