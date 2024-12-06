import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ayush
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile Nav */}
        <div className="xl:hidden"> Mobile No. </div>
      </div>
    </header>
  );
};

export default Header;
