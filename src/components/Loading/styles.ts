import styled from 'styled-components'

export const LoadingStyled = styled.div`
  border: var(--gap-s) solid var(--color-2);
  border-right-color: var(--color-4);
  width: var(--gap);
  height: var(--gap);
  border-radius: 50%;
  animation: spin 1s infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`