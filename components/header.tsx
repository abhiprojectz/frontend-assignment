"use client"

import { Search, Globe, User, ShoppingCart, AlignJustifyIcon, CircleUserRoundIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import UserDropdownMenu from "./userDropdown"
import LanguageDropdown from "./LanguageDropdownMenu"

import { SlidersHorizontal } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import NavbarFilters from "./filters"
import React from 'react';
import prods from "@/lib/products";

import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Cross1Icon } from '@radix-ui/react-icons'
import { PopoverClose } from '@radix-ui/react-popover'
import MobileNavigationSheet from "@/components/MobileNavigationSheet"


// Main header for the page 
export default function Header({ products, setProducts, loading, setLoading, parentCategory, setParentCategory, childCategory, setChildCategory }: any) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeMenu, setActiveMenu] = React.useState("All");
  const [activeSubMenu, setActiveSubMenu] = React.useState("");
  const [open, setOpen] = React.useState(false);

  // This function handles changes in the search input field, updating the search term as the user types.
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  const handleSearchClick = () => {
    const filteredProducts = prods.filter(product => {
      const matchesSearchTerm = product.productName.toLowerCase().includes(searchTerm.toLowerCase());

      // Return all products if active menu is "All"
      const matchesActiveMenu = activeMenu === "All" || product.category === activeMenu;

      // Consider no submenu as "All"
      const matchesActiveSubMenu = !activeSubMenu || activeSubMenu === "All" || product.subcategory === activeSubMenu;
      return matchesSearchTerm && matchesActiveMenu && matchesActiveSubMenu;
    });

    setProducts(filteredProducts);
    setLoading(filteredProducts.length === 0);

    setParentCategory(activeMenu);
    setChildCategory(activeSubMenu);
  };

  return (
    <header className="w-full border-b border-[#515151] bg-[#110606] lg:px-12 p-2">
      <div className='w-full ml-auto mr-auto flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center justify-around'>
          <div className="flex flex-row items-center gap-1 p-1 md:p-2 mr-[120px] text-xs md:text-sm ml-0 lg:ml-4">
            <a href="/">
              <img src="/images/logo.png" alt="logo" className="w-[200px] h-[30px] lg:w-[220px] lg:h-[30px]" />
            </a>
          </div>

          {/* Main Center search bar */}
          {!window.location.pathname.includes('product_view') && <>
            <div className='flex flex-row items-center justify-between w-full ml-auto mr-auto pl-4 pr-4 lg:flex hidden'>
              <div className="bg-[#110606] text-[#B3B3B3] grid-cols-1 relative w-full grid rounded-full">
                <div className="w-full bg-zinc-950/90 rounded-full p-1 md:p-2"
                  style={{ backgroundColor: '#2B2828' }}
                >
                  <div className="flex items-center w-full">
                    <div className="flex-1 border-r border-[#515151]">
                      <div className="text-sm font-bold text-[#B3B3B3] px-4">
                        Keyword
                      </div>
                      <Input
                        className="border-0 px-4 bg-transparent text-white placeholder:text-[#B3B3B3] focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                        placeholder="Search Avatown"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-[#B3B3B3] font-bold px-4">
                          Category
                        </div>
                        <div className="bg-transparent text-sm">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="default"
                                className="bg-transparent border-none hover:bg-transparent text-md"
                                style={{ color: "#B3B3B3" }}
                              >
                                {activeSubMenu ? `${activeMenu} > ${activeSubMenu}` : activeMenu || "All"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="border-0 bg-transparent shadow-none"
                              style={{ color: "#443E3E", boxShadow: "transparent" }}>
                              <div className="grid gap-4">
                                <div className="w-[600px] rounded-xl bg-zinc-800/90 p-4"
                                  style={{ backgroundColor: "#443E3E" }}
                                >
                                  <div className="grid grid-cols-2 gap-4 ">
                                    {/* Left Menu */}
                                    <div className="space-y-1 border-r border-[#515151] pr-2">
                                      {Array.from(new Set(prods.map(product => product.category))).map((menuItem) => (
                                        <button
                                          key={menuItem}
                                          onClick={() => {
                                            setActiveMenu(menuItem);
                                            setActiveSubMenu(""); // Reset active sub menu when changing main menu
                                          }}
                                          className={cn(
                                            "flex w-full items-center justify-between rounded-[30px] px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-gray-600/50",
                                            activeMenu === menuItem && "bg-[#655D5E] text-white border-2 border-[#655D5E] rounded-[30px]"
                                          )}
                                        >
                                          {menuItem}
                                          <ChevronRight className="h-4 w-4 font-medium" />
                                        </button>
                                      ))}
                                      <button
                                        key="All"
                                        onClick={() => {
                                          setActiveMenu("All");
                                          setActiveSubMenu(""); // Reset active sub menu when changing main menu
                                          // Removed product reset logic
                                        }}
                                        className={cn(
                                          "flex w-full items-center justify-between rounded-[30px] px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-gray-600/50",
                                          activeMenu === "All" && "bg-[#655D5E] text-white border-2 border-[#655D5E] rounded-[30px]"
                                        )}
                                      >
                                        All
                                        <ChevronRight className="h-4 w-4 font-medium" />
                                      </button>
                                    </div>

                                    {/* Right Submenu */}
                                    <div className="space-y-1">
                                      {activeMenu !== "All" && prods.filter(product => product.category === activeMenu).map((product) => (
                                        <button
                                          key={product.subcategory}
                                          onClick={() => {
                                            // Set active sub menu
                                            setActiveSubMenu(product.subcategory);
                                          }}
                                          className={cn(
                                            "w-full rounded-[30px] px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-gray-600/50 text-left",
                                            activeSubMenu === product.subcategory && "bg-[#655D5E] text-white border-2 border-[#655D5E] rounded-[30px]"
                                          )}
                                        >
                                          {product.subcategory}
                                        </button>
                                      ))}
                                      <button
                                        key="ALL_SUBMENU"
                                        onClick={() => {
                                          // Set active sub menu to All
                                          setActiveSubMenu("All");
                                        }}
                                        className={cn(
                                          "w-full rounded-[30px] px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-gray-600/50 text-left",
                                          (activeSubMenu === "All" || (activeMenu === "All" && activeSubMenu === "")) && "bg-[#655D5E] text-white border-2 border-[#655D5E] rounded-[30px]",
                                          activeSubMenu === "" && "bg-[#655D5E] text-white border-2 border-[#655D5E] rounded-[30px]" // Set All as selected by default
                                        )}
                                      >
                                        All
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>

                      <Button
                        size="icon"
                        className="h-10 w-10 rounded-full bg-rose-500 hover:bg-rose-600"
                        onClick={handleSearchClick}
                      >
                        <Search className="h-4 w-4" />
                        <span className="sr-only">Search</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex inline-flex items-center gap-2 ml-2'>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-10 w-10 rounded-full border border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
                      style={{ color: "#B3B3B3" }}>
                      <SlidersHorizontal className="h-4 w-4" />
                      <span className="sr-only">Filters</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="border-0 outline-0 bg-transparent shadow-none text-[#443E3E]">
                    <div className="grid">
                      <div className='text-white grid grid-cols-2 border-b border-[#515151] p-5 bg-[#2B2828] rounded-tl-[12px] rounded-tr-[12px]'>
                        <PopoverClose className='text-white mr-2 ml-0'>
                          <Cross1Icon className="h-4 w-4 text-white" />
                        </PopoverClose>
                        <div className='text-left'>Filters</div>
                      </div>
                      <NavbarFilters products={products} setProducts={setProducts} setOpen={setOpen}></NavbarFilters>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </>}
        </div>

        {/* Misc menubar options  */}
        <div className="hidden md:flex flex-row items-center gap-[22px] ml-[40px] grow justify-end">
          <span className="text-sm">List your creation</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-[#443E3E]">
                <Globe className="h-5 w-5 text-white" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-transparent border-0 shadow-none">
              <div>
                <LanguageDropdown></LanguageDropdown>
              </div>
            </PopoverContent>
          </Popover>


          <div className="flex items-center">
            <div className="border border-white rounded-full p-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white w-full rounded-full p-2 hover:bg-[#443E3E]">
                    <AlignJustifyIcon className="h-5 w-5 text-white mr-2" />
                    <CircleUserRoundIcon className="h-6 w-6 text-white " />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-transparent border-0 shadow-none">
                  <div>
                    <UserDropdownMenu></UserDropdownMenu>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white border border-white rounded-full hover:bg-[#443E3E]">
                <ShoppingCart className="h-5 w-5 text-white" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-50 mt-3 p-2 shadow-none bg-[#110606] border-0 text-[#F1F1F1]">
              <div>
                Empty - No products added.
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <MobileNavigationSheet></MobileNavigationSheet>
      </div>

      {/* Search bar for medium sized devices */}
      {!window.location.pathname.includes('product_view') && <>
        <div className='flex flex-row items-center justify-between lg:hidden w-full ml-auto mr-auto pl-0 pr-0 lg:pr-4 lg:pl-4 mt-3'>
          <div className="bg-[#110606] text-[#B3B3B3] grid grid-cols-1 w-full relative rounded-full">
            <div className="w-full bg-zinc-950/90 rounded-full p-1 md:p-2"
              style={{ backgroundColor: '#2B2828' }}
            >
              <div className="flex items-center w-full">
                <div className="flex-1 border-r border-[#515151]">
                  <div className="text-sm font-bold text-[#B3B3B3] px-4">
                    Keyword
                  </div>
                  <Input
                    className="border-0 px-4 bg-transparent text-white placeholder:text-[#B3B3B3] focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                    placeholder="Search Avatown"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[#B3B3B3] font-bold px-4">
                      Category
                    </div>
                    <div className="bg-transparent text-sm">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="default"
                            className="bg-transparent border-none hover:bg-transparent text-md"
                            style={{ color: "#B3B3B3" }}
                          >
                            {activeSubMenu ? `${activeMenu} > ${activeSubMenu}` : activeMenu || "All"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="border-0 bg-transparent shadow-none"
                          style={{ color: "#443E3E", boxShadow: "transparent" }}>
                          <div className="grid">
                            <div className="min-w-[350px] sm:w-[420px] rounded-xl bg-zinc-800/90 p-4  ml-[-60px] ml-0"
                              style={{ backgroundColor: "#443E3E" }}
                            >
                              <div className="grid grid-cols-2 gap-4 ">
                                {/* Left Menu */}
                                <div className="space-y-1 border-r border-[#515151] pr-2">
                                  {Array.from(new Set(prods.map(product => product.category))).map((menuItem) => (
                                    <button
                                      key={menuItem}
                                      onClick={() => {
                                        setActiveMenu(menuItem);
                                        setActiveSubMenu(""); // Reset active sub menu when changing main menu
                                      }}
                                      className={cn(
                                        "flex w-full items-center justify-between rounded-[30px] px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-gray-600/50",
                                        activeMenu === menuItem && "bg-[#655D5E] text-white border-2 border-[#655D5E] rounded-[30px]"
                                      )}
                                    >
                                      {menuItem}
                                      <ChevronRight className="h-4 w-4 font-medium" />
                                    </button>
                                  ))}
                                  <button
                                    key="All"
                                    onClick={() => {
                                      setActiveMenu("All");
                                      setActiveSubMenu(""); // Reset active sub menu when changing main menu
                                    }}
                                    className={cn(
                                      "flex w-full items-center justify-between rounded-[30px] px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-gray-600/50",
                                      activeMenu === "All" && "bg-[#655D5E] text-white border-2 border-[#655D5E] rounded-[30px]"
                                    )}
                                  >
                                    All
                                    <ChevronRight className="h-4 w-4 font-medium" />
                                  </button>
                                </div>

                                {/* Right Submenu */}
                                <div className="space-y-1">
                                  {activeMenu !== "All" && prods.filter(product => product.category === activeMenu).map((product) => (
                                    <button
                                      key={product.subcategory}
                                      onClick={() => {
                                        setActiveSubMenu(product.subcategory); // Set active sub menu
                                      }}
                                      className={cn(
                                        "w-full rounded-[30px] px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-gray-600/50 text-left",
                                        activeSubMenu === product.subcategory && "bg-[#655D5E] text-white border-2 border-[#655D5E] rounded-[30px]"
                                      )}
                                    >
                                      {product.subcategory}
                                    </button>
                                  ))}
                                  <button
                                    key="ALL_SUBMENU"
                                    onClick={() => {
                                      setActiveSubMenu("All"); // Set active sub menu to All
                                    }}
                                    className={cn(
                                      "w-full rounded-[30px] px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-gray-600/50 text-left",
                                      (activeSubMenu === "All" || (activeMenu === "All" && activeSubMenu === "")) && "bg-[#655D5E] text-white border-2 border-[#655D5E] rounded-[30px]",
                                      activeSubMenu === "" && "bg-[#655D5E] text-white border-2 border-[#655D5E] rounded-[30px]" // Set All as selected by default
                                    )}
                                  >
                                    All
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <Button
                    size="icon"
                    className="h-10 w-10 rounded-full bg-rose-500 hover:bg-rose-600"
                    onClick={handleSearchClick}
                  >
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex inline-flex items-center gap-2 ml-2'>
            <Sheet>
              <SheetTrigger className='text-white' style={{ fill: 'white' }}>
                <div
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
                  style={{ color: "#B3B3B3" }}>
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="sr-only">Filters</span>
                </div>
              </SheetTrigger>
              <SheetContent className='bg-[#1c1c1c] p-0' side={"bottom"}>
                <SheetHeader>
                  <SheetTitle className='text-white grid grid-cols-2 border-b border-[#515151] p-5'>
                    <SheetClose className='text-white mr-2 ml-0'>
                      <Cross1Icon className="h-4 w-4 text-white" />
                    </SheetClose>
                    <div className='text-left'>Filters</div>
                  </SheetTitle>
                  <NavbarFilters></NavbarFilters>
                </SheetHeader>
                <SheetDescription></SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </>}
    </header>
  )
}