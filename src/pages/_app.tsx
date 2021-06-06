import type {AppProps} from 'next/app'

import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'

const App: React.FC<AppProps> = ({Component, pageProps}) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
)

export default App
