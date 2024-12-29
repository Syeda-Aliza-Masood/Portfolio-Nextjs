"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from 'lucide-react'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section
      id="contact"
      className="py-12 md:py-20 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/background2.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Fill out the form below and I will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea id="message" required />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
