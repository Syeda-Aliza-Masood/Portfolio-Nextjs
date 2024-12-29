"use client"

import { useState } from "react"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 w-full bg-white text-black backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="hover:text-gray-700 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-gray-700 transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-gray-700 transition-colors">
                Skills
              </a>
              <a href="#projects" className="hover:text-gray-700 transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-gray-700 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
