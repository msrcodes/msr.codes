import type {AppProps} from 'next/app'
import Layout from '../components/Layout'

import 'tailwindcss/tailwind.css'

const App: React.FC<AppProps> = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

export default App