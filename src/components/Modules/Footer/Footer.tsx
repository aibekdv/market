import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#1c1d1f",
        px:3,
        py:2
      }}
    >
      <Box component="img" src={"logo"} alt="logo" sx={{ maxWidth: 92 }} />
      <Typography sx={{ color: "white" }}>
        &copy; {new Date().getFullYear()} Udemy, Inc.
      </Typography>
    </Box>
  );
};

export default Footer;