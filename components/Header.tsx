import Link from "next/link";
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <ul className="bg-cyan-900 text-white flex justify-end gap-4 text-xl px-4 fixed top-0 w-full pt-3 pb-3">
      <Link href="/">
        <FaHome className="inline-flex mb-1"/>Home
      </Link>
      <Link href="/login">
        <li>Login</li>
      </Link>
      <Link href="/signup">
        <li>Signup</li>
      </Link>
      
      
    </ul>
  );
}

export default Header;