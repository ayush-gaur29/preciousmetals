import React, { createContext, useContext, useState, useRef, useCallback } from 'react';
import { Check } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setIsVisible(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 3600);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div id="toast" role="status" aria-live="polite" className={isVisible ? 'show' : ''}>
        <div className="flex items-center gap-3 rounded-full bg-jet text-white pl-3 pr-5 py-3 border border-white/10 text-sm shadow-xl">
          <span className="w-7 h-7 rounded-full bg-rose grid place-items-center shrink-0">
            <Check className="w-4 h-4 text-white" />
          </span>
          <span id="toast-msg">{toastMessage}</span>
        </div>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
