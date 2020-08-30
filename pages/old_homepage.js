import { Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { isNil } from 'lodash'

import BaseLayout from '../components/layouts/BaseLayout.component'
import ContactForm from '../components/forms/ContactForm.component'
import CategoryCard from '../components/cards/CategoryCard.component'
import BlogPostCard from '../components/cards/BlogPostCard.component'
import { SectionTitle, Button } from '../components/ui'

const categories = [
	{
		letter: 'A',
		title: 'Autoturisme',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		imgSrc: '/assets/cars/vw_golf.jpg',
		alt: 'VW Golf'
	},
	{
		letter: 'B',
		title: 'Autoturisme',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		imgSrc: '/assets/cars/vw_golf.jpg',
		alt: 'VW Golf'
	},
	{
		letter: 'C',
		title: 'Autoturisme',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		imgSrc: '/assets/cars/vw_golf.jpg',
		alt: 'VW Golf'
	},
	{
		letter: 'D',
		title: 'Autoturisme',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		imgSrc: '/assets/cars/vw_golf.jpg',
		alt: 'VW Golf'
	},
	{
		letter: 'E',
		title: 'Autoturisme',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		imgSrc: '/assets/cars/vw_golf.jpg',
		alt: 'VW Golf'
	},
]

const Acasa = ({ posts }) => {
	return (
		<div>
			<BaseLayout>
				<section style={{ height: 'calc(100vh - 84px)' }} className="above-the-fold-circle relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-24">
					<div className="flex flex-col lg:w-1/2 text-white justify-center md:10 lg:-mt-10 text-center" style={{ maxWidth: 700 }}>
						<h2 className="font-thin text-4xl md:text-5xl lg:text-6xl leading-tight">
							VREI SĂ DEVII ȘOFERACHE? HAI LA
							<span className="font-black block">AUTO IORDACHE!</span>
						</h2>
						<img className="hidden xl:block" src="/assets/car.svg" alt="Car" />
					</div>
					<div className="flex flex-col lg:w-1/2 justify-center items-center mb-0 md:mb-20 lg:mb-0 lg:-mt-20">
						<ContactForm />
					</div>
				</section>
				<section className="flex flex-col items-center lg:items-end px-4 md:px-24">
					<div className="text-under-main-circle">
						<h3 className="text-5xl font-bold text-center lg:mb-10">Scolarizam din 1992</h3>
						<p className="text-lg w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur earum dolorem eaque beatae repellat. Veritatis perspiciatis repellat laborum quis a excepturi nulla tempore molestias voluptatum itaque quos quaerat doloribus cum consectetur explicabo, nemo sunt tenetur esse, qui voluptatem maxime temporibus sapiente! Similique ipsa obcaecati possimus illum magnam voluptas ullam quos?</p>
					</div>
				</section>
				<section className="mt-16 px-4 md:px-24">
					<SectionTitle title="categorii" />
					<div className="w-full">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{categories.map(category => <Fragment key={category.letter}><CategoryCard category={category} /></Fragment>)}
							<span className="flex items-center">
								<Button btnType="link" className="mx-auto md:mx-0 mb-4 md:mb-8"><Link href="/galerie"><a>Vezi toate masinile &gt;</a></Link></Button>
							</span>
						</div>
					</div>
				</section>
				<section className="mt-16 px-4 md:px-24">
					<SectionTitle title="acte necesare" />
					<div className="flex">
						<div className="ml-0 md:ml-16 mr-0 md:mr-8 w-1/2 border-2 border-secondary rounded-lg p-4">
							<h4 className="text-2xl font-medium">Pentru scoala:</h4>
							<ul className="mt-2">
								<li className="mb-1">Cerere scolarizare (completata la scoala)</li>
								<li className="mb-1">Copie act de identitate</li>
								<li className="mb-1">Fisa medicala</li>
								<li className="mb-1">Avizul psihologic</li>
								<li className="mb-1">Certificat de cazier judiciar</li>
							</ul>
						</div>
						<div className="mr-0 md:mr-16 ml-0 md:ml-8 w-1/2 border-2 border-secondary rounded-lg p-4">
							<h4 className="text-2xl font-medium">Pentru examen:</h4>
							<ul className="mt-2">
								<li className="mb-1">Cerere scolarizare (completata la scoala)</li>
								<li className="mb-1">Copie act de identitate</li>
								<li className="mb-1">Fisa medicala</li>
								<li className="mb-1">Avizul psihologic</li>
								<li className="mb-1">Certificat de cazier judiciar</li>
							</ul>
						</div>
					</div>
				</section>
				{
					!isNil(posts) &&
					<section className="mt-16 px-4 md:px-24">
						<SectionTitle title="blog" />
						<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
							{posts.items.map(post => <Fragment key={post.id}><BlogPostCard blogPost={post} /></Fragment>)}
						</div>
					</section>
				}
			</BaseLayout>
		</div>
	)
}

export async function getServerSideProps(context) {
	try {
		const response = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts?maxResults=3&key=${process.env.BLOGGER_API_KEY}`)

		return {
			props: {
				posts: response.data
			}
		}
	} catch (error) {
		console.log("ERROR!!!", error)
		return {
			props: {}
		}
	}
}

export default Acasa