import { navLinks } from "@/constants/navLinks";

export default function Navbar() {
  return (
    <nav className="wrapper header__nav">
      <div className="flex items-center justify-between flex-col gap-4 md:flex-row py-4">
        <h1 className="text-2xl font-bold font-serif">
          <a href="/">Flower</a>
        </h1>
        <ul className="flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="inline-block p-2">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
