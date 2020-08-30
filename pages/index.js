import { Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { isNil } from 'lodash'

import BaseLayout from '../components/layouts/BaseLayout.component'
import ContactForm from '../components/forms/ContactForm.component'
import CategoryCard from '../components/cards/CategoryCard.component'
import BlogPostCard from '../components/cards/BlogPostCard.component'
import { SectionTitle, Button } from '../components/ui'
import categories from '../utils/categories'

const ExternalResource = ({ href, label }) => <a className="text-main" target="_blank" href={href}>{label}</a>

const Acasa = ({ posts }) => {
    return (
        <BaseLayout>
            <section className="w-full">
                <div className="flex flex-col md:flex-row w-full relative hero-area justify-center">
                    <div className="overlay z-0" />
                    <div className="flex flex-col lg:w-1/2 justify-center items-center text-center md:text-left md:items-start text-white z-10 px-8 md:px-0 md:pl-20 lg:pl-48 mb-8 md:mb-0">
                        <h3 className="text-4xl md:text-6xl font-black mb-4 tracking-wide">AUTO IORDACHE</h3>
                        <h4 className="text-2xl md:text-4xl font-thin uppercase tracking-wide">Soferi buni pe strazile Iasului din 1992</h4>
                    </div>
                    <div className="flex flex-col lg:w-1/2 justify-center items-center">
                        <ContactForm />
                    </div>
                </div>
            </section>
            <section className="mt-16 px-4 md:px-24">
                <p className="text-center text-xl xl:px-64 pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque temporibus exercitationem quidem at unde, in cum placeat ut consequatur omnis. Sit itaque veniam nisi, incidunt sapiente ullam, impedit neque repellat totam soluta praesentium provident eveniet. Voluptates quod maiores, repellat, labore ea officia, nobis necessitatibus iusto facilis iure unde aperiam possimus.</p>
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
            <section className="mt-8 px-4 md:px-24 flex flex-col md:flex-row bg-gray-200">
                <div className="md:w-1/2 my-8 md:my-16">
                    <SectionTitle title="acte necesare" />
                    <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row md:pr-4 xl:pr-0">
                        <div className="resources-documents-card mr-4 bg-white rounded-lg p-4 w-full sm:w-1/2 md:w-full xl:fw-1/2 mb-4 sm:mb-0 md:mb-4 xl:mb-0">
                            <h4 className="text-2xl font-medium">Pentru scoala:</h4>
                            <ul className="mt-2">
                                <li className="mb-1">Cerere scolarizare (completata la scoala)</li>
                                <li className="mb-1">Copie act de identitate</li>
                                <li className="mb-1">Fisa medicala</li>
                                <li className="mb-1">Avizul psihologic</li>
                                <li className="mb-1">Certificat de cazier judiciar</li>
                            </ul>
                        </div>
                        <div className="resources-documents-card mr-0 md:mr-4 bg-white rounded-lg p-4 w-full sm:w-1/2 md:w-full xl:fw-1/2">
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
                </div>
                <div className="md:w-1/2 mb-8 md:my-16">
                    <SectionTitle title="Resurse" />
                    <div className="resources-documents-card mr-0 md:mr-8 w-full bg-white rounded-lg p-4">
                        <ul className="mt-2">
                            <li className="mb-1">
                                <ExternalResource
                                    href="https://is.politiaromana.ro/ro/utile/documente-eliberari-acte/obtinerea-certificatului-de-cazier-judiciar"
                                    label="Obtinerea certificatului de cazier judiciar"
                                />
                            </li>
                            <li className="mb-1">
                                <ExternalResource
                                    href="https://zenmedical.ro/fisa-medicala-permis-auto-iasi/"
                                    label="Obtinerea fisei medicale pentru permisul auto"
                                />
                            </li>
                            <li className="mb-1">
                                <ExternalResource
                                    href="https://www.drpciv.ro/"
                                    label="Direcția regim permise de conducere și înmatriculare a vehiculelor"
                                />
                            </li>
                            <li className="mb-1">
                                <ExternalResource
                                    href="https://www.e-drpciv.ro/legislatie/codul-rutier-simplificat/"
                                    label="Legislatia rutiera"
                                />
                            </li>
                            <li className="mb-1">
                                <ExternalResource
                                    href="https://www.e-drpciv.ro/"
                                    label="Chestionare auto"
                                />
                            </li>
                            <li className="mb-1">
                                <ExternalResource
                                    href="https://www.drpciv.ro/dlexam"
                                    label="Simulare examen teoretic"
                                />
                            </li>
                            <li className="mb-1">
                                <ExternalResource
                                    href="https://www.dlep-iasi.ro/vize-de-resedinta/viza-de-resedinta--1.html"
                                    label="Viza de flotant Iasi"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {
                !isNil(posts) &&
                <section className="my-16 px-4 md:px-24">
                    <SectionTitle title="blog" />
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {posts.entry.map(post => <Fragment key={post.id.$t}><BlogPostCard blogPost={post} /></Fragment>)}
                    </div>
                </section>
            }
        </BaseLayout>
    )
}

export async function getServerSideProps(context) {
    try {
        const response = await axios.get(`https://www.blogger.com/feeds/${process.env.BLOG_ID}/posts/default/?alt=json&max-results=4`)

        return {
            props: {
                posts: response.data.feed
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