import { Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Router from 'next/router'
import { isNil } from 'lodash'

import BaseLayout from '../../components/layouts/BaseLayout.component'
import BlogPostCard from '../../components/cards/BlogPostCard.component'
import { SectionTitle, Button } from '../../components/ui'

const itemsPerPage = 10

const Blog = ({ posts }) => {
    const startIndex = parseInt(posts.openSearch$startIndex.$t, 10)
    const totalResults = parseInt(posts.openSearch$totalResults.$t, 10)

    const nextPageIndex = startIndex + itemsPerPage
    const prevPageIndex = startIndex - itemsPerPage

    return (
        <div>
            <BaseLayout title="Blog | Auto Iordache">
                <section className="mt-8 px-4 md:px-24">
                    <SectionTitle title="Blog" />
                </section>
                {
                    !isNil(posts) &&
                    <section className="px-4 md:px-24">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            {posts.entry.map(post => <Fragment key={post.id.$t}><BlogPostCard blogPost={post} /></Fragment>)}
                        </div>
                        <div className="w-full flex justify-end mb-8">
                            {prevPageIndex > 0 &&
                                <Button btnType="link" className="mr-4">
                                    <Link
                                        href={`/blog?start_index=${prevPageIndex}`}
                                        as={`/blog?start_index=${prevPageIndex}`}>
                                        <a>&lt; Pagina precendenta</a>
                                    </Link>
                                </Button>
                            }
                            {nextPageIndex <= totalResults &&
                                <Button btnType="link">
                                    <Link
                                        href={`/blog?start_index=${nextPageIndex}`}
                                        as={`/blog?start_index=${nextPageIndex}`}>
                                        <a>Pagina urmatoare &gt;</a>
                                    </Link>
                                </Button>
                            }
                        </div>
                    </section>
                }
            </BaseLayout>
        </div>
    )
}

export default Blog

export async function getServerSideProps({ query }) {
    try {
        const requestURL = query.start_index
            ? `https://www.blogger.com/feeds/${process.env.BLOG_ID}/posts/default/?alt=json&max-results=${itemsPerPage}&start-index=${query.start_index}`
            : `https://www.blogger.com/feeds/${process.env.BLOG_ID}/posts/default/?alt=json&max-results=${itemsPerPage}`
        // const requestURL = query.pageToken
        // ? `https://www.googleapis.com/blogger/v2/blogs/${process.env.BLOG_ID}/posts?maxResults=2&key=${process.env.BLOGGER_API_KEY}&fetchBodies=true&pageToken=${query.pageToken}`
        // : `https://www.googleapis.com/blogger/v2/blogs/${process.env.BLOG_ID}/posts?maxResults=2&key=${process.env.BLOGGER_API_KEY}&fetchBodies=true`
        // ? `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts?maxResults=2&key=${process.env.BLOGGER_API_KEY}&pageToken=${query.pageToken}`
        // : `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts?maxResults=2&key=${process.env.BLOGGER_API_KEY}`

        const response = await axios.get(requestURL)

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