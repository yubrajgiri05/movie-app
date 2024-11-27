import React from "react";
import SearchBar from "./SearchBar";  // Import SearchBar component
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported globally


type NavbarProps = {
  onSearch: (query: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="navflex">
        <Link href="/">
         <div className="logoname">MovieStream</div>
        </Link>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
