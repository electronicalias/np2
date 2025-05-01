"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
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
              <Link href="/about" className="text-sm font-medium text-[#5fb5b2] transition-colors hover:text-[#5fb5b2]">
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
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                About <span className="text-[#5fb5b2]">Nopaque</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 md:text-xl">
                We're on a mission to bring transparency to customer journey testing.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Story</h2>
                <div className="mt-6 space-y-6 text-lg text-gray-600">
                  <p>
                    Nopaque was founded in 2018 by a team of industry veterans who saw a critical gap in the market: the
                    lack of transparent, reliable testing solutions for customer journeys.
                  </p>
                  <p>
                    After years of working with large enterprises and seeing the challenges they faced with opaque
                    testing processes and unpredictable pricing, we decided to build something better.
                  </p>
                  <p>
                    Our name—Nopaque—reflects our core value: transparency in everything we do. Where traditional
                    solutions were opaque, we bring clarity, reliability, and predictability.
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nopaque team working"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission & Vision</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-600">
                  To simplify and advance customer and employee contact experiences through transparent, reliable, and
                  scalable testing solutions that empower organizations to deliver exceptional service.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600">
                  A world where every customer journey is seamless, every interaction is positive, and every
                  organization has the tools they need to continuously improve their service quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
              <p className="mt-4 text-lg text-gray-600">The principles that guide everything we do</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete transparency in our processes, pricing, and communications. No hidden fees, no
                  surprises—just clear, honest service.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
                <p className="text-gray-600">
                  Our customers depend on us for critical testing, and we take that responsibility seriously. We deliver
                  consistent, dependable results you can trust.
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We're constantly pushing the boundaries of what's possible in testing, developing new solutions to
                  meet evolving customer needs and industry challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Leadership Team</h2>
              <p className="mt-4 text-lg text-gray-600">Meet the people driving our mission forward</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="CEO"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">John Smith</h3>
                <p className="text-[#5fb5b2]">CEO & Co-Founder</p>
                <p className="mt-2 text-sm text-gray-600">
                  20+ years experience in telecommunications and customer experience solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="CTO"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Sarah Johnson</h3>
                <p className="text-[#5fb5b2]">CTO & Co-Founder</p>
                <p className="mt-2 text-sm text-gray-600">
                  Former head of engineering at a leading telecommunications provider.
                </p>
              </div>
              <div className="text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="COO"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Michael Chen</h3>
                <p className="text-[#5fb5b2]">COO</p>
                <p className="mt-2 text-sm text-gray-600">
                  Experienced operations leader with a background in scaling SaaS businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Approach</h2>
                <div className="mt-6 space-y-6 text-lg text-gray-600">
                  <p>
                    At Nopaque, we believe that testing shouldn't be a black box. Our approach combines cutting-edge
                    technology with a commitment to transparency and customer success.
                  </p>
                  <p>
                    We work closely with each client to understand their unique needs and challenges, then develop
                    tailored testing solutions that deliver actionable insights and measurable results.
                  </p>
                  <p>
                    Our platform is designed to be intuitive and powerful, giving you complete visibility into your
                    customer journeys and the tools you need to optimize them.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nopaque approach"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clients & Partners Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trusted By</h2>
              <p className="mt-4 text-lg text-gray-600">
                We're proud to work with leading organizations across industries
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center justify-center p-4">
                  <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#5fb5b2]">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">Join us on our mission</h2>
              <p className="mt-4 text-lg text-white/80">
                Ready to experience the difference of transparent, reliable testing?
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
