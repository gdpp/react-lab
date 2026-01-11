import Link from "next/link";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Login Main</Link>
        </li>
        <li>
          <Link href="/login/user">Login User</Link>
        </li>
        <li>
          <Link href="/login/admin">Login Admin</Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default layout;
