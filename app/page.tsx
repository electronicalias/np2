"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-[#5fb5b2]">NOPAQUE</span>
          </Link>
          <div className="flex items-center gap-8">
            <nav className="hidden gap-8 md:flex">
              <Link
                href="/product"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-[#5fb5b2]"
              >
                Product
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-[#5fb5b2]"
              >
                Pricing
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#5fb5b2]">
                About
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link
                href="/auth/login"
                className="hidden text-sm font-medium text-gray-600 transition-colors hover:text-[#5fb5b2] md:block"
              >
                Login
              </Link>
              <Link href="/auth/signup">
                <Button className="rounded-full bg-[#5fb5b2] hover:bg-[#5fb5b2]/90 text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Minimalist */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                The world's most <span className="text-[#5fb5b2]">transparent</span> testing platform.
              </h1>
              <p className="mt-6 text-lg text-gray-600 md:text-xl">
                Automated, on-demand, scalable testing for your customer journeys. No more opaque processes or pricing.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup">
                  <Button size="lg" className="rounded-full bg-[#5fb5b2] hover:bg-[#5fb5b2]/90 px-8">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/product">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features - Clean Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">One platform, multiple solutions</h2>
              <p className="mt-4 text-lg text-gray-600">
                TotalPath brings automated, on-demand, scalable testing to your customer journeys.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-[#5fb5b2]/10 flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-[#5fb5b2]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Journey Mapping</h3>
                <p className="text-gray-600">
                  Automatically map existing customer journeys to understand current state and plan improvements.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-[#5fb5b2]/10 flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-[#5fb5b2]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Journey Testing</h3>
                <p className="text-gray-600">
                  Validate DTMF and audio-based journeys with automated testing to ensure service quality.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-[#5fb5b2]/10 flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-[#5fb5b2]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Load Testing</h3>
                <p className="text-gray-600">
                  Ensure your systems can handle peak loads with on-demand, scalable testing capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 mb-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-gray-600 md:text-2xl">
                "TotalPath has revolutionized how we test our customer journeys. We've reduced testing time by 80% and
                improved our service quality dramatically."
              </p>
              <div className="mt-8">
                <p className="font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-600">CTO, Enterprise Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#5fb5b2]">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">Ready to get started?</h2>
              <p className="mt-4 text-lg text-white/80">
                Join us in simplifying and advancing your customer and employee contact experiences.
              </p>
              <div className="mt-10">
                <Link href="/auth/signup">
                  <Button size="lg" className="rounded-full bg-white text-[#5fb5b2] hover:bg-white/90 px-8">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/product" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/docs" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-[#5fb5b2]">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Nopaque. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-[#5fb5b2]">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#5fb5b2]">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
