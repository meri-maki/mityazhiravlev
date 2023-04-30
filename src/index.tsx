import App from 'app/App'
import 'app/styles/index.scss'

import { ThemeProvider } from 'app/providers/ThemeProvider'
import { render } from 'react-dom'

import 'shared/config/i18n/i18n'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'

render(
    <Suspense fallback={<Loader />}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Suspense>,

    document.getElementById('root')
)
