"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
    SheetTitle,
    SheetDescription
} from "@/components/ui/sheet"
import { ChevronRight, ShoppingCart, AlignJustifyIcon } from "lucide-react"

import Link from "next/link"

export default function MobileNavigationSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white border border-white rounded-full hover:bg-[#443E3E] md:hidden ml-4">
                    <AlignJustifyIcon className="h-5 w-5 text-white" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs border-0 bg-[#1C1C1E] p-0" aria-describedby={"Menubar"}>
                <SheetHeader className="border-b border-border/10 p-4">
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                    <SheetClose asChild>
                        <Button variant="ghost" className="w-fit px-0 text-white hover:bg-transparent">
                            <ChevronRight className="mr-2 h-5 w-5 rotate-180" />
                            Go back
                        </Button>
                    </SheetClose>
                </SheetHeader>
                <div className="flex flex-col text-white">
                    <div className="p-4">
                        <h2 className="text-2xl font-normal">Hello,</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="px-4">
                            <h3 className="mb-2 text-lg font-normal">Shopping</h3>
                            <Link
                                href="#"
                                className="flex items-center justify-between border-t border-white/10 py-3"
                            >
                                <div className="flex items-center gap-3">
                                    <ShoppingCart className="h-5 w-5" />
                                    Your cart
                                </div>
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                        </div>

                        <div className="px-4">
                            <h3 className="mb-2 text-lg font-normal">Your account</h3>
                            <div className="space-y-3">
                                <Link
                                    href="#"
                                    className="flex items-center justify-between border-t border-white/10 py-3"
                                >
                                    <span>Sign in</span>
                                    <ChevronRight className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between border-t border-white/10 py-3"
                                >
                                    <span>Sign up</span>
                                    <ChevronRight className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>

                        <div className="px-4">
                            <h3 className="mb-2 text-lg font-normal">Support</h3>
                            <Link
                                href="#"
                                className="flex items-center justify-between border-t border-white/10 py-3"
                            >
                                <span>Message to Yuta(The founder)</span>
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                        </div>

                        <div className="px-4">
                            <h3 className="mb-2 text-lg font-normal">Language</h3>
                            <Link
                                href="#"
                                className="flex items-center justify-between border-t border-white/10 py-3"
                            >
                                <span>English(US)</span>
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

