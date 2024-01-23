import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDragon } from '../../contexts/DragonContext'
import { 
  FormStyled,
  HeaderStyled,
  InputStyled,
  SearchStyled } from './styles'
import { orderList } from '../../utils/functions'
import { useDragonService } from '../../services/dragon'

export const Header = () => {
  const location = useLocation()
  const [search, setSearch] = useState('')
  const [searchField, setSearchField] = useState('')
  const { setDragonData } = useDragon()
  const { getAll } = useDragonService()

  useEffect(() => {
    if (searchField) {
      const loadDragon = async () =>  {
        const query = { search: searchField }
        const response = await getAll(query)
        setDragonData(orderList(response))
      }
  
      loadDragon()
    }
  }, [searchField])

  if (location.pathname !== '/dragons') return null
  return (
    <HeaderStyled>
      <SearchStyled>
        <FormStyled onSubmit={(e) => e.preventDefault()}>
          <InputStyled 
            id="search"
            name="search"
            type="search"
            placeholder="Procurar por name..."
            onChange={(value) => setSearch(value.target.value)}
            onKeyDown={(e) => {
              if (e.code === 'Enter') {
                setSearchField(search)
              }
            }}
            onBlur={() => {
              if (search !== searchField) {
                setSearchField(search)
              }
            }}
          />
        </FormStyled>
        <h1>Lista de dragões</h1>
      </SearchStyled>
    </HeaderStyled>
  )
}