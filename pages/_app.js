import Head from 'next/head'
import { Provider as AlertProvider } from 'react-alert'
import { motion } from 'framer-motion'

import { AlertTemplate } from '../components/ui'

import '../styles/globals.css'
import '../styles/tailwind.css'
import 'react-image-lightbox/style.css';

function MyApp({ Component, pageProps, router }) {
	return <>
		<Head>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
		</Head>
		<AlertProvider template={AlertTemplate} timeout={3000}>
			<motion.div
				key={router.route}
				initial="pageInitial"
				animate="pageAnimate"
				variants={{
					pageInitial: { opacity: .4 },
					pageAnimate: { opacity: 1 }
				}}
			>
				<Component {...pageProps} />
				<div id="fb-root"></div>
				<div class="fb-customerchat"
					attribution="install_email"
					page_id="545829935899408"
					theme_color="#2f6d91"
					logged_in_greeting="Buna ziua, cu ce va putem ajuta?"
					logged_out_greeting="Buna ziua, cu ce va putem ajuta?">
				</div>
			</motion.div>
		</AlertProvider>

	</>
}

export default MyApp
