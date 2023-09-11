import React from 'react'
import { styled } from 'styled-components';
import video from "../Videos/Library.mp4";
import video1 from "../Videos/Dribble_Video.mp4";
import  {FaSearch}   from "react-icons/fa"

function Hero() {
    const data = [
        {
            text: "Discover",
        },
        {
            text: "Discover",
        },
        {
            text: "Discover",
        },
        {
            text: "Discover",
        },
        {
            text: "Animation",
        },
        {
            text: "Branding",
        },
        {
            text: "Illustration",
        },
        {
            text: "Mobile",
        },
        {
            text: "Print",
        },
        {
            text: "Products",
        },
        {
            text: "Typography",
        },
        {
            text: "Design"
        },
        {
            text: "Poet"
        },
        {
            text: "Comedy"
        },
        {
            text: "Tech"
        },
        {
            text: "Print",
        },
        {
            text: "Print",
        },
    ]

    // const data1 = [
    //     {
    //         myText: "Landing page",
    //     },
    //     {
    //         myText: "ios",
    //     },
    //     {
    //         myText: "food",
    //     },
    //     {
    //         myText: "Landingpage",
    //     }, {
    //         myText: "uxdesign",
    //     },
    //     {
    //         myText: "appdesign",
    //     },
    // ]
  return (
    <div>
        <Container>
        <Video src={video}  muted loop autoPlay playsInline/>
        <Cover></Cover>
        <SubHero>
        <Div>
            {data.map(({text}) => (
                <Box bg="1" cl="">{text}</Box>
            ))}           
        </Div>
        <Div1>
            <h1>Explore the world’s leading <br /> Books and Authors</h1>
            <p>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</p>
            <Input>
            <FaSearch />
            <input type="text" placeholder="Search Books By Author's Name" />
            </Input>
            {/* <Card>
            <Text1>Trending Searches</Text1>
                {data1.map(({myText}) =>  (
                    <Text>{myText}</Text>
                ))}
            </Card> */}
        </Div1>
        </SubHero>
        </Container>
    </div>
  )
}

export default Hero;
const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`
const Text1 = styled.div``
const Text = styled.div`
margin-left: 15px;
padding: 15px 20px;
color: white;
border: 1px solid grey;
border-radius: 30px;
transition: .3s ease;
cursor: pointer;
&:hover{
    border-color: white;
}
`

const Input = styled.div`
display: flex;
font-size: 25px;
background-color: white;
width: 80%;
height: 30px;
color: grey;
padding: 20px;
border-radius: 30px;
margin-top: 30px;
margin-bottom: 30px;
input{
    outline-width: 0;
    margin-left: 10px;
    
    flex: 1;
    border: 0;
    font-size: 25px;
}
`;
const Div = styled.div`
width: 85%;
height: 15%;
/* background-color: grey; */
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
scroll-behavior: auto;
overflow-y: auto;
&::-webkit-scrollbar{
    display: none;
}
`;
const Box = styled.div <{bg: string, cl: string}>`
padding: 15px 20px;
/* display: inline-block; */
color: white;
background-color: rgba(0, 0, 0, 0.5);
border: 1px solid #080606;
margin-right: 15px;
border-radius: 30px;
transition: .3s ease;
cursor: pointer;
&:hover{
 background-color: ${({bg}) => (bg? 'white' : "#140809")};
 color:${({cl}) => cl? "white" : " black"}
}
`;
const SubHero = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* background-color: pink; */
position: absolute;
height: 100%;
width: 100%;
flex-direction: column;
`;
const Div1 = styled.div`
width: 50%;
height: 65%;
/* background-color: black; */
color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
h1{
font-size: 45px;
text-align: center;
}
p{
font-size: 19px;
text-align: center;
}
`;
const Cover = styled.div`
 background-color: rgba(0,0,0, 0.7); 
 position: absolute;
 width: 100%;
 height: 100%;
`;
const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
`;
const Container = styled.div`
width:100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;
