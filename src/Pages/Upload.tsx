import React, {useState} from 'react'
import styled from 'styled-components';
import Header from '../Block/Header';
function Upload() {
  const [image, setImage] = useState("")
  return (
    <div>
       <Container>
        <Header/>
        <Wrapper>
        <CoverImage>
        </CoverImage>
        <Button>
          Upload Cover Image
          </Button>
          <input type="text" placeholder='Enter title'/>
          <textarea placeholder='Summary'></textarea>
          <input type="text" placeholder='Enter Author Name'/>
          <select name="" id="">
            <option value="">Select a Category</option>
            <option value="">Select a Category</option>
            <option value="">Select a Category</option>
            <option value="">Select a Category</option>
          </select>
          <Button>
          Submit
          </Button>
        </Wrapper>
      </Container> 
    </div>
  )
}

export default Upload;
const Button = styled.button`
  padding: 10px 15px;
  background-color: black;
  color: white;
  border-radius: 10px;
`
const CoverImage = styled.div`
background-color: grey;
justify-content: center;
align-items: center;
display: flex;
height: 250px;
width: 400px;
`
const Container = styled.div`
background-color: grey;
justify-content: center;
align-items: center;
display: flex;
height: 100vh;
width: 100%;
`
const Wrapper = styled.div`
background-color: white;
justify-content: center;
align-items: center;
display: flex;
border: 2px solid green;
height: 95%;
width: 50%;
flex-direction: column;
input{
  padding: 20px;
  width: 450px;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}
textarea{
  padding: 20px;
  width: 450px;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}
Select{
  padding: 20px;
  width: 450px;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}
button{
  padding: 20px;
  width: 450px;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
}
`

