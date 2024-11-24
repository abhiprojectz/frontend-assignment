"use client"

import {
  Star,
} from "lucide-react"

import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/header";
import prods from "@/lib/products";


// MainPage component serves as the main entry point for the application, handling authentication and rendering the main content.
export default function MainPage() {
  const [products, setProducts] = useState<any>(prods);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [parentCategory, setParentCategory] = useState("All");
  const [childCategory, setChildCategory] = useState("");


  useEffect(() => {
    const savedPassword = localStorage.getItem("password");
    if (savedPassword === "fedev2024test") {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleContinue = () => {
    if (password === "fedev2024test") {
      localStorage.setItem("password", password);
      setIsAuthenticated(true);
    } else {
      alert("wrongpassword");
    }
  };

  // Check if the user is authenticated; if not, display the password input form.
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#110606]">
        <div className="bg-[#2B2828] p-6 rounded-md text-white">
          <label className="block mb-2 text-sm font-bold">Enter Password:</label>
          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 rounded-md p-2 mb-4 w-full text-black placeholder-black"
            placeholder="Password"
          />
          <button
            onClick={handleContinue}
            className="bg-red-500 text-white rounded-md p-2 w-full"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#110606] text-white">
      <Toaster />
      <Header products={products} setProducts={setProducts} loading={loading} setLoading={setLoading} 
      parentCategory={parentCategory} setParentCategory={setParentCategory}
      childCategory={childCategory} setChildCategory={setChildCategory}
      />

      <div className="flex flex-col sm:gap-4">
        <main className="grid flex-1 items-start p-4 sm:px-6 sm:py-0">

          <div className="pt-4 lg:p-6 ">
            <div className="w-full">
              <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col items-start">
                    <div className="flex gap-2 flex-col">
                      <h2 className="text-[20px] lg:text-3xl tracking-tighter max-w-xl font-bold text-left px-8">
                        Showing in {parentCategory}{childCategory ? `   >  ${childCategory}` : ''}
                      </h2>
                    </div>
                  </div>

                  <div className="mx-auto px-6 lg:px-8">
                    {products.length > 0 ? (
                      <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4  lg:mx-0 lg:max-w-none lg:grid-cols-5 md:grid-cols-3">{products.map((post: any, indx: any) => (
                        <div key={indx} className="flex flex-col items-start justify-between">
                          <div className="relative w-full">
                            <img
                              src={post.imageUrl}
                              alt=""
                              className="aspect-[16/9] w-full h-[280px] rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                            />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                          </div>
                          <div className="max-w-xl">
                            <div className="group relative">
                              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href={`product_view?productName=${post.productName}`}
                                  style={{ color: '#F1F1F1' }}
                                >
                                  <span className="absolute inset-0" />
                                  {post.productName}
                                </a>
                              </h3>
                              <p className="line-clamp-3 text-sm leading-6 text-gray-600"
                                style={{ color: '#B3B3B3' }}>{post.creatorName}</p>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                  <Star key={index} className={`h-5 w-5`}
                                    style={{ color: '#F1F1F1', fill: '#F1F1F1' }}
                                  />
                                ))}
                                <span className="ml-2 text-sm"
                                  style={{ color: '#F1F1F1' }}

                                >{post.rating.toFixed(1)}</span>
                              </div>
                              <p className="line-clamp-3 text-sm leading-6 text-gray-600"
                                style={{ color: '#F1F1F1', fontWeight: 700 }}>$ {post.price.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      ))
                      } </div>) : (
                      <div>
                        <div className="w-full">
                          <div className="container mx-auto">
                            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                              <div className="flex gap-4 flex-col">
                                {loading && (
                                  <>
                                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                                      There's Nothing!
                                    </h1>
                                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                                      Sorry, No products found. <br /> Try another search.
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

