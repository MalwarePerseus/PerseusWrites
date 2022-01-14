import React, { useContext} from 'react'
import Link from 'next/link'

const categories = [
    {name: 'Web Development', slug: 'webdev'},
    {name: 'Game Development', slug: 'gamedev'}
]
function Header() {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-gray-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-4xl text-gray-700'>
                            Perseus Writes
                        </span>
                    </Link>
                </div>  
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-gray-650 ml-4'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>  
            </div>
        </div>
    )
}

export default Header
