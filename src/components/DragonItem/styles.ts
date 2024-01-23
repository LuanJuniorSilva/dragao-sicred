import styled from 'styled-components';

export const DragonStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--gap);
  margin-bottom: var(--gap-s);
  align-items: center;

  padding: var(--gap);
  border-radius: var(--gap);
  background-color: var(--color-5);

 > div:nth-child(2), > div:nth-child(3)  {
  max-width: 20ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
 }

  > div:last-child {
    justify-self: end;
    margin-right: 20px;
  }

  > a, > a {
    text-decoration: none;
    color: red;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    
    div:last-child {
      justify-self: start;
    }
  }
`

export const Options = styled.div`
  a, i {
    display: inline-block;
    color: inherit;
    margin-left: 4px;
  }
`