import React from 'react'

const CategoryCard = ({ category }) => {
    return (
        <div className="category-card flex mb-4 md:mb-8 items-center">
            <p className="border-l-8 border-secondary font-black text-6xl px-4">{category.letter}</p>
            <div className="h-full flex flex-col justify-center">
                <p className="font-medium mb-1">{category.title}</p>
                <p className="">{category.subtitle}</p>
            </div>
        </div>
    )
}

export default CategoryCard