import Image from "next/image";
import Link from "next/link";

export default function NavLinkItem({ link }) {
  return (
    <Link
      href={link.path}
      className="MenuItem text-center text-dark-primary hover:bg-[#354150]/10 rounded p-2"
    >
      {link.title}
    </Link>
  );
}
