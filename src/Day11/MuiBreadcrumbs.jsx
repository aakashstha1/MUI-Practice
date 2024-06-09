import { Stack, Box, Breadcrumbs, Link, Typography } from "@mui/material";
export const MuiBreadcrumbs = () => {
  return (
    <Stack spacing={4}>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color={"text.primary"}>Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb" separator="-">
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color={"text.primary"}>Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color={"text.primary"}>Shoes</Typography>
        </Breadcrumbs>
      </Box>
    </Stack>
  );
};
