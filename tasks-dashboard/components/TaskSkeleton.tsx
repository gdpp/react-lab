import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

export default function TaskSkeleton() {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <Grid key={i} size={{ xs: 12, sm: 6, lg: 4 }}>
          <Card>
            <CardContent>
              <Box display="flex" gap={1} mb={1}>
                <Skeleton variant="rounded" width={80} height={24} />
                <Skeleton variant="rounded" width={60} height={24} />
              </Box>
              <Skeleton
                variant="text"
                sx={{ fontSize: "1.1rem" }}
                width="80%"
              />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="60%" />
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Skeleton variant="text" width={100} />
                <Box display="flex" gap={1}>
                  <Skeleton variant="circular" width={28} height={28} />
                  <Skeleton variant="circular" width={28} height={28} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
