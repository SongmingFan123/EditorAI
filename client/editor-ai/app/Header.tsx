
import Link from "next/link";

const Header = () => (
    <div>
      <ul>
        <li>
          <Link href={"../homepage"}>Go to Homepage</Link>
        </li>
        <li>
          <Link href={"../texteditor"}>Go to Text Editor</Link>
        </li>
        <li>
          <Link href={"../login"}>Go to Login</Link>
        </li>
      </ul>
    </div>
    
);

export default Header