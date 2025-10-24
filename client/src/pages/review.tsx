import { useEffect } from "react";

export default function ReviewRedirect() {
  useEffect(() => {
    const ASIN = "B0FX1B9RWP";
    const map: Record<string, string> = {
      AE: "amazon.ae",
      AU: "amazon.com.au",
      BR: "amazon.com.br",
      CA: "amazon.ca",
      DE: "amazon.de",
      EG: "amazon.eg",
      ES: "amazon.es",
      FR: "amazon.fr",
      GB: "amazon.co.uk",
      IE: "amazon.co.uk",
      IN: "amazon.in",
      IT: "amazon.it",
      JP: "amazon.co.jp",
      MX: "amazon.com.mx",
      NL: "amazon.nl",
      PL: "amazon.pl",
      SA: "amazon.sa",
      SE: "amazon.se",
      SG: "amazon.sg",
      TR: "amazon.com.tr",
      US: "amazon.com"
    };
    
    const lang = navigator.language || "en-US";
    const cc = /-([A-Z]{2})$/.exec(lang)?.[1] || "US";
    const domain = map[cc] || "amazon.com";
    const url = `https://${domain}/review/create-review?asin=${ASIN}`;
    
    window.location.replace(url);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <p className="text-xl text-gray-700">Redirecting you to your local Amazon review page...</p>
    </main>
  );
}
