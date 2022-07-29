import React, {useState} from "react";
import { InputsContainer } from "./styled";
import { TextField, Button, CircularProgress } from "@mui/material";
import useForm from "../../Hooks/useForm";
import { post } from "../../Services/post";
import { useEffect } from "react";

const PostForm = () => {
    const { form, onChange, cleanFields } = useForm({
    title: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(false)
  const onSubmitPost = (event) => {
    event.preventDefault();
    post(form, setIsLoading);
    cleanFields();
   
  };
 

  return (
    <InputsContainer>
      <form onSubmit={onSubmitPost}>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          type="text"
          label="Titulo do Post"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"body"}
          value={form.body}
          onChange={onChange}
          type="text"
          label="Escreva seu Post"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
      </form>
      <Button
        onClick={onSubmitPost}
        type={"submit"}
        fullWidth
        variant={"contained"}
        color={"primary"}
        margin={"normal"}
      >
        {isLoading? <CircularProgress color={"inherit"} size={"24px"}/> : <>Postar</> }
      </Button>
    </InputsContainer>
  );
};

export default PostForm;
