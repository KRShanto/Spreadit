import Link from "next/link";
import Search from "./Search";
import { buttonVariants } from "../ui/Button";
import Logo from "../ui/Logo";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-20 flex h-fit justify-between border-b border-slate-800 bg-slate-950 px-20 py-3">
      <Link href="/">
        <Logo />
      </Link>

      <Search />

      <Link href="/auth/sign-in" className={buttonVariants()}>
        Sign In
      </Link>
    </nav>
  );
}
