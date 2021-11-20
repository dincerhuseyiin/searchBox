import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import imageTesodev from "../tesodev.jpg";
import mockData from "../mockData.json";
import { Box } from "@mui/system";
import "../App.css";

const SearchList = ({ search, setSearch }) => {
  /* Box için bu fonksiyonu tanımladım */
  const commonStyles = {
    bgcolor: "background.paper",
    border: 1,
    padding: 2,
    width: "860px",
    height: "19rem",
  };
  return (
    <Box
      sx={{
        mt: 10,
      }}
    >
      <img src={imageTesodev} alt="tesodev.." className="tesodev-image" />
      <Typography mt={2} ml={135} variant="h5">
        {" "}
        Search Web App
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "100%",
          alignItems: "center",
          margin: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",

            justifyContent: "center",
            maxWidth: "100%",
            alignItems: "center",
            margin: 3,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Your name.."
            variant="outlined"
            size="large"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            sx={{ width: "900px" }}
          />

          <Button
            variant="contained"
            sx={{ m: 1, ml: 3, height: "55px", width: "120px" }}
          >
            {" "}
            Search{" "}
          </Button>
        </Box>
        <List
          sx={{
            width: "100%",
            maxWidth: 900,
            bgcolor: "background.paper",
            mr: 18,
          }}
          aria-label="contacts"
        >
          <Box sx={{ ...commonStyles, borderColor: "grey.500" }}>
            {mockData.data
              .filter((item, i) => {
                if (search === "") {
                  return "no result";
                } else if (
                  item[0].toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .slice(0, 3)
              .map((m) => (
                <>
                  <ListItem button>
                    <ListItemText>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {" "}
                        {m[0]} <br />{" "}
                        <Typography variant="caption"> {m[3]} </Typography>
                      </Typography>
                    </ListItemText>

                    <ListItemText>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {" "}
                        Email: {m[2]} <br />{" "}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </>
              ))}
          </Box>
        </List>
        <Link to="/alllist" className="toAllList2">
          Load more...
        </Link>
      </Box>
    </Box>
  );
};

export default SearchList;
