export default function Footer() {
  return (
    <footer className="w-full bg-[#080a22]/90 backdrop-blur-md border-t border-[#31335b] py-8 px-6 sm:px-12 lg:px-16 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p>© 2026 Asliya Abdul Raman</p>

        {/* Tagline */}
        <p className="font-space-grotesk text-gray-300 tracking-wide">
          built with curiosity & caffeine
        </p>
      </div>
    </footer>
  );
}