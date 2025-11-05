export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-white/60 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>AutonomiQ Finance</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Status</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
        <div>© {new Date().getFullYear()} AutonomiQ, Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}
