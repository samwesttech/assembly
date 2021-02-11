import styled from "styled-components";

export const NavStyled = styled.div`
  font-size: 1.5vw;
  display: flex;
  flex-direction: row;
  margin: auto;
  color: white;
  background-color: black;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 1000;

  h1 {
    margin: 2% auto;
  }

  .underline {
    z-index: 1100;
    background: none;
    color: white;
    position: relative;
    &:hover {
      &:after {
        width: 100%;
      }
    }
    &:after {
      display: block;
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 0;
      height: 5px;
      background-color: #c9ac56;
      content: "";
      -webkit-transition: all 0.2s;
      -moz-transition: all 0.2s;
      -o-transition: all 0.2s;
      transition: all 0.2s;
    }
  }
`;

export const HeaderLogo = styled.img`
  width: auto;
  margin-top: 5%;
  height: 30vw;
  overflow: hidden;
  object-fit: cover;
`;

export const IntroMessageStyled = styled.div`
  width: 50%;
  height: 30vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BedroomStyled = styled.img`
  width: 100%;
  height: 400px;
  overflow: hidden;
  object-fit: cover;
`;

export const LuxuriesStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffde7b;

  h1 {
    width: 100%;
    font-size: 5vw;
  }

  p {
    width: 50%;
    height: 10%;
    margin: 5% auto;
  }

  .Luxarys {
    font-size: 1vw;
    display: flex;
    flex-direction: row;
    margin: auto;
  }
  .Luxary {
    width: 40%;
    margin: 5%;
    margin-top: 0;
    background-color: white;
    border-radius: 1%;
    border: grey solid 3px;
  }
`;

export const FloorPlanStyled = styled.div`
  margin: 10%;
  margin-top: 5%;
  display: flex;
  img {
    width: 50%;
    height: auto;
    margin: auto 5%;
  }
  .text {
    font-size: 1.25vw;
    width: 50%;
    margin: auto;
    margin-top: 1%;
    text-align: left;
  }
`;
export const FooterImageStyled = styled.img`
  height: 25vw;
  width: auto;
  margin: auto;
`;

export const LocalAreaStyled = styled.div`
  background-image: linear-gradient(to right, #c9ac56, white, #c9ac56);

  .img-container {
    height: 40vw;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: auto;
  }

  img {
    margin: auto;
    width: auto;
    height: 25vw;
    padding: 2%;
  }
`;

export const FooterStyled = styled.div`
  background-color: black;
  color: white;
  margin: auto;
  display: flex;
  flex-direction: column;

  .icons {
    flex-direction: row;
    margin: 8%;
    margin-top: 0;
    a {
      margin: auto 10%;
    }
  }

  .policy {
    display: flex;
    flex-direction: row;
    width: 70%;
    margin: auto;

    h3 {
      margin: auto 10%;
      width: 50%;
    }
  }

  p {
    margin: 6%;
  }
`;

export const ContactForm = styled.form`
  width: 50%;
  margin: 5% auto;
  border: solid grey 3px;
  border-radius: 1%;
  height: auto;
  font-size: 2vw;

  .input-field {
    display: flex;
    /* justify-content: center; */
    margin: 8% auto;
    width: 90%;
    text-align: left;

    label {
      width: 20%;
    }

    input,
    textarea {
      width: 80%;
    }
  }

  /* Style the submit button with a specific background color etc */
  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 2% 5%;
    border: none;
    border-radius: 1%;
    margin: 5%;
    margin-top: 0%;
    cursor: pointer;
  }

  /* When moving the mouse over the submit button, add a darker green color */
  input[type="submit"]:hover {
    background-color: #45a049;
  }

  /* Add a background color and some padding around the form */
  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
`;
