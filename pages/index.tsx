import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { alpha, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import zIndex from "@mui/material/styles/zIndex";

const theme = createTheme({
  palette: {
    primary: {
      main: "#002244",
      contrastText: "#C0C0C0",
    },
  },
  typography: {
    fontSize: 17,
  },
});

export default function MyComponent() {
  const [items, setItems] = useState(["Item 3", "Item 2", "Item 1"]);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollContainerRef = useRef<null | HTMLDivElement>(null);
  const textBoxRef = useRef<null | HTMLDivElement>(null);
  const scrollTimerRef = useRef<null | NodeJS.Timeout>(null);

  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([newItem, ...items]);
  };

  useEffect(() => {
    if (textBoxRef.current) {
      textBoxRef.current.focus()
    }
  })

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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
              overflowY: "auto",
              margin: "0rem",
            }}
          >
            <Box
              ref={scrollContainerRef}
              sx={{
                height: "100vh",
                overflowY: "auto",
              }}
            >
              <Box
                sx={{
                  position: "sticky",
                  top: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                  zIndex: 1,
                  backgroundColor: alpha(theme.palette.primary.main, 0.75)
                }}
              >
                <IconButton
                  onClick={handleAddItem}
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
              <List>
                {items.map((text, index) => (
                  <ListItem
                    key={text}
                    sx={{
                      backgroundColor: "primary.main",
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "primary.light",
                      },
                      borderRadius: "4px",
                    }}
                  >
                    <ListItemText
                      primary={text}
                      sx={{ color: "primary.contrastText" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
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
                disableUnderline: true,
              }}
              inputRef={textBoxRef}
              sx={{
                backgroundColor: "primary.main",
                padding: "0.5rem",
                minHeight: "100%",
                overflow: "auto",
                "& .MuiInputBase-input": {
                  color: "primary.contrastText",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <style jsx>{`
         {
          /* Add this style */
        }
        .scrollbar-container::-webkit-scrollbar {
        }
      `}</style>
    </ThemeProvider>
  );
}
