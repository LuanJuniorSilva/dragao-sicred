/* eslint-disable no-inner-declarations */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Loading } from '../../components'
import { FormStyled } from './styles'
import { IDragon } from '../../types/IDragon'
import { useDragonService } from '../../services/dragon'
import { useLoader } from '../../contexts/LoadingContext'
import { useNavigate } from 'react-router-dom'

export const FormEdit = () => {

  const { id } = useParams()
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [histories, setHistories] = useState('')
  const [nameButton, setNameButton] = useState('Salvar informações')
  const { getById, createDragon, updateDragon } = useDragonService()
  const { loading } = useLoader()
  const navigate = useNavigate()

  const handleSubmit = async (payload: object) => {
    if(!name || !type || !histories || histories.length === 0) return
    
    if (id) {
      await updateDragon(id, payload)
    } else {
      await createDragon(payload)
    }
  }

  useEffect(() => {
    if (id) {
      setNameButton('Editar informações')
      async function loadDragon() {
        const response: IDragon = await getById(id)
        if (!response) return navigate('/dragons')
        setName(response.name)
        setType(response.type)
        setHistories(response.histories)
      }
  
      loadDragon()
    }
  }, [])

  return (
    <Box>
      <h3>Crie seu Dragão</h3>
      <FormStyled onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Digite o nome de seu dragão"
          required
        />
        <input 
          type="text"
          value={type}
          onChange={e => setType(e.target.value)}
          placeholder="Digite o tipo de seu dragão"
          required
        />
        <textarea
          value={histories}
          onChange={e => setHistories(e.target.value)}
          placeholder="História do dragão"
          required
        ></textarea>
        <Button
          onClick={() => {
            const payload: object = {
              name,
              type,
              histories,
              createdAt: new Date()
            }
            return handleSubmit(payload)
          }}
        >
          {nameButton}
        </Button>
        {loading && <Loading />}
      </FormStyled>
    </Box>
  )
}
