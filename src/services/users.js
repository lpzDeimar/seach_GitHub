import { urlFetch } from "../constants";

export const gettingUsers = async (user) => {
  const response = await fetch(`${urlFetch}${user}`);
  const payload = await response.json();
  return payload;
};
