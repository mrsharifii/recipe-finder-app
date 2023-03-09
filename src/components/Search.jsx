import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

function Search() {
  const [input, setInput] = useState("");

    const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/' + input)
    setInput('')
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 2rem;

  div {
    width: 100%;
    position: relative;
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translate(100%, -50%);
    color: white;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
`;

export default Search;
