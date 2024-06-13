import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row" p={3}>
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={100} color="error">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={100} max={999} color="success">
        <MailIcon color="action" />
      </Badge>
      <Badge variant="dot" color="primary">
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
};
