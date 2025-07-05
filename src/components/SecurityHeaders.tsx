import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // Add security headers via meta tags
    const securityHeaders = [
      {
        httpEquiv: 'X-Content-Type-Options',
        content: 'nosniff'
      },
      {
        httpEquiv: 'X-Frame-Options',
        content: 'DENY'
      },
      {
        httpEquiv: 'X-XSS-Protection',
        content: '1; mode=block'
      },
      {
        httpEquiv: 'Referrer-Policy',
        content: 'strict-origin-when-cross-origin'
      },
      {
        httpEquiv: 'Permissions-Policy',
        content: 'camera=(), microphone=(), geolocation=(), payment=()'
      }
    ];

    securityHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.httpEquiv;
      meta.content = header.content;
      document.head.appendChild(meta);
    });

    // Prevent clickjacking
    if (window.top !== window.self) {
      window.top!.location = window.self.location;
    }

    // Clear console periodically
    const clearConsole = () => {
      console.clear();
      console.log('%c⚠️ SECURITY WARNING', 'color: red; font-size: 24px; font-weight: bold;');
      console.log('%cThis website is protected. Unauthorized access attempts are logged.', 'color: orange; font-size: 14px;');
    };

    const intervalId = setInterval(clearConsole, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return null;
};

export default SecurityHeaders;