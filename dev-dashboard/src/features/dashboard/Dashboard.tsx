import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold">Repos</h2>
          <p>24</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold">Stars</h2>
          <p>320</p>
        </CardContent>
      </Card>
    </div>
  );
}
