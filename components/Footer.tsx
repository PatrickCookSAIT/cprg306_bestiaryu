// ============================================================================
// components/Footer.tsx   →   the bar across the bottom of every page
// ============================================================================
// Company details and trademark
// ----------------------------------------------------------------------------

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-stone-200 px-6 py-6 mt-10">
      <div className="max-w-2xl mx-auto text-sm text-gray-500">
        <p className="font-semibold text-gray-700">Acme Inc</p>
        <p>456 Business Ave, Calgary, AB · info@acme.example</p>
        <p className="text-xs text-gray-400 mt-1">© 2026 Acme Inc. CPRG 306 demo.</p>
      </div>
    </footer>
  );
}
