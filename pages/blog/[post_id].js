import axios from 'axios'
import Link from 'next/link'
import { Button } from '../../components/ui'

import BaseLayout from '../../components/layouts/BaseLayout.component'
import { SectionTitle } from '../../components/ui'

const PostNotFound = () => {
    return (
        <div className="text-center">
            <h3 className="text-xl font-medium">Postarea ce incerci sa o cauti nu se afla aici.</h3>
            <p className="mt-4">Vezi alte postari pe <Link href="/blog" as="/blog"><a className="text-main">Blog</a></Link></p>
        </div>
    )
}

const BlogPost = ({ post }) => {
    const publishDate = new Date(post.published)

    console.log(post)
    console.log(publishDate)

    const year = new Intl.DateTimeFormat('ro', { year: 'numeric' }).format(publishDate)
    const month = new Intl.DateTimeFormat('ro', { month: '2-digit' }).format(publishDate)
    const day = new Intl.DateTimeFormat('ro', { day: '2-digit' }).format(publishDate)

    return (
        <div>
            <BaseLayout title={`${post.title} | Auto Iordache`}>
                <section className="py-8 px-4 md:px-24 bg-gray-200">
                    <div className="bg-white rounded-lg p-4 md:p-8">
                        {
                            !!post
                                ? <>
                                    <SectionTitle title={post.title || 'AutoPost'} subtitle={`${day}/${month}/${year}`} />
                                    <span className="text-gray-600 text-sm">{`${day}/${month}/${year}`}</span>
                                    <div className="w-full" dangerouslySetInnerHTML={{ __html: post.content }} />
                                    <div className="w-full flex justify-end mt-4">
                                        <Button btnType="link" style={{ fontSize: '1rem' }}><Link href="/blog" as="/blog"><a>Vezi alte postari</a></Link></Button>
                                    </div>
                                </>
                                : <PostNotFound />
                        }
                    </div>

                </section>
            </BaseLayout>
        </div>
    )
}

export default BlogPost

export async function getServerSideProps({ query }) {
    try {
        const response = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts/${query.post_id}?key=${process.env.BLOGGER_API_KEY}`)

        return {
            props: {
                post: response.data
            }
        }
    } catch (error) {
        console.log("ERROR!!!", error)
        return {
            props: {}
        }
    }
}