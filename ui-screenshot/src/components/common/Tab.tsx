"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface TabProps extends PropsWithChildren {
  link: string;
}

export const Tab = ({ link, children }: TabProps) => {
  const pathName = usePathname();
  const isActive = pathName === link;

  return (
    <li
      className="inline-block border-t ml-[3px]"
      style={
        isActive
          ? { fontWeight: "bold", borderColor: "#000" }
          : { borderColor: "#ccc" }
      }
    >
      <Link href={link} className="px-[15px] py-[10px] block text-[#158cba]">
        {children}
      </Link>
    </li>
  );
};
