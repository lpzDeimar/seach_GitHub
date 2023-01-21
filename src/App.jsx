import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Searcher from "./components/Searcher";
import { gettingUsers } from "./services/users";
import UserCard from "./containers/UserCard";

export const App = () => {
  const [status, setStatus] = useState({
    inputUser: "Lpzdeimar",
    userStatus: "",
    notFound: false,
  });

  const gettingUser = async (user) => {
    setStatus({ ...status, userStatus: await gettingUsers(user) });

    if (status.inputUser === "Lpzdeimar") {
      localStorage.setItem("gitHub", JSON.stringify(status.userStatus));
    }

    if (status.userStatus.message === "Not Found") {
      setStatus({
        ...status,
        userStatus: JSON.parse(localStorage.getItem("gitHub")),
      });
      status.notFound = true;
    }
  };

  useEffect(() => {
    gettingUser(status.inputUser);
  }, [status.inputUser]);

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
      <Searcher status={status} setStatus={setStatus} />
      <UserCard status={status} />
    </Container>
  );
};
