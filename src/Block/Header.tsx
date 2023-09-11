import React from 'react'
import styled from 'styled-components'
import  {FaSearch}   from "react-icons/fa"
import img from "../images/logo.jpg";
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <div>
        <SectionHeader>
          <Div>
            <img src={img} alt="" />
            <h1>Bookstore</h1>
            {/* <p>Dribble</p> */}
            {/* <nav>Find talent</nav>
            <nav>For designers</nav>
            <nav>Inspiration</nav>
            <nav>Learn design</nav>
            <nav>Go Pro</nav> */}
          </Div>
          <Div1>
            {/* <Button bg="1" cl="" Hbg='' Hcl="1">SignIn</Button> */}
            <FaSearch />
            <NavLink to="/Upload-book">
            <Button bg="" cl="1" Hbg="1" Hcl="">Upload Books</Button>
            </NavLink>
          </Div1>
        </SectionHeader>
    </div>
  )
}
export default Header;

const Button = styled.div<{bg: string, cl: string, Hbg: string, Hcl: string}>`
display: inline-block;
padding: 20px 25px;
background-color:${({ bg }) => bg? "white" : "#EA4C89"};
border-radius: 15px;
color: ${({cl}) => (cl? "white" : "black")};
cursor: pointer;
transition: 350ms ease;
&:hover{
  background-color: ${({Hbg}) => ( Hbg? "white" : "black")};
  color: ${({Hcl}) => ( Hcl? "white" : "black")};
  
}
`;
const Div = styled.div`
width:25%;
height:90%;
display: flex;
/* justify-content: center; */
align-items: center;
img{
  width: 10%;
  cursor: pointer;
  margin-left: 50px;
}
h1{
  font-size: 35px;
  margin-left: 5px;
}
p{
  font-size: 45px;
  font-family: brush script MT;
}
nav{
  font-size: 20px;
  cursor: pointer;
}
`;
const Div1 = styled.div`
width:15%;
height:90%;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 30px;
cursor: pointer;
margin-right: 35px;
`;

const SectionHeader = styled.div`
/* background-color: grey; */
color: black;
height: 15vh;
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
