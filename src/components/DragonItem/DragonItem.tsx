import { NavLink } from 'react-router-dom'
import { IDragon } from '../../types/IDragon'
import { DragonStyled, Options } from './styles'
import { dateFormat } from '../../utils/functions'
import { Alert } from '../../components/Alert'

export const DragonItem = ({ dragon, deleteItem }: {dragon: IDragon, deleteItem: (id: string) => void}) => {
  
  const handleDelete = async (id: string) => deleteItem(id)

  return (
    <DragonStyled>
      <div style={{fontFamily: "monospace"}}>
        <strong>Data de criação: </strong>
        {dateFormat(dragon.createdAt)}
      </div>
      <div>
        <strong>Nome: </strong>
        {dragon.name}
      </div>
      <div>
        <strong>Tipo: </strong> 
        {dragon.type}
      </div>
      <Options>
        <strong>Opções: </strong>
        <NavLink to={`/dragon/${dragon.id}`}>
            <i className="fas fa-list-alt"></i>
        </NavLink>
        <NavLink to={`/form/${dragon.id}`}>
          <i className="fas fa-pen"></i>
        </NavLink>
        <i
          className="fas fa-trash-alt"
          style={{cursor: "pointer"}}
          onClick={() => 
            Alert(() => {
              handleDelete(dragon.id)
            })
          }
        ></i>
      </Options>
    </DragonStyled>
  )
}