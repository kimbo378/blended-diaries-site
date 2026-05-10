import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.trysoro.com/api/embed/be21ebc7-cdfe-4148-aa2f-bf847f0671e6";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-screen bg-[url('/attached_assets/linedpaper.png')] bg-repeat">
      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-handwritten text-diary-teal text-lg mb-3">
            ✏️ Straight from the diary
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#2B2B2B' }}>
            The Blog
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#6B6B6B' }}>
            Honest stories, chaotic moments and the occasional survival tip — from blended family life to the pages that inspired the books.
          </p>
          <div className="mt-6 max-w-xs mx-auto border-t border-dashed border-gray-300" />
        </div>

        {/* Soro embed — articles publish directly here */}
        <div id="soro-blog" />

      </div>
    </section>
  );
}
