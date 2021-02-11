import styled from "styled-components";

export const NavStyled = styled.div`
  font-size: 2vw;
  display: flex;
  flex-direction: row;
  margin: auto;
  color: white;
  background-color: black;

  a {
    margin: auto;
    padding: 1%;
  }

  .underline {
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

export const LuxurysStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, #c9ac56, white);

  h1 {
    width: 100%;
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
  }
  .Luxary {
    width: 50%;
    margin: 1%;
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
  /* Style inputs with type="text", select elements and textareas */
  input[type="text"],
  select,
  textarea {
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
  }

  /* Style the submit button with a specific background color etc */
  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
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
