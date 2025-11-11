import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-gray-700">
        <p className="leading-none">
          © {year} Powered By <span className="font-semibold">AG Custom</span>. Todos os Direitos Reservados
        </p>
        <div className="flex items-center">
          <Image src="/assets/ag_footer.svg" alt="AG Custom" width={43} height={40} priority />
        </div>
      </div>
    </footer>
  );
}
