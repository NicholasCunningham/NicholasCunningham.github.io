import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { css } from '@emotion/react';

const MenuBar = () => {
	return (
		<AppBar position="static" css={menuBarStyle}>
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Tech & Trek
				</Typography>
				<Link to="/" css={linkStyle}>
					<Typography variant="button" component="div">
						Home
					</Typography>
				</Link>
				<Link to="/about" css={linkStyle}>
					<Typography variant="button" component="div">
						About Me
					</Typography>
				</Link>
				<Link to="/reviews" css={linkStyle}>
					<Typography variant="button" component="div">
						Reviews
					</Typography>
				</Link>
				<Link to="/contact" css={linkStyle}>
					<Typography variant="button" component="div">
						Contact Me
					</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

const menuBarStyle = css`
  background-color: #2e3b55;
`;

const linkStyle = css`
  color: white;
  text-decoration: none;
  margin-left: 1rem;
  font-family: 'Outfit', sans-serif;
`;

export default MenuBar;
