import styled from 'styled-components'
import { darken } from 'polished'

export const ButtonStyled = styled.button`
    margin: 5px 0 10px;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    padding: 10px;

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
    
`