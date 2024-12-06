import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        {/* logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ayush
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop Nav */}
        <div className="hidden xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
