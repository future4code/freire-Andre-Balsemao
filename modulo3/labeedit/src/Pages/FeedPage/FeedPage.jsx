import React from "react";
import { Button } from "@mui/material";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

const FeedPage = () => {
  useProtectedPage()
  return (
    <div>
      <h1>Feed Page</h1>
      <Button variant="contained">Hit Me!!!!</Button>
      
    </div>
  );
};

export default FeedPage;
