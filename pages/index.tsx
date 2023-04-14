import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#002244',
      contrastText: '#C0C0C0',
    }
  },
  typography: {
    fontSize: 17
  }
});

export default function MyComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={3}>
          <Box
            sx={{
              height: "100vh",
              backgroundColor: "primary.main",
              position: "relative",
              borderRight: "0.5px solid #404040",
            }}
          >
            <Box sx={{ position: "absolute", top: "1rem", left: "0.45rem" }}>
              <IconButton
                sx={{
                  color: "primary.contrastText",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Box sx={{ height: "3rem" }} />
            <List>
              {["Item 1", "Item 2", "Item 3"].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  sx={{
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "primary.light",
                    },
                  }}
                >
                  <ListItemText primary={text} sx={{ color: "primary.contrastText" }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "primary.main",
              justifyContent: "center",
              overflow: "auto",
              padding: "1rem",
            }}
          >
            <TextField
              multiline
              fullWidth
              variant="standard"
              InputProps={{
                style: {
                  color: theme.palette.primary.contrastText
                },
                disableUnderline: true,
              }}
              sx={{
                backgroundColor: "primary.main",
                padding: "0.5rem",
                minHeight: "100%",
                overflow: "auto",
                color: "primary.contrastText",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
