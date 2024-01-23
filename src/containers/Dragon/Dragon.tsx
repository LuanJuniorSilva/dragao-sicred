import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IDragon } from '../../types/IDragon'
import { Loading } from '../../components/Loading/Loading'
import { dateFormat } from '../../utils/functions'
import { useDragonService } from '../../services/dragon'
import { useNavigate } from 'react-router-dom'
import { Box } from '../../components'
import { useLoader } from '../../contexts/LoadingContext'

export const Dragon = () => {
  const [dragon, setDragon] = useState<IDragon>()
  const { loading } = useLoader()
  const { getById } = useDragonService()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    async function loadDragon() {
      const response = await getById(id)
      if (!response) return navigate('/dragons')
      setDragon(response)
    }

    loadDragon()
  }, [])

  if (loading === true) return <Loading />
  if (dragon === null) return null
  return (
    <div>
      <Box>ID: {dragon?.id}</Box>
      <Box>Nome: {dragon?.name}</Box>
      <Box>Tipo: {dragon?.type}</Box>
      <Box>Historia: {dragon?.histories}</Box>
      <Box>Data de criação: {dateFormat(dragon?.createdAt)}</Box>
    </div>
  )
}