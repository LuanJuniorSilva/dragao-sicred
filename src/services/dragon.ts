/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'
import { apiDefault as client } from './utils'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLoader } from '../contexts/LoadingContext'
import { returnRequestError } from '../utils/functions'

export function useDragonService() {

  const { setLoading } = useLoader()
  const navigate = useNavigate()

  return useMemo(() => {
    return {
      createDragon: async (payload: object) => {
        try {
          setLoading(true)
          await client.post('/', payload)
          toast.success('Dragão cadastrado com sucesso.')
          return navigate('/dragons')
        } catch (e: any) {
          toast.error(returnRequestError(e, 'Falha ao criar dragão, tente novamente mais tarde.'))
          return null
        } finally {
          setLoading(false)
        }
      },
      updateDragon: async (id: string, payload: object) => {
        try {
          setLoading(true)
          await client.put(`/${id}`, payload)
          toast.success('Dragão atualizado com sucesso.')
          return navigate('/dragons')
        } catch (e: any) {
          toast.error(returnRequestError(e, 'Falha ao atualizar dragão! Tente novamente mais tarde.'))
          return null
        } finally {
          setLoading(false)
        }
      },
      deleteDragon: async (id: string) => {
        try {
          setLoading(true)
          const response = await client.delete(`/${id}`)

          return response.data
        } catch (e: any) {
          toast.error(returnRequestError(e, 'Falha ao deletar dragão! Tente novamente mais tarde.'))
          return null
        } finally {
          setLoading(false)
        }
      },
      getAll: async (params: object) => {
        try {
          setLoading(true)
          const response = await client.get(``, { params })

          return response.data
        } catch (e: any) {
          toast.error(returnRequestError(e, 'Falha ao carregar lista de dragões! Tente novamente mais tarde.'))
          return null
        } finally {
          setLoading(false)
        }
      },

      getById: async (id: string | undefined) => {
        try {
          setLoading(true)
          const response = await client.get(`/${id}`)
          
          return response.data
        } catch (e: any) {
          toast.error(returnRequestError(e, 'Falha ao carregar dragão! Tente novamente mais tarde.'))
          return null
        } finally {
          setLoading(false)
        }

      },
    }
  }, [navigate, setLoading])
}
