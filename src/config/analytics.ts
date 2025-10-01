// Analytics & Tracking Configuration
// Ganti PIXEL_ID dengan ID Pixel Meta/Facebook Anda

export const ANALYTICS_CONFIG = {
  // Meta/Facebook Pixel ID
  // Cara mendapatkan: https://business.facebook.com/events_manager
  // Format: angka 15-16 digit
  metaPixelId: "YOUR_PIXEL_ID_HERE", // Contoh: "1234567890123456"
  
  // Enable/Disable tracking
  enabled: true,
};

// Function to initialize Meta Pixel
export const initMetaPixel = () => {
  if (!ANALYTICS_CONFIG.enabled || ANALYTICS_CONFIG.metaPixelId === "YOUR_PIXEL_ID_HERE") {
    console.log("Meta Pixel not configured. Please add your Pixel ID in src/config/analytics.ts");
    return;
  }

  // Load Meta Pixel
  (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );

  // Initialize Pixel
  (window as any).fbq('init', ANALYTICS_CONFIG.metaPixelId);
  (window as any).fbq('track', 'PageView');

  console.log("Meta Pixel initialized with ID:", ANALYTICS_CONFIG.metaPixelId);
};

// Track custom events
export const trackMetaEvent = (eventName: string, data?: any) => {
  if (!ANALYTICS_CONFIG.enabled || typeof (window as any).fbq === 'undefined') {
    return;
  }
  
  (window as any).fbq('track', eventName, data);
};
