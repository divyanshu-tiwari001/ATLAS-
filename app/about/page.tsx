import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'About - ATLAS',
  description: 'Learn about ATLAS, the AI-powered startup validator',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold mb-6">About ATLAS</h2>
        <p className="text-xl text-gray-400 mb-8">
          ATLAS is an AI-powered startup idea validator that helps founders assess
          the viability of their ideas before investing time and money.
        </p>
        <p className="text-gray-400 mb-6">
          Built with Next.js, TypeScript, Tailwind CSS, and the OpenAI API, ATLAS
          provides instant, structured analysis covering market demand, competition,
          monetization potential, and execution difficulty.
        </p>
        <p className="text-gray-400">
          Our goal is to help entrepreneurs make better decisions faster — saving
          months of effort by surfacing the hard questions early.
        </p>
      </div>
    </main>
  );
}
