export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} MusiConnect. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-muted">
          <a href="#">About</a>
          <a href="#">Artists</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>
    </footer>
  );
}