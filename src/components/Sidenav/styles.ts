import styled from 'styled-components'

export const SidenavStyled = styled.nav`
  padding: var(--gap);
  border-radius: var(--gap);
  background-color: var(--color-5);
  background: var(--color-3);

   li {
    display: flex;
    align-items: center;
    gap: var(--gap-s);
  }

   li span {
    width: 2rem;
    height: 2rem;
    background-color: var(--color-4);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--gap);
  }

   li a {
    flex: 1;
    font-size: 1.125rem;
    text-decoration: none;
    margin: 0.25rem 0;
    color: var(--color-1);
    padding: var(--gap-s);
  }

   li:hover span{
    background-color: var(--color-3);
  }

  @media (max-width: 700px) {
     ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    li a {
      font-size: 0.875rem;
    }
  }
`