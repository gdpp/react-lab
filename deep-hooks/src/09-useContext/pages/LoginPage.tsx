import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Log in</h1>
      <hr />
      <form className="flex flex-col gap-2 my-10">
        <Input type="number" placeholder="User id" />
        <Button type="submit">Login</Button>
      </form>
      <Link to="/">
        <Button variant="ghost">Back to About</Button>
      </Link>
    </div>
  );
};

export default LoginPage;
