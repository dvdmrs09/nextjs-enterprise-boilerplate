import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="https://dmcomputerservices.net/favicon.ico">
        </Link>
        <Link href="/contact/contact">
          
        </Link>
      </div>
      <div>
      <Link href="/law/law">
          
          </Link>
       
      </div>
      <div>  <Link href="/privacy/privacy">
          
          </Link>
       </div>
       <div>  <Link href="/x-scan/x-scan">
          
          </Link>
       </div>
       <div>  <Link href="/turbo-k/turbo-k">
          
          </Link>
       </div>
       <div>  <Link href="/support/support">
          
          </Link>
       </div>
    </nav>
  );
};

export default Nav;