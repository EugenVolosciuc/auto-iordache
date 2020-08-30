import Head from 'next/head'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

import { AlertTemplate } from '../components/ui'

import '../styles/globals.css'
import '../styles/tailwind.css'
import 'react-image-lightbox/style.css';

function MyApp({ Component, pageProps }) {
	return <>
		<Head>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
		</Head>
		<AlertProvider template={AlertTemplate} timeout={3000}>
			<Component {...pageProps} />
		</AlertProvider>
	</>
}

export default MyApp
