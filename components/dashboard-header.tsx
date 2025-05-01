"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Menu, User, X } from "lucide-react"

export function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-[#5fb5b2]">NOPAQUE</span>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 bg-gray-100">
                <User className="h-5 w-5 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-lg border-gray-100 p-2 shadow-lg">
              <DropdownMenuLabel className="text-sm font-medium text-gray-700">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-100" />
              <DropdownMenuItem className="rounded-md text-sm cursor-pointer hover:bg-gray-50">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-md text-sm cursor-pointer hover:bg-gray-50">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-md text-sm cursor-pointer hover:bg-gray-50">
                Billing
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-100" />
              <DropdownMenuItem className="rounded-md text-sm cursor-pointer hover:bg-gray-50">
                <Link href="/" className="flex w-full">
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
