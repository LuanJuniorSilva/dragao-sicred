import React, { useState } from 'react'
import { Box, Button } from '../../components'
import { FormStyled } from './styles'
import { getConfig, setConfig } from '.././../utils/functions'

export const Config = () => {
  const [configPattern, setConfigPattern] = useState('')
  const handleConfig = () => {
    setConfig(configPattern)
  }
  const labelSelect = [
    {
      label: 'Plano de Fundo Padrão',
      value: 'default'
    },
    {
      label: 'Plano de Fundo Roxo',
      value: 'purple'
    },
    {
      label: 'Plano de Fundo Rosa',
      value: 'pink'
    },
    {
      label: 'Plano de Fundo Amarelo',
      value: 'yellow'
    },
]
  return (
    <section>
      <Box>
        <h1 style={{textAlign: "center"}}>Configuração da cor do site</h1>
        <FormStyled onSubmit={(e) => e.preventDefault()}>
          <select 
            name='config' 
            onChange={e => setConfigPattern(e.target.value)}
            defaultValue={getConfig()?.name}
            >
            {labelSelect.map((item) => (
              <option 
                value={item.value}
                key={item.value}>
                  {item.label}
              </option>
            ))}
          </select>
          <Button 
            onClick={() => handleConfig()}>
              Salvar Configuração
          </Button>
        </FormStyled>
      </Box>
    </section>
  )
}
