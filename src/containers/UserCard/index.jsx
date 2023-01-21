import { CardMedia, Grid } from "@mui/material";
import React from "react";

const UserCard = ({ status }) => {
  const { avatar_url } = status.userStatus;

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardMedia component="img" alt="GitHub User" image={avatar_url} />
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
};

export default UserCard;
