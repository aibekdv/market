import React, { FC } from "react";
import { Box } from "@mui/material";
import { Footer } from "@/components/Modules";
import { Navbar } from "@/components/Modules/Navbar";

interface IBaseLayoutProps {
    children: React.ReactNode;
}

const BaseLayout: FC<IBaseLayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <Box component="main" sx={{ minHeight: "calc(100vh - 100px)" }}>{children}</Box>
            <Footer />
        </React.Fragment>
    );
};

export default BaseLayout;