// ============================================================================
// components/Navbar.tsx   →   the bar across the top of every page
// ============================================================================
// Display's page title and links to Discover Animals and Plan Your Visit
// ----------------------------------------------------------------------------

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-lg font-bold text-gray-900">Acme Inc · Staff Directory</h1>
        <p className="text-xs text-gray-400">CPRG 306 · Week 10 · Supabase Databases</p>
      </div>
    </header>
  );
}
