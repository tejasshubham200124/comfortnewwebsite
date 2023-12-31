import React from 'react'

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Jewellery Protection System',
            href: '#',
            imageSrc: './jewellery.png',
            imageAlt: "Front of men's Basic Tee in black.",
          
            
        },
        {
            id: 1,
            name: 'ATM Fogging Security System',
            href: '#',
            imageSrc: './jewellery.png',
            imageAlt: "Front of men's Basic Tee in black.",
           
        },
        {
            id: 1,
            name: 'Showroom Smart Security',
            href: '#',
            imageSrc: './jewellery.png',
            imageAlt: "Front of men's Basic Tee in black.",
        },
        {
            id: 1,
            name: 'Bank and Locker Protection',
            href: '#',
            imageSrc: './jewellery.png',
            imageAlt: "Front of men's Basic Tee in black.",
        },
      
       
        
    ]
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products We Use</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-30">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover  lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products