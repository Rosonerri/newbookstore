import React from 'react'
import styled from "styled-components";
import img from "../images/logo.jpg"
function Footer() {
  return (
    <div>
       <Container>
        <Div>
          <div>
            <img src="https://dribbble.com/" alt="" />
            <h5>BookStore is the world’s leading community for creatives to share, grow, and get hired.</h5>
            <Icon>
            <img src="https://dribbble.com/dribbble" alt="" />
            <img src="http://twitter.com/dribbble" alt="" />
            <img src="http://facebook.com/dribbble" alt="" />
            <img src="http://instagram.com/dribbble" alt="" />
            <img src="http://www.pinterest.com/dribbble/" alt="" />

            </Icon>
          </div>
          <div>
            <h4>For designers</h4>
            <p>Explore design work</p>
            <p>Disign Blog</p>
            <p>Overtime PostCards</p>
            <p>PlayOffs</p>
            <p>Code of conduct</p>
          </div>
          <div>
          <h4>Hire designers</h4>
            <p>Explore design work</p>
            <p>Disign Blog</p>
            <p>Overtime PostCards</p>
            <p>PlayOffs</p>
            <p>Code of conduct</p>
            <p>Disign Blog</p>
            <p>Overtime PostCards</p>
            <p>PlayOffs</p>
            <p>Code of conduct</p>
          </div>
          <div>
          <h4>Hire designers</h4>
            <p>Explore design work</p>
            <p>Disign Blog</p>
            <p>Overtime PostCards</p>
            <p>PlayOffs</p>
            <p>Code of conduct</p>
            <p>Disign Blog</p>
            <p>Overtime PostCards</p>
            <p>PlayOffs</p>
            <p>Code of conduct</p>
          </div>
          <div>
          <h4>Hire designers</h4>
            <p>Explore design work</p>
            <p>Disign Blog</p>
            <p>Overtime PostCards</p>
            <p>PlayOffs</p>
            <p>Code of conduct</p>
            <p>Disign Blog</p>
            <p>Overtime PostCards</p>
            <p>PlayOffs</p>
            <p>Code of conduct</p>
          </div>
          <div>
          <h4>Hire designers</h4>
            <p>Explore design work</p>
            <p>Disign Blog</p>
            <p>Overtime PostCards</p>
            <p>PlayOffs</p>
            <p>Code of conduct</p>
            <p>Disign Blog</p>
            <p>Overtime PostCards</p>
            <p>PlayOffs</p>
            <p>Code of conduct</p>
          </div>
        </Div>
        <Div1>
          <p>© 2023 BookStore. All rights reserved.</p>
          <div>
            <h5>22,44,23</h5>
            <p>BookStore</p>
            <img src={img} alt="" />
          </div>
        </Div1>
      </Container>
    </div>
  )
}

export default Footer;


const Icon = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;

const Div = styled.div`
height: 80%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 20px;
div{
  padding: 10px;
}
`;
const Div1 = styled.div`
height: 20%;         
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 20px;
border-top: 1px solid rgb(231,231,233);
p{
  margin-left: 5px;
  margin-right: 5px;
}
div{
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  width: 5%;
}
`;

const Container = styled.div`
background-color: #FAFAFB;
height: 80vh;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;

`;