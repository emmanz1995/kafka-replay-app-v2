import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: 3px solid green;
  background-color: white;
  border-radius: 2px;
  &:hover {
    background-color: green;
    transition: all 0.3s ease-in-out;
    color: #fff;
  }
`