"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-10 text-center">
            <Link href="/" className="inline-block">
              <span className="font-bold text-xl text-[#5fb5b2]">NOPAQUE</span>
            </Link>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
              <p className="mt-1 text-sm text-gray-600">Sign in to your account to continue</p>
            </div>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="h-10 rounded-lg border-gray-300 focus:border-[#5fb5b2] focus:ring-[#5fb5b2]"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Link href="/auth/reset-password" className="text-xs text-[#5fb5b2] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="h-10 rounded-lg border-gray-300 focus:border-[#5fb5b2] focus:ring-[#5fb5b2]"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-lg bg-[#5fb5b2] hover:bg-[#5fb5b2]/90 text-white h-10"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-[#5fb5b2] hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
