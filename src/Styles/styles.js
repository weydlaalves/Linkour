import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`

  width: 400px;
  background: #181818;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: white;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    
    border: 0;
    height: 40px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #2222;
    font-size: 16px;
    background-color:#76967e;
    width: 100%;
    border-radius: 5px ;
    &::placeholder {
      color: white;
    }
  }
  button {
    margin-top: 5px;
    color: #fff;
    font-size: 16px;
    background: #19978e;
    height: 40px;
    border: 0;
    border-radius: 10px;
    width: 110%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    margin-top: 5px;
    font-size: 12px;
    font-weight: bold;
    color: #f08048;
    text-decoration: none;
    display: inline-block;
    
    

    
  }
`;

