export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-emerald-700">
        yourDrive
      </h1>

      {/* Urdu (default public language) */}
      <p className="text-xl leading-relaxed">
        بنوں میں بائیک اور رکشہ سواری — جلد آ رہا ہے
      </p>

      {/* English line for now; bilingual content & toggle come in later modules */}
      <p className="text-sm text-gray-500">
        Bike &amp; rickshaw rides for Bannu — coming soon. Placeholder page
        (Module 1).
      </p>
    </main>
  );
}
