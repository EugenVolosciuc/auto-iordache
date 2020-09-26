import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="mb-8">
            <span className="block bg-main" style={{ height: 8, width: 120 }}></span>
            <h4 className="uppercase font-bold text-3xl">{title}</h4>
            {subtitle && <h6 className="font-light text-gray-600">{subtitle}</h6>}
        </div>
    )
}

export default SectionTitle