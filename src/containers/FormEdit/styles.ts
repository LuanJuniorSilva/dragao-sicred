import styled from 'styled-components'

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input, textarea {
      font-size: 1rem;
      color: var(--color-2);
      padding: var(--gap) 0.75rem;
      background-color: var(--color-4);
      border-radius: var(--gap-s);
      border: none;
      font-family: monospace;
      margin-bottom: var(--gap-s);
    }

    textarea {
      height: 200px;
      resize: none;
    }
`