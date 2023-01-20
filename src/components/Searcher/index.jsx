import { IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Searcher = ({ setStatus }) => {
  const [input, setInput] = useState("");

  const onSearchValueChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setStatus((oldStatus) => ({
      ...oldStatus,
      inputUser: input,
    }));
    setTimeout(() => {
      setInput("");
    }, 1000);
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        marginTop: "40px",
        width: "80%",
      }}
    >
      <TextField
        onChange={onSearchValueChange}
        id="outlined-basic"
        label="GitHub User"
        variant="outlined"
        placeholder="LpzDeimar"
        size="small"
        value={input}
        sx={{
          width: "90%",
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
