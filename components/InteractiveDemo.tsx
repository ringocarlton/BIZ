import React, { useState, useEffect } from 'react';
import { SpinnerIcon, BarChartIcon } from './icons/FeatureIcons';

type DemoTab = 'power' | 'margin' | 'forex' | 'admin';

const InteractiveDemo: React.FC = () => {
    const [activeTab, setActiveTab] = useState<DemoTab>('power');

    // State for Power Demo
    const [dieselUsage, setDieselUsage] = useState(150);
    const [dieselCost, setDieselCost] = useState(1.75);
    const [powerResult, setPowerResult] = useState<{ current: number; optimized: number; savings: number } | null>(null);
    const [isPowerLoading, setIsPowerLoading] = useState(false);

    // State for Margin Demo
    const [productCost, setProductCost] = useState(500000);
    const [sellingPrice, setSellingPrice] = useState(650000);
    const [marketRate, setMarketRate] = useState(25000);
    const [marginResult, setMarginResult] = useState<{ recommendedPrice: number; marginAtRisk: number } | null>(null);
    const [isMarginLoading, setIsMarginLoading] = useState(false);

    // State for Forex Demo
    const [importComponent, setImportComponent] = useState('Packaging Material');
    const [importCost, setImportCost] = useState(5000);
    const [forexResult, setForexResult] = useState<{ savings: number; newLeadTime: string; supplier: any } | null>(null);
    const [isForexLoading, setIsForexLoading] = useState(false);

    // State for Admin Demo
    const [adminHours, setAdminHours] = useState(10);
    const [hourlyRate, setHourlyRate] = useState(25);
    const [adminResult, setAdminResult] = useState<{ timeReclaimed: number; value: number } | null>(null);
    const [isAdminLoading, setIsAdminLoading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setMarketRate(prev => prev + Math.floor(Math.random() * 200 - 100));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handlePowerOptimize = () => {
        setIsPowerLoading(true);
        setPowerResult(null);
        setTimeout(() => {
            const current = dieselUsage * dieselCost * 30;
            const optimized = current * 0.82; // 18% savings
            setPowerResult({ current, optimized, savings: current - optimized });
            setIsPowerLoading(false);
        }, 1500);
    };

    const handleMarginCalculate = () => {
        setIsMarginLoading(true);
        setMarginResult(null);
        setTimeout(() => {
            const targetUsdMargin = (productCost / 20000) * 0.20; // Assuming base rate of 20000 and 20% margin target
            const recommendedPrice = (productCost / marketRate + targetUsdMargin) * marketRate * 1.15; // with VAT
            const marginAtRisk = recommendedPrice - sellingPrice;
            setMarginResult({ recommendedPrice, marginAtRisk });
            setIsMarginLoading(false);
        }, 1500);
    };
    
    const handleForexFind = () => {
        setIsForexLoading(true);
        setForexResult(null);
        setTimeout(() => {
            const savings = importCost * 0.35; // 35% forex saving
            setForexResult({
                savings,
                newLeadTime: '5 days',
                supplier: { name: 'Harare Packaging Solutions', score: '97%', cost: importCost * 0.65 }
            });
            setIsForexLoading(false);
        }, 1500);
    };
    
    const handleAdminAutomate = () => {
        setIsAdminLoading(true);
        setAdminResult(null);
        setTimeout(() => {
            const timeReclaimed = adminHours * 52;
            const value = timeReclaimed * hourlyRate;
            setAdminResult({ timeReclaimed, value });
            setIsAdminLoading(false);
        }, 1500);
    };

    const TabButton = ({ tabId, children }: { tabId: DemoTab; children: React.ReactNode }) => (
        <button
            onClick={() => setActiveTab(tabId)}
            className={`px-4 py-3 text-sm md:text-base font-semibold transition-colors rounded-t-lg ${
                activeTab === tabId ? 'bg-slate-800 text-white border-b-2 border-cyan-400' : 'text-slate-400 hover:bg-slate-800/50'
            }`}
        >
            {children}
        </button>
    );
    
    const formatCurrency = (value: number, currency = 'USD') => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    };

     const formatNumber = (value: number) => {
        return new Intl.NumberFormat('en-US').format(value);
    };


    return (
        <div className="bg-slate-950/50 border border-slate-700 rounded-lg overflow-hidden">
            <div className="flex justify-center border-b border-slate-700">
                <div className="flex space-x-1 md:space-x-2 p-1">
                    <TabButton tabId="power">Power Cost</TabButton>
                    <TabButton tabId="margin">Margin Protection</TabButton>
                    <TabButton tabId="forex">Forex & Cash Flow</TabButton>
                    <TabButton tabId="admin">Admin Automation</TabButton>
                </div>
            </div>

            <div className="p-6 md:p-8">
                {activeTab === 'power' && (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Tame Your Power Costs</h3>
                            <p className="mt-2 text-slate-400">See how our AI optimizes your generator usage against the ZESA schedule to slash your diesel bill.</p>
                            <div className="mt-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300">Daily Diesel Usage: <span className="font-bold text-white">{dieselUsage} L</span></label>
                                    <input type="range" min="50" max="500" value={dieselUsage} onChange={(e) => setDieselUsage(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                                </div>
                                <div>
                                    <label htmlFor="dieselCost" className="block text-sm font-medium text-slate-300">Cost per Litre ($)</label>
                                    <input type="number" step="0.01" id="dieselCost" value={dieselCost} onChange={(e) => setDieselCost(Number(e.target.value))} className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
                                </div>
                            </div>
                            <button onClick={handlePowerOptimize} disabled={isPowerLoading} className="mt-6 w-full flex justify-center items-center bg-cyan-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors disabled:bg-cyan-700">
                                {isPowerLoading ? <SpinnerIcon /> : 'Optimize Power Usage'}
                            </button>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg">
                            <h4 className="font-bold text-white flex items-center gap-2"><BarChartIcon className="h-5 w-5 text-cyan-400"/> Result</h4>
                            {isPowerLoading && <div className="flex justify-center items-center h-48"><SpinnerIcon /></div>}
                            {powerResult ? (
                                <div className="mt-4 space-y-4">
                                    <div>
                                        <p className="text-sm text-slate-400">Current Monthly Cost</p>
                                        <p className="text-2xl font-bold text-red-400">{formatCurrency(powerResult.current)}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">AI-Optimized Monthly Cost</p>
                                        <p className="text-2xl font-bold text-green-400">{formatCurrency(powerResult.optimized)}</p>
                                    </div>
                                    <div className="pt-2 border-t border-slate-700">
                                         <p className="text-sm text-slate-400">Projected Monthly Savings</p>
                                        <p className="text-3xl font-extrabold text-cyan-400">{formatCurrency(powerResult.savings)}</p>
                                    </div>
                                </div>
                            ) : !isPowerLoading && <p className="mt-4 text-slate-500 text-center h-48 flex items-center justify-center">Enter your details and click "Optimize" to see your potential savings.</p>}
                        </div>
                    </div>
                )}
                {activeTab === 'margin' && (
                     <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Protect Your Margins</h3>
                             <p className="mt-2 text-slate-400">Our Dynamic Pricing Engine adjusts to real-time market volatility, ensuring you never sell at a loss.</p>
                             <div className="mt-6 space-y-4">
                                <div>
                                    <label htmlFor="productCost" className="block text-sm font-medium text-slate-300">Product Cost (ZWL)</label>
                                    <input type="number" id="productCost" value={productCost} onChange={(e) => setProductCost(Number(e.target.value))} className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
                                </div>
                                <div>
                                    <label htmlFor="sellingPrice" className="block text-sm font-medium text-slate-300">Current Selling Price (ZWL)</label>
                                    <input type="number" id="sellingPrice" value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))} className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
                                </div>
                             </div>
                             <button onClick={handleMarginCalculate} disabled={isMarginLoading} className="mt-6 w-full flex justify-center items-center bg-cyan-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors disabled:bg-cyan-700">
                                {isMarginLoading ? <SpinnerIcon /> : 'Calculate Recommended Price'}
                            </button>
                        </div>
                         <div className="bg-slate-800 p-6 rounded-lg">
                             <h4 className="font-bold text-white">Live Market Analysis</h4>
                            <div className="mt-4 p-3 text-center bg-slate-900 rounded-md">
                                <p className="text-sm text-slate-400">Live Parallel Market Rate</p>
                                <p className="text-xl font-bold text-amber-300 animate-pulse">$1 : ZWL {formatNumber(marketRate)}</p>
                            </div>
                            {isMarginLoading && <div className="flex justify-center items-center h-32"><SpinnerIcon /></div>}
                            {marginResult ? (
                                <div className="mt-4 space-y-4">
                                    <div>
                                        <p className="text-sm text-slate-400">AI Recommended Minimum Price</p>
                                        <p className="text-2xl font-bold text-green-400">ZWL {formatNumber(Math.round(marginResult.recommendedPrice))}</p>
                                    </div>
                                    <div className="pt-2 border-t border-slate-700">
                                         <p className="text-sm text-slate-400">Margin At Risk (per unit)</p>
                                        <p className={`text-3xl font-extrabold ${marginResult.marginAtRisk > 0 ? 'text-red-500' : 'text-cyan-400'}`}>ZWL {formatNumber(Math.round(marginResult.marginAtRisk))}</p>
                                    </div>
                                </div>
                             ) : !isMarginLoading && <p className="mt-4 text-slate-500 text-center h-32 flex items-center justify-center">Click "Calculate" to protect your profit margin.</p>}
                        </div>
                     </div>
                )}
                 {activeTab === 'forex' && (
                     <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Guard Your Forex & Cash Flow</h3>
                             <p className="mt-2 text-slate-400">Reduce forex dependency by letting our AI scan local databases for in-country suppliers for materials you currently import.</p>
                             <div className="mt-6 space-y-4">
                                <div>
                                    <label htmlFor="importComponent" className="block text-sm font-medium text-slate-300">Select an Imported Component</label>
                                    <select id="importComponent" value={importComponent} onChange={e => setImportComponent(e.target.value)} className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500">
                                        <option>Packaging Material</option>
                                        <option>Machine Spare Part</option>
                                        <option>Chemical Additive</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="importCost" className="block text-sm font-medium text-slate-300">Monthly Import Cost ($)</label>
                                    <input type="number" id="importCost" value={importCost} onChange={(e) => setImportCost(Number(e.target.value))} className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
                                </div>
                             </div>
                             <button onClick={handleForexFind} disabled={isForexLoading} className="mt-6 w-full flex justify-center items-center bg-cyan-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors disabled:bg-cyan-700">
                                {isForexLoading ? <SpinnerIcon /> : 'Find Local Alternatives'}
                            </button>
                        </div>
                         <div className="bg-slate-800 p-6 rounded-lg">
                             <h4 className="font-bold text-white">AI Sourcing Results</h4>
                            {isForexLoading && <div className="flex justify-center items-center h-48"><SpinnerIcon /></div>}
                            {forexResult ? (
                                <div className="mt-4 space-y-4">
                                    <div className="bg-slate-900 p-4 rounded-lg">
                                        <p className="font-bold text-white">Top Match: {forexResult.supplier.name}</p>
                                        <p className="text-sm text-slate-400">Compatibility Score: <span className="text-green-400 font-semibold">{forexResult.supplier.score}</span></p>
                                        <p className="text-sm text-slate-400">Est. Local Cost: <span className="text-white font-semibold">{formatCurrency(forexResult.supplier.cost)}</span></p>
                                    </div>
                                    <div>
                                         <p className="text-sm text-slate-400">Reduced Lead Time</p>
                                        <p className="text-2xl font-bold text-white">{forexResult.newLeadTime}</p>
                                    </div>
                                    <div className="pt-2 border-t border-slate-700">
                                         <p className="text-sm text-slate-400">Potential Monthly Forex Savings</p>
                                        <p className="text-3xl font-extrabold text-cyan-400">{formatCurrency(forexResult.savings)}</p>
                                    </div>
                                </div>
                             ) : !isForexLoading && <p className="mt-4 text-slate-500 text-center h-48 flex items-center justify-center">Select a component to find local suppliers and see potential forex savings.</p>}
                        </div>
                     </div>
                )}
                 {activeTab === 'admin' && (
                     <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Automate Your Admin Burden</h3>
                             <p className="mt-2 text-slate-400">Calculate the value of time reclaimed by automating repetitive, manual tasks for your senior staff.</p>
                             <div className="mt-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300">Hours Spent per Week on Task: <span className="font-bold text-white">{adminHours} hrs</span></label>
                                    <input type="range" min="1" max="40" value={adminHours} onChange={(e) => setAdminHours(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                                </div>
                                 <div>
                                    <label htmlFor="hourlyRate" className="block text-sm font-medium text-slate-300">Senior Manager's Hourly Rate ($)</label>
                                    <input type="number" id="hourlyRate" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
                                </div>
                             </div>
                             <button onClick={handleAdminAutomate} disabled={isAdminLoading} className="mt-6 w-full flex justify-center items-center bg-cyan-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors disabled:bg-cyan-700">
                                {isAdminLoading ? <SpinnerIcon /> : 'Automate This Task'}
                            </button>
                        </div>
                         <div className="bg-slate-800 p-6 rounded-lg">
                             <h4 className="font-bold text-white">Annual Impact of Automation</h4>
                            {isAdminLoading && <div className="flex justify-center items-center h-48"><SpinnerIcon /></div>}
                            {adminResult ? (
                                 <div className="mt-4 space-y-4">
                                    <div>
                                        <p className="text-sm text-slate-400">Time Reclaimed per Year</p>
                                        <p className="text-2xl font-bold text-white">{formatNumber(adminResult.timeReclaimed)} hours</p>
                                        <p className="text-slate-400 text-sm">Equivalent to ~{(adminResult.timeReclaimed / 40).toFixed(0)} full work weeks.</p>
                                    </div>
                                    <div className="pt-2 border-t border-slate-700">
                                        <p className="text-sm text-slate-400">Value of Reclaimed Time (Annual)</p>
                                        <p className="text-3xl font-extrabold text-cyan-400">{formatCurrency(adminResult.value)}</p>
                                    </div>
                                </div>
                             ) : !isAdminLoading && <p className="mt-4 text-slate-500 text-center h-48 flex items-center justify-center">Adjust the sliders to see the true cost of manual admin work.</p>}
                        </div>
                     </div>
                )}
            </div>
        </div>
    );
};

export default InteractiveDemo;
