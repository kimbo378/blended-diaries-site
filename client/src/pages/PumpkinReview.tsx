import { useEffect } from "react";

export default function PumpkinReview() {
  useEffect(() => {
    const ASIN = "B0DLPH9RFL";
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
    const cc = /-([A-Z]{2})$/.exec(navigator.language || "en-US")?.[1] || "US";
    const domain = map[cc] || "amazon.com";
    window.location.replace(`https://${domain}/review/create-review?asin=${ASIN}`);
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen">
      <p className="text-xl text-gray-700">Redirecting to your Amazon review page...</p>
    </main>
  );
}
