import styled from 'styled-components'

const Boton = styled.button`

color: #000;
  border: 2px solid rgb(27, 26, 23);
  border-radius: 0px;
  padding: 8px 12px;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #FEE440;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  margin-left: 5px;
  margin-top: 10px;
        &:hover{
            box-shadow: inset 400px 0 0 0 #FEE440
        
        }
`;

export default Boton;