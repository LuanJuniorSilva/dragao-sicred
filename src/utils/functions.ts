import { IDragon } from '../types/IDragon'

type Error = {
  response: {
    status: number
  }
}
export const returnRequestError = (error: Error, message: string): string => {
  if(error?.response?.status == 404) {
      return 'Erro 404! Este dragão não existe.'    
  }

  return message
}

export const dateFormat = (date: string | Date | undefined) => {
  if(!date) return
  return new Date(date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})
}

export const orderList = (arr: IDragon[]) => {
  return arr.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

export const setConfig = (color: string) => {
  let patterColor
  switch (color) {
    case 'purple':
      patterColor = {
        name: 'purple',
        color1: '#000',
        color2: '#111',
        color3: '#a36af9',
        color4: '#f5f5f5',
        color5: '#ffffff',
      }
      break
    case 'pink':
      patterColor = {
        name: 'pink',
        color1: '#000',
        color2: '#111',
        color3: '#fd9acb',
        color4: '#f5f5f5',
        color5: '#ffffff',
      }
      break
    case 'yellow':
      patterColor = {
        name: 'yellow',
        color1: '#000',
        color2: '#111',
        color3: '#fcc203',
        color4: '#f5f5f5',
        color5: '#ffffff',
      }
      break
    default:
      patterColor = {
        name: 'default',
        color1: '#463220',
        color2: '#65593C',
        color3: '#eceadd',
        color4: '#f7f8f5',
        color5: '#ffffff',
      }
      break
  }
  localStorage.setItem('colorsTheme', JSON.stringify(patterColor))
  document.location.reload()
}

export const getConfig = () => {
  const colorTheme = localStorage.getItem('colorsTheme')
  if(!colorTheme) return {
    name: 'default',
    color1: '#463220',
    color2: '#65593C',
    color3: '#eceadd',
    color4: '#f7f8f5',
    color5: '#ffffff',
  }
  return JSON.parse(colorTheme)
}