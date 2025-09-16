export default function About() {
  return (
    <section className="py-12 bg-diary-cream">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-handwritten text-center mb-8 text-diary-charcoal">
          Random Author Facts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Fact 1 */}
          <div className="border-2 border-diary-yellow rounded-lg p-4 font-handwritten text-diary-charcoal">
            ☕ Daily tea consumption: Approximately 7 cups (and counting)
          </div>

          {/* Fact 2 */}
          <div className="border-2 border-diary-red rounded-lg p-4 font-handwritten text-diary-charcoal">
            Calm in a medical crisis, instantly stressed when siblings start
            screaming 'he started it'
          </div>

          {/* Fact 3 */}
          <div className="border-2 border-diary-purple rounded-lg p-4 font-handwritten text-diary-charcoal">
            📚 Writes books about chaos while living in delightful chaos
          </div>

          {/* Fact 4 */}
          <div className="border-2 border-diary-yellow rounded-lg p-4 font-handwritten text-diary-charcoal">
            🐕 Pumpkin's official human servant and treat dispenser
          </div>
        </div>
      </div>
    </section>
  );
}