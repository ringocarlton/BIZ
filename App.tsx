import React, { useState } from 'react';
import { PowerIcon, MarginIcon, ForexIcon, AutomationIcon } from './components/icons/FeatureIcons';
import { AuditIcon, PilotIcon, RetainerIcon } from './components/icons/ProcessIcons';
import Modal from './components/Modal';
import InteractiveDemo from './components/InteractiveDemo';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="text-xl font-bold text-white tracking-wider">Resilient<span className="text-cyan-400">AI</span></div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#demo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Demo</a>
            <a href="#process" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Process</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="hidden md:inline-block bg-slate-800 hover:bg-slate-700 text-slate-50 text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
            Book Your Audit
          </button>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="relative text-center py-24 md:py-40 overflow-hidden isolate">
          <div className="absolute inset-0 -z-20">
            <img src="https://images.unsplash.com/photo-1547652579-a57c5a079144?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern industrial facility" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="absolute -top-1/2 left-1/2 -z-10 h-[1200px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(0,255,255,0.08),transparent)]" aria-hidden="true"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Your Business Is Leaking.<br />Stop Guessing. Start Saving.
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 leading-relaxed">
              We are <span className="text-white font-medium">Operational Resilience specialists</span>. In this market, you're fighting for survival. We use targeted AI and automation to solve your most expensive problems: crippling diesel costs, hyperinflation, and forex scarcity.
            </p>
            <div className="mt-10">
              <button onClick={() => setIsModalOpen(true)} className="inline-block bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full text-lg hover:bg-white transition-all transform hover:scale-105">
                Book Your 14-Day Resilience Audit
              </button>
            </div>
          </div>
        </section>

        {/* PROBLEM / PAIN SECTION */}
        <section id="problem" className="py-24 md:py-32 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Does This Sound Familiar?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Your operational environment is uniquely challenging. You are battling daily issues that businesses elsewhere can't imagine.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative p-8 bg-slate-900 rounded-2xl overflow-hidden min-h-[160px] flex items-end">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                 <img src="https://images.unsplash.com/photo-1617105221316-292336398a72?q=80&w=2835&auto=format&fit=crop" alt="Diesel generator" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
                 <p className="text-lg text-slate-300 relative">"My diesel bill is higher than my payroll. 12+ hours of load shedding is killing my bottom line."</p>
              </div>
              <div className="relative p-8 bg-slate-900 rounded-2xl overflow-hidden min-h-[160px] flex items-end">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                 <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2940&auto=format&fit=crop" alt="Stressed person with finances" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
                <p className="text-lg text-slate-300 relative">"By the time my price list is printed, it's wrong. I'm terrified I'm selling at a loss."</p>
              </div>
              <div className="relative p-8 bg-slate-900 rounded-2xl overflow-hidden min-h-[160px] flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                 <img src="https://images.unsplash.com/photo-1614741118884-857e49915e21?q=80&w=2862&auto=format&fit=crop" alt="Empty warehouse shelves" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
                <p className="text-lg text-slate-300 relative">"I can't get Forex to pay my suppliers, and the little I earn is being surrendered at a bad rate."</p>
              </div>
              <div className="relative p-8 bg-slate-900 rounded-2xl overflow-hidden min-h-[160px] flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                 <img src="https://images.unsplash.com/photo-1586473215916-258410a8868f?q=80&w=2940&auto=format&fit=crop" alt="Desk with lots of paperwork" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
                <p className="text-lg text-slate-300 relative">"My most senior managers are spending half their time on manual data entry and ZIMRA/NSSA paperwork."</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section id="solution" className="py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                     <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Stop Plugging Leaks. Rebuild Your Engine.</h2>
                     <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-slate-400">You cannot afford vague "tech solutions." You need a surgeon. We use AI as a high-precision tool to find the 3-4 areas in your business that are bleeding the most cash, and we fix them. We don't sell "AI"; we sell measurable ROI.</p>
                     <p className="mt-4 max-w-xl mx-auto md:mx-0 text-slate-200 font-medium text-lg">We build systems that optimize your resource use, protect your margins against hyperinflation, and automate your manual burdens to free up your best people.</p>
                </div>
                <div className="flex justify-center items-center">
                     <svg width="100%" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{stopColor: 'rgb(255,0,0)', stopOpacity: 0.5}} />
                                <stop offset="100%" style={{stopColor: 'rgb(255,165,0)', stopOpacity: 0.5}} />
                            </linearGradient>
                            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{stopColor: 'rgb(34, 211, 238)', stopOpacity: 1}} />
                                <stop offset="100%" style={{stopColor: 'rgb(56, 189, 248)', stopOpacity: 1}} />
                            </linearGradient>
                        </defs>
                        
                        {/* Chaotic Lines */}
                        <path d="M 20 80 Q 50 20, 80 80 T 140 80" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
                        <path d="M 30 120 Q 60 180, 90 120 T 150 120" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
                        <path d="M 10 100 C 40 50, 70 150, 100 100 S 130 50, 160 100" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
                         <path d="M 40 60 C 70 10, 80 110, 110 60 S 140 10, 170 60" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />


                        {/* Arrow */}
                        <path d="M 180 100 L 220 100" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
                        <path d="M 215 95 L 225 100 L 215 105" stroke="#475569" strokeWidth="2" fill="none" />

                        {/* Orderly Lines */}
                        <path d="M 240 60 L 380 60" stroke="url(#lineGradient2)" strokeWidth="2" />
                        <path d="M 240 80 L 380 80" stroke="url(#lineGradient2)" strokeWidth="2" />
                        <path d="M 240 100 L 380 100" stroke="url(#lineGradient2)" strokeWidth="2" />
                        <path d="M 240 120 L 380 120" stroke="url(#lineGradient2)" strokeWidth="2" />
                        <path d="M 240 140 L 380 140" stroke="url(#lineGradient2)" strokeWidth="2" />

                    </svg>
                </div>
            </div>
        </section>


        {/* VALUE PILLARS / SERVICES SECTION */}
        <section id="services" className="py-24 md:py-32 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">AI-Driven Solutions For Your Biggest Challenges</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">We tackle your four biggest operational crises head-on.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 p-8 rounded-2xl flex flex-col">
                <div className="flex-shrink-0"><PowerIcon /></div>
                <h3 className="text-xl font-bold text-white mt-6">1. Tame Your Power Costs</h3>
                <p className="text-slate-400 mt-2 flex-grow">We build AI-driven energy management systems that learn your usage and the ZESA schedule, automatically shifting work to grid power hours and optimizing generator use.</p>
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <p className="text-sm text-cyan-400 font-medium">Projected Gain</p>
                  <p className="text-white font-semibold">15-20% reduction in diesel costs.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 p-8 rounded-2xl flex flex-col">
                <div className="flex-shrink-0"><MarginIcon /></div>
                <h3 className="text-xl font-bold text-white mt-6">2. Protect Your Margins</h3>
                <p className="text-slate-400 mt-2 flex-grow">We build a Dynamic Pricing Engine that monitors real parallel market rates and input costs daily, ensuring you never sell at a loss.</p>
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <p className="text-sm text-cyan-400 font-medium">Projected Gain</p>
                  <p className="text-white font-semibold">Real-time margin protection.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 p-8 rounded-2xl flex flex-col">
                <div className="flex-shrink-0"><ForexIcon /></div>
                <h3 className="text-xl font-bold text-white mt-6">3. Guard Your Forex</h3>
                <p className="text-slate-400 mt-2 flex-grow">We use AI to scan local databases to find in-country suppliers for raw materials you currently import, reducing forex dependency and improving cash flow.</p>
                 <div className="mt-6 pt-4 border-t border-slate-800">
                  <p className="text-sm text-cyan-400 font-medium">Projected Gain</p>
                  <p className="text-white font-semibold">Reduced reliance on scarce forex.</p>
                </div>
              </div>

               <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 p-8 rounded-2xl flex flex-col">
                <div className="flex-shrink-0"><AutomationIcon /></div>
                <h3 className="text-xl font-bold text-white mt-6">4. Automate Admin</h3>
                <p className="text-slate-400 mt-2 flex-grow">We use RPA to handle repetitive tasks like filling ZIMRA forms, NSSA reports, and managing payroll data, freeing your senior staff for high-value work.</p>
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <p className="text-sm text-cyan-400 font-medium">Projected Gain</p>
                  <p className="text-white font-semibold">Hundreds of high-value hours back.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE DEMO SECTION */}
        <section id="demo" className="py-24 md:py-32">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Experience Our Solutions</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">See a live simulation of how we solve your biggest challenges. Adjust the values to match your own business.</p>
              </div>
              <InteractiveDemo />
           </div>
        </section>

        {/* HOW IT WORKS / THE PROCESS SECTION */}
        <section id="process" className="py-24 md:py-32 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our 3-Step Path to Resilience</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Our process is transparent, ROI-focused, and designed to prove our value quickly.</p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-6 h-[calc(100%-3rem)] w-px bg-slate-800 hidden md:block" aria-hidden="true"></div>
              <div className="relative space-y-16">
                
                <div className="md:grid grid-cols-2 items-center gap-12">
                    <div className="text-center md:text-right md:pr-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 border border-slate-800 rounded-full mb-4">
                            <AuditIcon />
                        </div>
                        <h3 className="text-2xl font-bold text-white">1. The Resilience Audit (14 Days)</h3>
                        <p className="mt-2 text-slate-400">We start with a fixed-price, 2-week deep dive to find the most expensive leaks. We deliver a concrete Resilience Roadmap showing the exact AI solution, the cost, and the projected monthly saving.</p>
                    </div>
                    <div className="hidden md:block"></div>
                </div>

                <div className="md:grid grid-cols-2 items-center gap-12">
                    <div className="hidden md:block"></div>
                    <div className="text-center md:text-left md:pl-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 border border-slate-800 rounded-full mb-4">
                            <PilotIcon />
                        </div>
                        <h3 className="text-2xl font-bold text-white">2. The 90-Day Pilot Project</h3>
                        <p className="mt-2 text-slate-400">We pick the one project from the Roadmap with the biggest and fastest ROI. We build and deploy it in 90 days. We prove our value.</p>
                    </div>
                </div>
                
                <div className="md:grid grid-cols-2 items-center gap-12">
                    <div className="text-center md:text-right md:pr-12">
                         <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 border border-slate-800 rounded-full mb-4">
                             <RetainerIcon />
                         </div>
                        <h3 className="text-2xl font-bold text-white">3. The Resilience Retainer</h3>
                        <p className="mt-2 text-slate-400">The market is always changing. We provide ongoing support, model tuning, and strategic advice to ensure your systems are always one step ahead of the next challenge.</p>
                    </div>
                     <div className="hidden md:block"></div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FINAL CALL-TO-ACTION SECTION */}
        <section id="cta" className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Stop Guessing. Stop Bleeding.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">The cost of inaction is selling at a loss for one more day or burning one more drum of diesel you didn't need to. Let's find out exactly how much you can save.</p>
            <div className="mt-10">
              <button onClick={() => setIsModalOpen(true)} className="inline-block bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full text-lg hover:bg-white transition-all transform hover:scale-105">
                 Book Your 14-Day Resilience Audit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} ResilientAI Zimbabwe</p>
          <p className="mt-2">
            <a href="mailto:solutions@resilientai.co.zw" className="hover:text-cyan-400 transition-colors">solutions@resilientai.co.zw</a> | <a href="tel:+2638677000123" className="hover:text-cyan-400 transition-colors">+263 8677 000 123</a>
          </p>
           <p className="mt-1">123 AI Innovation Drive, Newlands, Harare</p>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </div>
  );
};

export default App;