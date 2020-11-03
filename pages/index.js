import { Fragment, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { isNil } from 'lodash'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer" // https://codesandbox.io/s/framer-motion-animate-in-view-gqcc8?file=/src/index.js:230-299

import BaseLayout from '../components/layouts/BaseLayout.component'
import ContactForm from '../components/forms/ContactForm.component'
import CategoryCard from '../components/cards/CategoryCard.component'
import BlogPostCard from '../components/cards/BlogPostCard.component'
import { SectionTitle, Button } from '../components/ui'
import categories from '../utils/categories'

const containerVariantsForStaggering = {
    show: {
        transition: {
            staggerChildren: 0.05
        }
    }
}

const heroAreaTextVariants = {
    hidden: { x: -200 },
    show: { x: 0 }
}

const categoryVariants = {
    show: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 }
}

const ExternalResource = ({ href, label }) => <a className="text-main" target="_blank" rel="noopener" href={href}>{label}</a>

const Acasa = ({ posts }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          controls.start("show");
        }
      }, [controls, inView]);

    return (
        <BaseLayout>
            <section className="w-full">
                <div className="flex flex-col md:flex-row w-full relative hero-area justify-center">
                    <div className="overlay z-0" />
                    <motion.div initial="hidden" animate="show" variants={containerVariantsForStaggering} className="flex flex-col lg:w-1/2 justify-center items-center text-center md:text-left md:items-start text-white z-10 px-8 md:px-0 md:pl-20 lg:pl-48 mb-8 md:mb-0">
                        <motion.h3 variants={heroAreaTextVariants} className="text-4xl md:text-6xl font-black mb-4 tracking-wide">AUTO IORDACHE</motion.h3>
                        <motion.h4 variants={heroAreaTextVariants} className="text-2xl md:text-4xl font-thin uppercase tracking-wide">Soferi buni pe strazile Iasului din 1992</motion.h4>
                        <motion.h4 variants={heroAreaTextVariants} className="text-2xl md:text-4xl font-thin uppercase tracking-wide"></motion.h4>
                    </motion.div>
                    <motion.div initial={{ x: 200 }} animate={{ x: 0 }} className="flex flex-col lg:w-1/2 justify-center items-center px-4 md:px-0">
                        <ContactForm />
                    </motion.div>
                </div>
            </section>
            <section className="mt-16 px-4 md:px-24">
                <h3 className="text-center text-2xl font-bold mb-4">Alatura-te soferilor orasului Iasi</h3>
                <p className="text-center text-xl xl:px-64">Auto Iordache este o echipa de profesionisti ce va va oferi intreg suportul necesar pentru a putea deveni un sofer bun si calificat pentru toata viata. Din 1992 depunem efort sa instruim cei mai buni soferi din orasul Iasi.</p>
            </section>
            <section className="mt-16 px-4 md:px-24">
                <SectionTitle title="categorii" />
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories.map(category => (
                            <motion.div 
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={categoryVariants}
                                key={category.letter}>
                                <CategoryCard category={category} />
                            </motion.div>
                        ))}
                        <span className="flex items-center">
                            <Button btnType="link" containerClassName="mx-auto md:mx-0" className="mb-4 md:mb-8"><Link href="/galerie"><a>Vezi toate masinile &gt;</a></Link></Button>
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
                                <li className="mb-1">Copie carte de identitate</li>
                                <li className="mb-1">Cerere scolarizare (completata la scoala)</li>
                                <li className="mb-1">Aviz psihologic</li>
                                <li className="mb-1">Fisa medicala</li>
                                <li className="mb-1">Certificat de cazier judiciar</li>
                            </ul>
                        </div>
                        <div className="resources-documents-card mr-0 md:mr-4 bg-white rounded-lg p-4 w-full sm:w-1/2 md:w-full xl:fw-1/2">
                            <h4 className="text-2xl font-medium">Pentru examen:</h4>
                            <ul className="mt-2">
                                <li className="mb-1">Copie carte de identitate</li>
                                <li className="mb-1">Fisa de scolarizare</li>
                                <li className="mb-1">Cerere tip (completata la scoala)</li>
                                <li className="mb-1">Chitanta de plata a contravalorii permisului de conducere</li>
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
                                    href="https://www.scoalarutiera.ro/"
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
                !isNil(posts.entry) &&
                <section className="my-16 px-4 md:px-24">
                    <SectionTitle title="blog" />
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {posts.entry.map(post => <Fragment key={post.id.$t}><BlogPostCard blogPost={post} /></Fragment>)}
                    </div>
                </section>
            }
            <section className="mt-16 px-4 md:px-24 pb-8">
                <p className="text-center text-xl xl:px-64"><Link href="/contact" as="/contact"><a className="font-bold text-main">Contacteaza-ne</a></Link> pentru a-ti asigura un loc la volan!</p>
            </section>
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
            props: {
                posts: {
                    entry: null
                }
            }
        }
    }
}

export default Acasa