import { styled, Grid, Button, Box } from "@mui/material";

const sxStyle = {
  fontSize: "2rem",
  backgroundColor: "#f5f5dc",
  width: 200,
  height: 100,
  border: "10px solid orange",
};

const StyledBox = styled(Box)(({ theme }) => ({
  fontSize: "2rem",
  backgroundColor: "#f5f5dc",
  width: 200,
  height: 100,
  border: "10px solid pink",
  color: theme.palette.secondary.main,
}));

const inlineStyle = {
  fontSize: "2rem",
  backgroundColor: "#f5f5dc",
  width: 200,
  height: 100,
  border: "10px solid yellow",
};
function MuiStyle() {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Button sx={sxStyle}>sxStyle</Button>
      </Grid>
      <Grid item>
        <StyledBox>StyledBox</StyledBox>
      </Grid>
      <Grid item>
        <Box style={inlineStyle}>inlineStyle</Box>
      </Grid>
    </Grid>
  );
}

export default MuiStyle;
