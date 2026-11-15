/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickSummaryGrid } from './components/QuickSummaryGrid';
import { ComparisonTable } from './components/ComparisonTable';
import { DecisionGuide } from './components/DecisionGuide';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <QuickSummaryGrid />
        <ComparisonTable />
        <DecisionGuide />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
