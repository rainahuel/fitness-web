// src/analytics.ts

export const initGoogleAnalytics = () => {
    const measurementId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
  
    if (!measurementId) {
      console.error("Google Analytics ID not found in environment variables.");
      return;
    }
  
    // Insertar el script de Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);
  
    // Insertar configuración inicial de gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(script2);
  };
  
  export const sendAnalyticsEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, eventParams || {});
    } else {
      console.warn('gtag is not available yet.');
    }
  };
  