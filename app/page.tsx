import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

export const metadata = {
  title: 'ATLAS - AI Startup Validator',
  description: 'Validate your startup idea before you build it',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation showValidatorLink showAboutLink />

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-6xl font-bold mb-6">Validate Your Startup Idea</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Before you waste months building the wrong product, use ATLAS to validate your startup idea in seconds.
        </p>
        <Link
          href="/validator"
          className="inline-block bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
        >
          Start Validating →
        </Link>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard title="Market Demand" description="Analyze if there's real demand for your idea using AI insights" />
        <FeatureCard title="Competition Analysis" description="Understand the competitive landscape and market saturation" />
        <FeatureCard title="Monetization Potential" description="Assess revenue models and pricing strategies" />
        <FeatureCard title="Execution Difficulty" description="Evaluate technical complexity and time to market" />
        <FeatureCard title="Viability Score" description="Get a clear 0-100 score with brutal honesty" />
        <FeatureCard title="Strategic Insights" description="Receive actionable recommendations for improvement" />
      </section>

      <Footer />
    </main>
  );
}
