import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DISCLAIMER_ACCEPTED_KEY = 'anil_anand_disclaimer_session_v2';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = sessionStorage.getItem(DISCLAIMER_ACCEPTED_KEY);
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem(DISCLAIMER_ACCEPTED_KEY, 'true');
    setIsOpen(false);
  };

  const handleExit = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-black/60"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card max-w-2xl w-full rounded-lg shadow-elevated p-8 md:p-12"
          >
            {/* Gold accent line */}
            <div className="divider-gold mx-auto mb-8" />
            
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-6 tracking-heading">
              Disclaimer
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-elegant text-sm md:text-base">
              <p>
                As per the rules of the Bar Council of India, law firms are not permitted to solicit 
                work or advertise. By accessing this website, the user acknowledges that the information 
                provided herein is for informational purposes only and does not constitute legal advice.
              </p>
              <p>
                No lawyer-client relationship is created by accessing this website. The user confirms 
                that they are accessing this website on their own initiative.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <button
                onClick={handleAccept}
                className="btn-primary rounded-sm min-w-[140px]"
              >
                I Agree
              </button>
              <button
                onClick={handleExit}
                className="btn-outline rounded-sm min-w-[140px]"
              >
                Exit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
