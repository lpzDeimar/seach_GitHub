import { Container } from "@mui/material";
import React, { useState } from "react";
import Searcher from "./components/Searcher";

export const App = () => {
  const [status, setStatus] = useState({
    inputUser: "Lpzdeimar",
    userStatus: "",
  });

  return (
    <Container
      sx={{
        backgroundColor: "#e5e5e5",
        width: "80vw",
        minHeight: "500px",
        borderRadius: "25px",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher setStatus={setStatus} />
    </Container>
  );
};
