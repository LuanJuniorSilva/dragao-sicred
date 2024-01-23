import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, DragonItem, Loading } from '../../components'
import { useDragonService } from '../../services/dragon'
import { useLoader } from '../../contexts/LoadingContext'
import { orderList } from '../../utils/functions'
import { useDragon } from '../../contexts/DragonContext'

export const Dragons = () => {
  const { deleteDragon, getAll } = useDragonService()
  const { loading } = useLoader()
  const navigate = useNavigate()

  const { dragonData, setDragonData } = useDragon()

  const deleteItem = async (id: string) => {
    const response = await deleteDragon(id)
    if (response) {
     const dragonsFiltered = dragonData?.filter(item => item.id !== id)
     setDragonData(dragonsFiltered)
   }
    return ''
  }

  useEffect(() => {
    const loadDragon = async () =>  {
      const response = await getAll({})
      setDragonData(orderList(response))
    }

    loadDragon()
  }, [])

  if (dragonData === null) return null
  if (loading === true) return <Loading />
  return (
   <>
    <Button onClick={() => navigate('/form')}>Cadastrar novo dragão</Button>
    <ul>
      {dragonData.map((dragon) => (
        <li key={dragon.id}>
          <DragonItem dragon={dragon} deleteItem={deleteItem} />
        </li>
      ))}
    </ul>
    </>
  )
}