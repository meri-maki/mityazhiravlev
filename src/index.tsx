import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import App from 'app/App'
import 'app/styles/index.scss'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import 'shared/config/i18n/i18n'
import { Loader } from 'shared/ui/Loader/Loader'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
    <Suspense fallback={<Loader />}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Suspense>
)
