import styled from 'styled-components'

export const HeaderStyled = styled.header`
  margin-bottom: var(--gap);
`

export const SearchStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap);

  h1 {
    padding: var(--gap);
    border-radius: var(--gap);
    background-color: var(--color-3);
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    
    *:last-child {
      grid-row: 1;
    }
  }
`

export const FormStyled = styled.form`
  padding: var(--gap);
  border-radius: var(--gap);
  background-color: var(--color-5);
  display: flex;
  gap: var(--gap);

  > * {
    flex: 1;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const InputStyled = styled.input`
  font-size: 1rem;
  color: var(--color-2);
  padding: var(--gap) .75rem;
  background-color: var(--color-4);
  border-radius: var(--gap-s);

  border: none;
  font-family: monospace;
  width: 100%;
`