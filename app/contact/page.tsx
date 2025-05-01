"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#5fb5b2]/95 backdrop-blur supports-[backdrop-filter]:bg-[#5fb5b2]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-white">NOPAQUE</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="/"
                className="flex items-center text-lg font-medium text-white transition-colors hover:text-white/80"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="flex items-center text-lg font-medium text-white transition-colors hover:text-white/80"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="flex items-center text-lg font-medium text-white transition-colors hover:text-white/80"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="flex items-center text-lg font-medium text-white transition-colors hover:text-white/80"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-lg font-medium text-white transition-colors hover:text-white/80"
              >
                Contact
              </Link>
              <Link
                href="/podcast"
                className="flex items-center text-lg font-medium text-white transition-colors hover:text-white/80"
              >
                Podcast
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5fb5b2]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Get in touch</h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#5fb5b2]">Contact Information</h2>
                  <p className="text-gray-600 mt-2">
                    If you have any questions about our products or services, please don't hesitate to contact us.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#5fb5b2]">Email</h3>
                  <p className="text-gray-600">info@nopaque.co.uk</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#5fb5b2]">Address</h3>
                  <p className="text-gray-600">
                    Nopaque Ltd
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" required />
                  </div>
                  <Button type="submit" className="w-full bg-[#5fb5b2] hover:bg-[#5fb5b2]/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-white/10 bg-[#5fb5b2] py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-white md:text-left">
            © {new Date().getFullYear()} Nopaque. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-white underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-white underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
