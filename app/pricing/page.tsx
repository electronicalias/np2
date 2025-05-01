"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, HelpCircle, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingPage() {
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
                className="text-sm font-medium text-[#5fb5b2] transition-colors hover:text-[#5fb5b2]"
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
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Simple, transparent <span className="text-[#5fb5b2]">pricing</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 md:text-xl">
                Choose the plan that's right for your business. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Free Tier */}
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Free</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">£0</span>
                    <span className="ml-1 text-sm font-medium text-gray-500">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">For individuals and small teams getting started</p>
                </div>
                <Link href="/auth/signup" className="block w-full">
                  <Button
                    variant="outline"
                    className="w-full rounded-lg border-[#5fb5b2] text-[#5fb5b2] hover:bg-[#5fb5b2]/5"
                  >
                    Get Started
                  </Button>
                </Link>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">5 journey tests per month</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">1 journey map</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Basic reporting</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Email support</span>
                  </div>
                  <div className="flex items-start">
                    <X className="mr-3 h-5 w-5 text-gray-300 shrink-0" />
                    <span className="text-sm text-gray-400">Load testing</span>
                  </div>
                  <div className="flex items-start">
                    <X className="mr-3 h-5 w-5 text-gray-300 shrink-0" />
                    <span className="text-sm text-gray-400">Advanced analytics</span>
                  </div>
                </div>
              </div>

              {/* Pro Tier */}
              <div className="rounded-xl border-2 border-[#5fb5b2] bg-white p-8 shadow-md relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#5fb5b2] px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Pro</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">£99</span>
                    <span className="ml-1 text-sm font-medium text-gray-500">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">For growing businesses with more testing needs</p>
                </div>
                <Link href="/auth/signup" className="block w-full">
                  <Button className="w-full rounded-lg bg-[#5fb5b2] hover:bg-[#5fb5b2]/90 text-white">
                    Get Started
                  </Button>
                </Link>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">50 journey tests per month</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">10 journey maps</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Advanced reporting</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Priority email support</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Basic load testing (up to 50 concurrent users)</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Basic analytics</span>
                  </div>
                </div>
              </div>

              {/* Enterprise Tier */}
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Enterprise</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">Custom</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">For organizations with advanced testing requirements</p>
                </div>
                <Link href="/contact" className="block w-full">
                  <Button
                    variant="outline"
                    className="w-full rounded-lg border-[#5fb5b2] text-[#5fb5b2] hover:bg-[#5fb5b2]/5"
                  >
                    Contact Sales
                  </Button>
                </Link>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Unlimited journey tests</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Unlimited journey maps</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Custom reporting</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Dedicated support manager</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Advanced load testing (unlimited concurrent users)</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[#5fb5b2] shrink-0" />
                    <span className="text-sm text-gray-700">Advanced analytics with custom dashboards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Compare features</h2>
              <p className="mt-4 text-lg text-gray-600">Find the plan that's right for your business</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-6 text-left font-medium text-gray-500">Features</th>
                    <th className="py-4 px-6 text-center font-medium text-gray-500">Free</th>
                    <th className="py-4 px-6 text-center font-medium text-gray-500">Pro</th>
                    <th className="py-4 px-6 text-center font-medium text-gray-500">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <FeatureRow
                    feature="Journey Tests"
                    free="5 per month"
                    pro="50 per month"
                    enterprise="Unlimited"
                    tooltip="Tests that validate customer journeys through your IVR or voice systems"
                  />
                  <FeatureRow
                    feature="Journey Maps"
                    free="1"
                    pro="10"
                    enterprise="Unlimited"
                    tooltip="Visual maps of your customer journeys"
                  />
                  <FeatureRow
                    feature="Load Testing"
                    free="—"
                    pro="Up to 50 concurrent users"
                    enterprise="Unlimited concurrent users"
                    tooltip="Simulate high traffic to test system performance"
                  />
                  <FeatureRow
                    feature="Heart Beat Monitoring"
                    free="—"
                    pro="Basic (hourly)"
                    enterprise="Advanced (customizable)"
                    tooltip="Regular system health checks"
                  />
                  <FeatureRow
                    feature="Analytics"
                    free="Basic"
                    pro="Advanced"
                    enterprise="Custom dashboards"
                    tooltip="Insights into your testing results"
                  />
                  <FeatureRow
                    feature="API Access"
                    free="—"
                    pro="Limited"
                    enterprise="Full access"
                    tooltip="Programmatic access to TotalPath"
                  />
                  <FeatureRow
                    feature="Support"
                    free="Email"
                    pro="Priority email"
                    enterprise="Dedicated manager"
                    tooltip="Help when you need it"
                  />
                  <FeatureRow
                    feature="Team Members"
                    free="1"
                    pro="5"
                    enterprise="Unlimited"
                    tooltip="Number of users who can access your account"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pay As You Go Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Pay as you go options</h2>
              <p className="mt-4 text-lg text-gray-600">
                Need more flexibility? Our pay-as-you-go options let you pay only for what you use.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Journey Tests</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold tracking-tight text-gray-900">£2</span>
                    <span className="ml-1 text-sm font-medium text-gray-500">/test</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Run individual journey tests on demand without a monthly commitment.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Journey Maps</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold tracking-tight text-gray-900">£10</span>
                    <span className="ml-1 text-sm font-medium text-gray-500">/map</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Create individual journey maps as needed for your specific projects.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Load Testing</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold tracking-tight text-gray-900">£0.05</span>
                    <span className="ml-1 text-sm font-medium text-gray-500">/concurrent user/hour</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Run load tests with the exact capacity you need, when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
              <p className="mt-4 text-lg text-gray-600">Have questions? We're here to help.</p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium text-gray-900 py-4">
                    How does the 14-day free trial work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    Our 14-day free trial gives you full access to all features of the Pro plan. No credit card is
                    required to start. At the end of the trial, you can choose to upgrade to a paid plan or continue
                    with the Free plan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium text-gray-900 py-4">
                    Can I change plans at any time?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your plan will take
                    effect at the start of your next billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium text-gray-900 py-4">
                    How do you count journey tests?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    A journey test is counted each time you run a test through a complete customer journey. This
                    includes all the steps and interactions in that journey. Tests that are scheduled to run regularly
                    (like Heart Beat monitoring) count as individual tests each time they run.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium text-gray-900 py-4">
                    What happens if I exceed my plan limits?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    If you exceed your plan limits, you'll be charged at our pay-as-you-go rates for any additional
                    usage. We'll always notify you before charging for overages.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium text-gray-900 py-4">
                    Do you offer discounts for annual billing?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    Yes, we offer a 15% discount when you choose annual billing for any of our plans. Contact our sales
                    team for more information.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#5fb5b2]">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">Ready to get started?</h2>
              <p className="mt-4 text-lg text-white/80">
                Join hundreds of companies that trust TotalPath for their customer journey testing.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup">
                  <Button size="lg" className="rounded-full bg-white text-[#5fb5b2] hover:bg-white/90 px-8">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white text-white hover:bg-white/10 px-8"
                  >
                    Contact Sales
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

function FeatureRow({
  feature,
  free,
  pro,
  enterprise,
  tooltip,
}: {
  feature: string
  free: string
  pro: string
  enterprise: string
  tooltip?: string
}) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-4 px-6 text-left font-medium text-gray-900 flex items-center">
        {feature}
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="ml-2 h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </td>
      <td className="py-4 px-6 text-center text-sm text-gray-600">{free}</td>
      <td className="py-4 px-6 text-center text-sm text-gray-600">{pro}</td>
      <td className="py-4 px-6 text-center text-sm text-gray-600">{enterprise}</td>
    </tr>
  )
}
