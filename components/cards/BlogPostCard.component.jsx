import React from 'react'
import Link from 'next/link'

import { PulseOnTap } from '../ui'

const maxTitleLength = 60
const maxParagraphLength = 120

const BlogPostCard = ({ blogPost }) => {
    const imgSrcRegex = /src="([^"]+)"/
    const imgSrc = blogPost.content.$t.match(imgSrcRegex)

    const firstParagraphRegex = /<p(|\s+[^>]*)>(.*?)<\/p\s*>/
    const firstParagraph = blogPost.content.$t.match(firstParagraphRegex)[2].replace(/<[^>]*>/g, '')
    const publishDate = new Date(blogPost.published.$t)

    const year = new Intl.DateTimeFormat('ro', { year: 'numeric' }).format(publishDate)
    const month = new Intl.DateTimeFormat('ro', { month: '2-digit' }).format(publishDate)
    const day = new Intl.DateTimeFormat('ro', { day: '2-digit' }).format(publishDate)

    const postID = blogPost.id.$t.split('.post-')[1]

    return (
        <PulseOnTap smallerScale>
            <Link href="/blog/[id]" as={`/blog/${postID}`}>
                <div className="blog-post-card border-l-8 border-secondary px-4 flex flex-col md:flex-row mb-10 cursor-pointer">
                    {
                        imgSrc
                            ? <img
                                className="md:h-full"
                                src={imgSrc[1]}
                                alt={`Blog post image - ${postID}`}
                            />
                            : <div className="p-4 flex items-center placeholder-container">
                                <img src="/assets/images/logo_auto_iordache_blue.png" alt="Auto Iordache Logo"/>
                            </div>
                    }
                    
                    <div className="flex flex-col justify-center mt-4 md:mt-0 md:ml-8">
                        <div className="flex flex-col mb-4">
                            <h5 className="text-2xl font-medium">
                                {blogPost.title
                                    ? blogPost.title.$t.length > maxTitleLength
                                        ? blogPost.title.$t.slice(0, maxTitleLength - 1) + "…"
                                        : blogPost.title.$t
                                    : 'AutoPost'
                                }
                            </h5>
                            <span className="text-gray-600 text-sm">{`${day}/${month}/${year}`}</span>
                        </div>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: firstParagraph.length > maxParagraphLength
                                    ? firstParagraph.slice(0, maxParagraphLength - 1) + "…"
                                    : firstParagraph
                            }}
                        />
                    </div>
                </div>
            </Link>
        </PulseOnTap>
    )
}

export default BlogPostCard