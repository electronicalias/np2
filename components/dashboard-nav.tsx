"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, CreditCard, Home, Settings, Users } from "lucide-react"

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r border-gray-100 bg-white md:block">
      <div className="flex h-full max-h-screen flex-col gap-2 p-4">
        <nav className="grid gap-1 px-2 py-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-[#5fb5b2]/10 text-[#5fb5b2]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              )}
            >
              <item.icon className={cn("h-5 w-5", pathname === item.href ? "text-[#5fb5b2]" : "text-gray-500")} />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
