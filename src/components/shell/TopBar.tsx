'use client';

export default function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-700 bg-neutral-800 px-4 py-2">
      <input
        type="text"
        placeholder="Search..."
        aria-label="Search"
        className="w-full max-w-xs rounded bg-neutral-700 px-2 py-1 text-sm"
      />
      <div className="ml-auto flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-neutral-600" />
      </div>
    </header>
  );
}
