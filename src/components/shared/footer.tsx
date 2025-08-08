export function AppFooter() {
  return (
    <footer className="relative border-t py-6 dark:border-zinc-900">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="flex flex-wrap justify-between gap-4">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">© Emanuel Cisterna - {new Date().getFullYear()}</span>
          <a href="#" target="_top" className="text-sm text-gray-700 dark:text-white">_top</a>
        </div>
      </div>
    </footer>
  );
}
