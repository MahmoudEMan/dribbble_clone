"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLinks } from "@/constant";
import AuthProviders from "./AuthProviders";
import Button from "./UI/Button";
import { signOut, useSession } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";
import { SessionInterface } from "@/common.types";

const Navbar = () => {
  const { data: session }: { data: SessionInterface } = useSession();
  console.log("zed ~ file: Navbar.tsx:11 ~ Navbar ~ session:", session);

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <div className="flex gap-4">
              <Link href="/create-project">
                <Button title="Share work" />
              </Link>
            </div>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
