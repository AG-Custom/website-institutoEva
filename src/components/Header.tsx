"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isProtocolos = pathname?.startsWith("/protocolos");

  return (
    <header className="w-full sticky top-0 z-40 glass border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 select-none">
          <Image src="/assets/logo.svg" alt="Instituto EVA" width={90} height={30} priority />
        </Link>
        <nav className="hidden sm:flex items-center gap-10 text-lg font-semibold text-gray-800">
          <Link href="/#agendamento" className="hover:text-black">Agendamento</Link>
          <Link href="/protocolos" className={`hover:text-black ${isProtocolos ? "text-black" : ""}`}>Protocolos</Link>
          <Link href="/#contato" className="hover:text-black">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
