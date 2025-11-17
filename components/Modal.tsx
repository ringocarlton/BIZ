import React, { useState, FormEvent, useEffect } from 'react';
import { CloseIcon, SpinnerIcon } from './icons/FeatureIcons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Reset form state when modal is closed
    if (!isOpen) {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(false);
      }, 300); // Wait for closing animation
    }
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 transform transition-all">
        <div className="p-8">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
          
          {isSubmitted ? (
            <div className="text-center">
              <h2 id="modal-title" className="text-2xl font-bold text-white">Thank You!</h2>
              <p className="mt-4 text-slate-400">Your audit request has been sent. We will be in touch within 24 hours.</p>
              <button
                onClick={onClose}
                className="mt-6 w-full bg-cyan-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 id="modal-title" className="text-2xl font-bold text-white">Book Your 14-Day Resilience Audit</h2>
              <p className="mt-2 text-slate-400">Take the first step towards operational resilience. Fill out the form below.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                  <input type="text" id="name" required className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
                </div>
                 <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300">Company Name</label>
                  <input type="text" id="company" required className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                  <input type="email" id="email" required className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
                </div>
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-slate-300">Your Biggest Challenge (Optional)</label>
                  <textarea id="challenge" rows={3} className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                </div>
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center bg-cyan-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors disabled:bg-cyan-700 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <SpinnerIcon /> : 'Submit Request'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
