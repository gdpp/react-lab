import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">User Profile</h1>
      <hr />
      <pre className="my-2">{JSON.stringify({}, null, 2)}</pre>
      <Button variant="destructive">Log out</Button>
    </div>
  );
};

export default ProfilePage;
