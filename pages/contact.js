import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import BaseLayout from '../components/layouts/BaseLayout.component'
import ContactForm from '../components/forms/ContactForm.component'
import { PulseOnTap } from '../components/ui'

const AIMap = dynamic(() => import('../components/ui/Map.component'), { ssr: false })

const containerVariants = {
	show: {
		transition: {
			staggerChildren: 0.05
		}
	}
}

const itemVariants = {
	hidden: { y: -200, opacity: 0 },
	show: { y: 0, opacity: 1 }
}

const Contact = () => {
	return (
		<div>
			<BaseLayout>
				<section className="mt-8 px-4 md:px-24 h-full">
					<h1 className="text-center text-3xl font-black mt-4 md:mt-0">Hai sa facem cunostinta!</h1>
					<p className="text-xl text-center mt-2">Alatura-te soferilor orasului Iasi</p>
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="show"
						className="flex flex-col p-4 md:p-8 md:bg-gray-200 md:flex-row md:justify-center h-full mt-4 md:mt-16 rounded-lg">
						<motion.div variants={itemVariants} className="md:mr-8">
							<div className="text-center md:text-left">
								<h3 className="text-2xl font-medium mb-1">Telefoneaza-ne</h3>
								<p className="text-lg">076 000 1111</p>
							</div>
							<div className="mt-8 md:mt-4">
								<h3 className="text-2xl font-medium mb-2 text-center md:text-left">Trimite-ne un mesaj</h3>
								<ContactForm showHeading={false} />
							</div>
						</motion.div>
						<motion.div variants={itemVariants} className="md:w-1/2 mt-6 md:mt-0">
							<div className="text-center md:text-left">
								<h3 className="text-2xl font-medium mb-1">Viziteaza-ne</h3>
								<p className="text-lg mb-4">Iasi, Soseaua Arcu 64</p>
								<div className="rounded-lg">
									<AIMap />
								</div>
							</div>
						</motion.div>
					</motion.div>
					<h3 className="text-2xl font-medium text-center my-6 md:mt-8">
						Urmareste-ne pe
						<PulseOnTap>
							<a target="_blank" href="https://www.facebook.com/Scoala-Auto-Iordache-545829935899408/" rel="noopener">
								<i aria-hidden className="fab fa-facebook-square fa-lg text-main ml-2"></i>
							</a>
						</PulseOnTap>
					</h3>
				</section>
			</BaseLayout>
		</div>
	)
}

export default Contact