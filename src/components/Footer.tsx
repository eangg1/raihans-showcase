export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-100 dark:bg-gray-900 dark:border-gray-800 mt-0">
      <div className="max-w-6xl mx-auto py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {year} eann.js — all rights reserved
      </div>
    </footer>
  );
}
