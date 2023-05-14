import React from "react";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const pageContainer = css`
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  	height: calc(100vh - 64px);
`;

const headingContainer = css`
  	margin-bottom: 20px;
  	font-family: 'Outfit', sans-serif;
`;

const HomePage = () => {
    return (
        <Box css={pageContainer}>
            <Box css={headingContainer}>
                <Typography variant="h3">Hi, I'm Nick</Typography>
            </Box>
            <Typography variant="body1">
                Welcome to my website! I'm a tech enthusiast and avid traveler. Check
                back soon for updates on my latest adventures.
            </Typography>
        </Box>
    );
};

export default HomePage;
