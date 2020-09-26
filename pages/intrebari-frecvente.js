import { useState } from 'react'
import Link from 'next/link'
import Collapse from "@kunukn/react-collapse"

import BaseLayout from '../components/layouts/BaseLayout.component'
import { SectionTitle } from '../components/ui'
import FAQs from '../utils/FAQs'

const QuestionRow = ({ FAQ, openQuestion, setOpenQuestion, questionIndex }) => {
	const isOpen = openQuestion === questionIndex

	const handlePlusClick = () => {
		if (isOpen) {
			setOpenQuestion(null)
		} else {
			setOpenQuestion(questionIndex)
		}
	}

	return (
		<div className="w-full flex flex-col mb-2 p-2">
			{/* Question */}
			<div onClick={handlePlusClick} className={`w-full flex justify-between items-stretch bg-gray-200 cursor-pointer ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}`}>
				<div className="flex-1 p-4">
					<p>{FAQ.question}</p>
				</div>
				<div
					className={`bg-main p-4 flex items-center ${isOpen ? 'rounded-tr-lg' : 'rounded-r-lg'}`}>
					<i aria-hidden className={`text-white px-1 fas fa-${isOpen ? 'minus' : 'plus'}`}></i>
				</div>
			</div>
			{/* Answer */}
			<Collapse isOpen={isOpen}>
				<div className="flex-1 p-4 rounded-b-lg bg-gray-200">
					<p>{FAQ.answer}</p>
				</div>
			</Collapse>
		</div>
	)
}

const IntrebariFrecvente = () => {
	const [openQuestion, setOpenQuestion] = useState(null)
	return (
		<div>
			<BaseLayout title="Intrebari frecvente | Auto Iordache">
				<section className="px-4 my-8 md:px-24">
					<SectionTitle title="Intrebari frecvente" />
					<div className="w-full px-0 md:px-4 lg:px-32">
						{FAQs.map((FAQ, index) => (
							<QuestionRow
								key={`FAQ-${index + 1}`}
								FAQ={FAQ}
								openQuestion={openQuestion}
								questionIndex={index + 1}
								setOpenQuestion={setOpenQuestion}
							/>
						))}
						<p className="text-xl text-center my-4">Nu ai gasit raspunsul la intrebarea ta? <Link href="/contact" as="/contact"><a className="text-main">Contacteaza-ne!</a></Link></p>
					</div>
				</section>
			</BaseLayout>
		</div>
	)
}

export default IntrebariFrecvente