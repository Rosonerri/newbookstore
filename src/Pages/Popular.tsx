import React from 'react'
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

function Popular() {
  return (
    <div>
      <Container>
        <Hold>
        <Div>
            <p>Popular</p>
            <FaAngleDown />
        </Div>
        <Div1>
            <p>Filter</p>
            <FaAngleDown />
        </Div1>
        </Hold>
      </Container>
    </div>
  )
}

export default Popular;
const Hold =  styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
/* background-color: green; */
width: 100%;
height: 15vh;
display: flex;
justify-content: center;
align-items: center;
`
const Div = styled.div`
border: 1px solid grey;
padding: 5px 25px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
cursor: pointer;
p{
    margin-right: 5px;
}
`
const Div1 = styled.div`
border: 1px solid grey;
padding: 5px 25px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
cursor: pointer;
p{
    margin-right: 5px;
}
`

