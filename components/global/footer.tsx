import type React from "react"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex w-8 h-8 flex-col justify-center items-center bg-[#5444E9] rounded-lg">
                <span className="text-white text-sm font-bold">GC</span>
              </div>
              <span className="font-bold">Growth Charters</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses to achieve exponential growth through data-driven strategies and expert guidance.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Analytics Platform</div>
              </li>
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Strategy Tools</div>
              </li>
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Expert Consulting</div>
              </li>
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Integrations</div>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Documentation</div>
              </li>
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Blog</div>
              </li>
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Case Studies</div>
              </li>
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Webinars</div>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">About Us</div>
              </li>
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Careers</div>
              </li>
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Contact</div>
              </li>
              <li>
                <div className="hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Growth Charters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
