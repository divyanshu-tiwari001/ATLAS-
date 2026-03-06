import Link from 'next/link';

interface NavigationProps {
  showValidatorLink?: boolean;
  showAboutLink?: boolean;
}

export default function Navigation({ showValidatorLink = false, showAboutLink = false }: NavigationProps) {
  return (
    <nav className="border-b border-gray-800 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-200 transition">
          ATLAS
        </Link>
        <div className="flex gap-6">
          {showValidatorLink && (
            <Link href="/validator" className="hover:text-blue-400 transition">
              Validator
            </Link>
          )}
          {showAboutLink && (
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          )}
          {!showValidatorLink && !showAboutLink && (
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
