import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple, green, pink } from "@mui/material/colors";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const MuiAvatar = () => {
  return (
    <Stack direction={"column"} spacing={3}>
      <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <PageviewIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: green[500] }}>
          <AssignmentIcon />
        </Avatar>
      </Stack>
    </Stack>
  );
};
