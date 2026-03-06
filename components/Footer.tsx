import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 py-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} ATLAS.</p>
      <div className="mt-4 flex justify-center gap-6">
        <Link href="/privacy" className="hover:text-white transition">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-white transition">
          Terms
        </Link>
      </div>
    </footer>
  );
}
