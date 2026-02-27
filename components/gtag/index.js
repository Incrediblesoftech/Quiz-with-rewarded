// gtag.js

import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-7D69KCQT4J"; // Replace with your GA4 Measurement ID

export function GA4Initializer() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Assuming pageview is not directly available
      ReactGA.send({ hitType: "pageview", page: url });
    };

    // Initialize GA4
    ReactGA.initialize(GA_MEASUREMENT_ID);

    // Initial page load
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // Listen for route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Remove event listener on component unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
}
