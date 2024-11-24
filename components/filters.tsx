'use client'

import * as React from "react"
import Image from "next/image"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import prods from "@/lib/products";


// This component renders the navigation filters for product selection, allowing users to filter by price.
export default function NavbarFilters({ products, setProducts, setOpen }: any) {
  const [priceRange, setPriceRange] = React.useState([0, 80])
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<string[]>([])

  const platforms = [
    { id: 'vrchat-quest', name: 'VRChat (Quest)', icon: '/images/01.png' },
    { id: 'vrchat-pcvr', name: 'VRChat (PCVR)', icon: '/images/02.png' },
    { id: 'spatial', name: 'Spatial', icon: '/images/03.png' },
    { id: 'chillout', name: 'ChilloutVR', icon: '/images/04.png' },
    { id: 'resonite', name: 'Resonite', icon: '/images/05.png' },
    { id: 'neos', name: 'Neos VR', icon: '/images/06.png' },
    { id: 'cluster', name: 'Cluster', icon: '/images/07.png' },
    { id: 'virtualcast', name: 'Virtual Cast', icon: '/images/08.png' },
    { id: 'others', name: 'Others', icon: '/images/08.png' },
  ]

  const handlePlatformToggle = (platformId: string) => { };

  return (
    <Card className="w-[400px] bg-[#2B2828] text-white rounded-tl-[12px] rounded-tr-[12px] md:rounded-tl-[0px] md:rounded-tr-[0px] md:rounded-tl-0 md:rounded-tr-0 border-0 m-auto">
      <CardContent>
        <div className="space-y-6 p-6">
          <div>
            <h3 className="text-lg mb-4">Price range</h3>
            <SliderPrimitive.Root
              className="relative flex items-center select-none touch-none w-full h-5"
              value={priceRange}
              max={80}
              step={1}
              onValueChange={setPriceRange}
            >
              <SliderPrimitive.Track className="bg-gray-600 relative grow rounded-full h-[3px]">
                <SliderPrimitive.Range className="absolute bg-red-500 rounded-full h-full" />
              </SliderPrimitive.Track>
              <SliderPrimitive.Thumb className="block w-5 h-5 bg-white rounded-full shadow-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
              <SliderPrimitive.Thumb className="block w-5 h-5 bg-white rounded-full shadow-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
            </SliderPrimitive.Root>

            <div className="flex justify-between mt-4">
              <div className="flex flex-col items-center">
                <Label className="text-[#F1F1F1] mb-2.5">Minimum</Label>
                <div className="bg-[#2a2a2a] rounded-full px-4 py-2">
                  <span className="text-sm">$ {priceRange[0].toFixed(2)}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Label className="text-[#F1F1F1] mb-2.5">Maximum</Label>
                <div className="bg-[#2a2a2a] rounded-full px-4 py-2">
                  <span className="text-sm">$ {priceRange[1].toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-4"
            style={{ backgroundColor: '#515151' }}
          />

          <div>
            <div className="text-lg mb-4">Platforms</div>
            <div className="grid grid-cols-3 gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformToggle(platform.id)}
                  className={cn(
                    "flex flex-col items-center justify-center p-3 rounded-lg transition-colors",
                    "bg-[#2a2a2a] hover:bg-[#3a3a3a]",
                    selectedPlatforms.includes(platform.id) && "ring-2 ring-red-500"
                  )}
                >
                  <div className="w-8 h-8 mb-2">
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-center">{platform.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8 p-4">
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-[#3a3a3a]"
            onClick={() => {
              setPriceRange([0, 80])
              setSelectedPlatforms([])
            }}
          >
            Clear all
          </Button>

          <Button
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => {
              const filteredProducts = prods.filter(product =>
                product.price >= priceRange[0] && product.price <= priceRange[1]
              );
              setProducts(filteredProducts);
              setOpen(false);
            }}
          >
            Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}