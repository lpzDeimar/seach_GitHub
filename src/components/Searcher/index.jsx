import { IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Searcher = ({ setStatus, status }) => {
  const [input, setInput] = useState("");

  const onSearchValueChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setStatus({
      ...status,
      inputUser: input,
    });
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        marginTop: "40px",
        width: "90%",
      }}
    >
      <TextField
        onChange={onSearchValueChange}
        id="outlined-basic"
        label="GitHub User"
        variant="outlined"
        placeholder="LpzDeimar"
        size="small"
        right="-48px"
        value={input}
        sx={{
          width: "100%",
        }}
      />
      <IconButton
        onClick={handleSubmit}
        sx={{
          left: "-48px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
