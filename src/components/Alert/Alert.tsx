import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { CustomUI } from './styles'

type CustumUiProps = {
  onClose: () => void
}

export const Alert = (handleDelete: () => void) => {
  const options = {
    title: 'Title',
    message: 'Message',
    buttons: [
      {
        label: 'Yes',
        onClick: () => alert('Click Yes'),
      },
      {
        label: 'No',
        onClick: () => alert('Click No'),
      },
    ],
    childrenElement: () => <div />,
    customUI: ({ onClose }: CustumUiProps) => (
      <CustomUI className="custom-ui">
        <h1>Tem certeza que deseja excluir?</h1>
        <button onClick={onClose}>Não</button>
        <button
          onClick={() => {
            handleDelete()
            onClose()
          }}
        >
          Sim, quero excluir
        </button>
      </CustomUI>
    )
  }
  return confirmAlert(options)
}