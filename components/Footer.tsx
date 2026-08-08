// ============================================================================
// components/Footer.tsx   →   the bar across the bottom of every page
// ============================================================================
// Company details and trademark
// ----------------------------------------------------------------------------

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-stone-200 px-6 py-6">
      <div className="max-w-7xl text-sm text-gray-500">
        <p className="pl-10">
          &copy; {new Date().getFullYear()} BestiaryU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
