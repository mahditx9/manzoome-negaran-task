import { menuLinks } from "@/constants/data";
import Image from "next/image";
import NavLinkItem from "./NavLinkItem";
import Button from "../Button/Button";
import Logo from "@/app/assets/images/Logo.png";

export default function Header({ className }) {
  return (
    <header className="pt-[25px] px-[30px]  mx-auto flex items-center justify-between rounded w-[1112px] mx-auto">
      <div className="relative h-[40px] w-[63px]">
        <Image
          src={Logo}
          alt="main-logo"
          className="object-fill aspect-square"
        />
      </div>
      <nav className="flex items-center gap-[15px] flex-1 justify-center">
        {menuLinks.map((link, index) => (
          <NavLinkItem key={index + 1} link={link} />
        ))}
      </nav>
      <Button className="text-center py-[8px] px-[20px] rounded font-normal text-[12px] leading-[21px] tracking-wide bg-dark-primary/10 hover:bg-dark-primary hover:text-yellow-primary transition-all ease-linear duration-200">
        ورود به پنل کاربری
      </Button>
    </header>
  );
}
