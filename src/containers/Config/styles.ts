import styled from 'styled-components'

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  select {
    padding: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  button, select {
    width: 80%;
  }
`