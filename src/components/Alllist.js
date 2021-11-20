import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react"; /* hooks*/
import mockData from "../mockData.json";
import ReactPaginate from "react-paginate"; /* paginate*/
import { Box } from "@mui/system";
import imageTesodev from "../tesodev.jpg"; /* fotoğraf*/

const AllList = ({ search, setSearch }) => {
  /* hooks'lar tanımlandı */
  const [users, setUsers] = useState(mockData.data.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;
  const [order, setOrder] = useState("ASC");

  /* fonksiyonlar tanımlandı */
  const handleChange = (event) => {
    setOrder(event.target.value);
  };
  var displayUsers = mockData.data
    .filter((item) => {
      if (search === "") {
        return "no result";
      } else if (item[0].toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    })
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((m) => (
      <Box>
        <ListItem button>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {" "}
              {m[0]} <br /> <Typography variant="caption"> {m[3]} </Typography>
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="h6" style={{ fontWeight: 600 }}>
              {" "}
              E mail: {m[2]} <br /> {m.code}{" "}
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />
      </Box>
    ));

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  /* konsolda görüyor olmama rağmen styling sebebiyle çıktısını alamadım ve hata olmayacak şekilde işlevsiz bıraktım. (hooks) (DÜZELTİLECEK!) */
  const [datas, setDatas] = useState([...displayUsers]);
  console.log(datas);

  /* fonksiyonlar tanımlandı sorting için*/
  const sorting = () => {
    if (order === "ASC") {
      const sorted = [...datas].sort((a, b) =>
        a[0]?.toLowerCase() > b[0]?.toLowerCase() ? 1 : -1
      );
      setDatas(sorted);
      setOrder("DSC");
    } else if (order === "DSC") {
      const sorted = [...datas].sort((a, b) =>
        a[0]?.toLowerCase() < b[0]?.toLowerCase() ? 1 : -1
      );
      setDatas(sorted);
      setOrder("ASC");
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "100%",
          ml: 8,
        }}
      >
        <img src={imageTesodev} alt="tesodev.." className="tesodev-image-all" />
        <TextField
          id="outlined-basic"
          label="Your name.."
          variant="outlined"
          size="large"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          sx={{ width: "800px" }}
        />

        <Button
          variant="contained"
          sx={{ m: 1, ml: 3, height: "55px", width: "120px" }}
        >
          {" "}
          Search{" "}
        </Button>
      </Box>
      <Box sx={{ mt: 1, ml: 120, height: "55px", width: "200px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Order By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handleChange}
          >
            <MenuItem onClick={() => sorting(datas)}>Name ascending</MenuItem>
            <MenuItem onClick={() => sorting(datas)}>Name descending</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "100%",
          ml: 28,
          mt: 1,
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 800,
            bgcolor: "background.paper",
            mr: 18,
            mb: 8,
          }}
          aria-label="contacts"
        >
          {displayUsers}
          <br />
          <br />
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </List>
      </Box>
    </Box>
  );
};

export default AllList;
