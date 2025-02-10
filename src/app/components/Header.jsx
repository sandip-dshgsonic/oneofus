// components/Header.jsx
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/logo-color.svg" // Corrected path (no `/public`)
                alt="Safety Bracelet"
                width={120} // Adjusted size for better layout
                height={120}
                className="object-contain"
              />
              {/* <span className="text-xl font-bold text-purple-600">TalkNotes</span> */}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-14">
            <Link href="/try-it" className="text-gray-600 hover:text-gray-900">
              Try it
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">
              How it works
            </Link>
            <Link href="/use-cases" className="text-gray-600 hover:text-gray-900">
              Use cases
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              Get TalkNotes +
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
