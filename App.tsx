import React, { useState } from 'react';
import { PowerIcon, MarginIcon, ForexIcon, AutomationIcon } from './components/icons/FeatureIcons';
import Modal from './components/Modal';
import InteractiveDemo from './components/InteractiveDemo';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="text-xl font-bold text-white">[Your Logo Here]</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#demo" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Demo</a>
            <a href="#process" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">How It Works</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">About</a>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="hidden md:inline-block bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Book Your Audit
          </button>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="relative text-center py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
              Your Business Is Leaking.<br />Stop Guessing. Start Saving.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
              We aren't just "AI consultants." We are <span className="text-white font-semibold">Operational Resilience specialists</span>. In this market, you're not just fighting for growth; you're fighting for survival. We use targeted AI and automation to solve your most expensive problems: crippling diesel costs, hyperinflation, and forex scarcity.
            </p>
            <div className="mt-8">
              <button onClick={() => setIsModalOpen(true)} className="inline-block bg-cyan-500 text-slate-900 font-bold px-8 py-4 rounded-lg shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-all transform hover:scale-105">
                Book Your 14-Day Resilience Audit
              </button>
            </div>
          </div>
        </section>

        {/* PROBLEM / PAIN SECTION */}
        <section id="problem" className="py-16 md:py-24 bg-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Does This Sound Familiar?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400">Your operational environment is uniquely challenging. You are battling daily issues that businesses elsewhere can't imagine.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <blockquote className="p-6 bg-slate-800 rounded-lg border border-slate-700">
                <p className="text-slate-300">"My diesel bill is higher than my payroll. 12+ hours of load shedding is killing my bottom line."</p>
              </blockquote>
              <blockquote className="p-6 bg-slate-800 rounded-lg border border-slate-700">
                <p className="text-slate-300">"By the time my price list is printed, it's wrong. I'm terrified I'm selling at a loss."</p>
              </blockquote>
              <blockquote className="p-6 bg-slate-800 rounded-lg border border-slate-700">
                <p className="text-slate-300">"I can't get Forex to pay my suppliers, and the little I earn is being surrendered at a bad rate."</p>
              </blockquote>
              <blockquote className="p-6 bg-slate-800 rounded-lg border border-slate-700">
                <p className="text-slate-300">"My most senior managers are spending half their time on manual data entry and ZIMRA/NSSA paperwork."</p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section id="solution" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold text-white">Stop Plugging Leaks. Start Rebuilding Your Engine.</h2>
                 <p className="mt-4 max-w-3xl mx-auto text-slate-400">You cannot afford vague "tech solutions." You need a surgeon. We use AI as a high-precision tool to find the 3-4 areas in your business that are bleeding the most cash, and we fix them. We don't sell "AI"; we sell measurable ROI.</p>
                 <p className="mt-4 max-w-3xl mx-auto text-slate-200 font-medium">We build systems that optimize your resource use, protect your margins against hyperinflation, and automate your manual burdens to free up your best people.</p>
            </div>
        </section>


        {/* VALUE PILLARS / SERVICES SECTION */}
        <section id="services" className="py-16 md:py-24 bg-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our AI-Driven Solutions for Your Biggest Challenges</h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400">We tackle your four biggest operational crises head-on.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col">
                <div className="flex-shrink-0"><PowerIcon /></div>
                <h3 className="text-xl font-bold text-white mt-4">1. Tame Your Power Costs</h3>
                <p className="text-slate-400 mt-2 flex-grow">We build AI-driven energy management systems that learn your power usage and the ZESA schedule, automatically shifting non-critical work to grid power hours and optimizing your generator use.</p>
                <p className="mt-4 font-semibold text-cyan-400 flex items-center gap-2">» Gain: <span className="text-white">Directly cut your diesel bill by a projected 15-20%.</span></p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col">
                <div className="flex-shrink-0"><MarginIcon /></div>
                <h3 className="text-xl font-bold text-white mt-4">2. Protect Your Margins</h3>
                <p className="text-slate-400 mt-2 flex-grow">We build a Dynamic Pricing Engine that monitors real parallel market rates and input costs daily, giving your sales team the correct minimum price to ensure you never sell at a loss.</p>
                <p className="mt-4 font-semibold text-cyan-400 flex items-center gap-2">» Gain: <span className="text-white">Real-time margin protection and confidence to trade profitably.</span></p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col">
                <div className="flex-shrink-0"><ForexIcon /></div>
                <h3 className="text-xl font-bold text-white mt-4">3. Guard Your Forex & Cash Flow</h3>
                <p className="text-slate-400 mt-2 flex-grow">We use AI to automate debtor follow-ups to get cash in faster and scan local databases to find in-country suppliers for raw materials you currently import, reducing forex dependency.</p>
                <p className="mt-4 font-semibold text-cyan-400 flex items-center gap-2">» Gain: <span className="text-white">Improved cash flow and reduced reliance on scarce forex.</span></p>
              </div>

               <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col">
                <div className="flex-shrink-0"><AutomationIcon /></div>
                <h3 className="text-xl font-bold text-white mt-4">4. Automate Your Admin Burden</h3>
                <p className="text-slate-400 mt-2 flex-grow">We use Robotic Process Automation (RPA) to handle repetitive tasks like filling ZIMRA forms, NSSA reports, and managing payroll data, freeing your senior staff for high-value work.</p>
                <p className="mt-4 font-semibold text-cyan-400 flex items-center gap-2">» Gain: <span className="text-white">Hundreds of high-value hours back for your team to focus on sales and strategy.</span></p>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE DEMO SECTION */}
        <section id="demo" className="py-16 md:py-24">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Experience Our Solutions: An Interactive Demo</h2>
                <p className="mt-4 max-w-2xl mx-auto text-slate-400">Click through the tabs below to see a live simulation of how we solve your biggest challenges. Adjust the values to match your own business.</p>
              </div>
              <InteractiveDemo />
           </div>
        </section>

        {/* HOW IT WORKS / THE PROCESS SECTION */}
        <section id="process" className="py-16 md:py-24 bg-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our 3-Step Path to Resilience</h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400">We believe in proving our value, not just talking about it. Our process is transparent and ROI-focused.</p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-10 h-[calc(100%-5rem)] w-px bg-slate-700 hidden md:block" aria-hidden="true"></div>
              <div className="relative space-y-12 md:space-y-16">
                
                <div className="md:grid grid-cols-2 items-center gap-12">
                    <div className="text-center md:text-right md:pr-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 border-2 border-cyan-500 rounded-full text-2xl font-bold text-cyan-500 mb-4">1</div>
                        <h3 className="text-2xl font-bold text-white">The Resilience Audit (14 Days)</h3>
                        <p className="mt-2 text-slate-400">We start with a fixed-price, 2-week deep dive to find the most expensive leaks. We deliver a concrete Resilience Roadmap showing the exact AI solution, the cost, and the projected monthly saving.</p>
                    </div>
                    <div className="hidden md:block"></div>
                </div>

                <div className="md:grid grid-cols-2 items-center gap-12">
                    <div className="hidden md:block"></div>
                    <div className="text-center md:text-left md:pl-12">
                         <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 border-2 border-cyan-500 rounded-full text-2xl font-bold text-cyan-500 mb-4">2</div>
                        <h3 className="text-2xl font-bold text-white">The 90-Day Pilot Project</h3>
                        <p className="mt-2 text-slate-400">We pick the one project from the Roadmap with the biggest and fastest ROI. We build and deploy it in 90 days. We prove our value.</p>
                    </div>
                </div>
                
                <div className="md:grid grid-cols-2 items-center gap-12">
                    <div className="text-center md:text-right md:pr-12">
                         <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 border-2 border-cyan-500 rounded-full text-2xl font-bold text-cyan-500 mb-4">3</div>
                        <h3 className="text-2xl font-bold text-white">The Resilience Retainer</h3>
                        <p className="mt-2 text-slate-400">The market is always changing. We provide ongoing support, model tuning, and strategic advice to ensure your systems are always one step ahead of the next challenge.</p>
                    </div>
                     <div className="hidden md:block"></div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FINAL CALL-TO-ACTION SECTION */}
        <section id="cta" className="py-16 md:py-24 bg-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Stop Guessing. Stop Bleeding.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-400">The cost of inaction is selling at a loss for one more day or burning one more drum of diesel you didn't need to. Let's find out exactly how much you can save.</p>
            <div className="mt-8">
              <button onClick={() => setIsModalOpen(true)} className="inline-block bg-cyan-500 text-slate-900 font-bold px-8 py-4 rounded-lg shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-all transform hover:scale-105">
                Book Your 14-Day Resilience Audit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} [Your Business Name]</p>
          <p className="mt-2">
            <a href="mailto:info@youraifirm.co.zw" className="hover:text-cyan-400">info@youraifirm.co.zw</a> | <a href="tel:+263770000000" className="hover:text-cyan-400">+263 (0)77 000 0000</a>
          </p>
           <p className="mt-1">[Your Address]</p>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
       <style>{`
        html {
          scroll-behavior: smooth;
        }
        .bg-grid-slate-800 {
          background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px);
          background-size: 4rem 4rem;
          background-position: center center;
          opacity: 0.1;
        }
      `}</style>
    </div>
  );
};

export default App;
