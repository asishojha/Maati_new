import * as React from "react";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import logox from "../assets/logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
const pages = ["Products", "Pricing", "Blog"];
export default function Topbar() {
  return (
    <>
      <AppBar color="transparent" position="static" display="flex">
        <Toolbar variant="regular">
          <Box component="img" sx={{ height: 74 }} alt="Logo" src={logox} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography textAlign="center" variant="h6">
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Box>
          <Stack
            justifyContent="right"
            alignItems="right"
            spacing={2}
            direction="row"
          >
            <Button variant="contained">
              <FacebookIcon />
            </Button>
            <Button variant="contained">
              <InstagramIcon />
            </Button>
            <Button variant="contained">
              <LinkedInIcon />
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
