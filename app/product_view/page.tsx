
"use client"
import {  Tab } from '@headlessui/react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Star } from "lucide-react"
import { useEffect, useState } from 'react';
import prods from "@/lib/products";
import Header from "@/components/header";



// Displays the details of a specific product based on the product name passed in the URL.
export default function ProductViewPage() {
    const [product, setProduct] = useState<any>(null);
    const [productName, setProductName] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const name = new URLSearchParams(window.location.search).get('productName');
            setProductName(name);
        }
    }, []);

    useEffect(() => {
        if (productName) {
            const foundProduct = prods.find(prod => prod.productName === productName);
            console.log(foundProduct);

            setProduct(foundProduct || null);
        }
    }, [productName]);

    if (!product) return <div>Loading...</div>;

    return (
        <>
            <Header></Header>
            <div className="bg-[#110606] text-[#F1F1F1]">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Product Image */}
                        <Tab.Group as="div" className="flex flex-col-reverse">
                            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
                                <Tab.Panel className="bg-white rounded-[22px]">
                                    <img
                                        src={product.imageUrl}
                                        alt={""}
                                        className="h-full w-full object-cover object-center sm:rounded-lg"
                                    />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>

                        {/* Product info */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl font-bold tracking-tight text-[#F1F1F1]">{product.productName}</h1>

                            <p className="line-clamp-3 text-sm leading-6 text-gray-600"
                                style={{ color: '#B3B3B3' }}>{product.creatorName}</p>

                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl tracking-tight text-[#F1F1F1]">$ {product.price.toFixed(2)}</p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-3">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} className={`h-5 w-5`}
                                            style={{ color: '#F1F1F1', fill: '#F1F1F1' }}
                                        />
                                    ))}
                                    <span className="ml-2 text-sm"
                                        style={{ color: '#F1F1F1' }}

                                    >{product.rating.toFixed(1)}</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>

                                <div
                                    className="space-y-6 text-base text-gray-300"
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </div>

                            <form className="mt-6">
                                <div className="mt-10 flex">
                                    <button
                                        type="submit"
                                        className="flex max-w-xs flex-1 items-center justify-center border border-transparent bg-[#CA323D] px-8 py-3 text-base font-medium text-white hover:bg-[#B22222] focus:outline-none focus:ring-2 focus:ring-[#CA323D] focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full rounded-[30px]"
                                    >
                                        Add to Cart!
                                    </button>

                                    <button
                                        type="button"
                                        className="ml-4 flex items-center justify-center px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500 rounded-full"
                                    >
                                        <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                        <span className="sr-only">Add to favorites</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
