// sagas do repository

// importando instancia do axios
import api from '../../service/api'

import { call, put } from 'redux-saga/effects'
import { Creators } from '../ducks/repository'
import { toast } from 'react-toastify'
export function * RepositoryRequest (action) {
  const { payload } = action
  const { name, latitude, longitude } = payload.data

  try {
    const { data } = yield call(api.get, `/users/${name}`)

    const newUser = {
      id: data.id,
      latitude: latitude,
      longitude: longitude,
      avatar: data.avatar_url,
      nome: data.name,
      url: data.login
    }

    // put serve para emitir o evento pro reducer
    yield put(Creators.addRepositorySuccess(newUser))

    const reposLocal = JSON.parse(localStorage.getItem('repos'))
    console.log('reposLocal: ', reposLocal)

    const newRepos = reposLocal ? [...reposLocal, newUser] : [newUser]

    console.log('newRepos: ', newRepos)
    localStorage.setItem('repos', JSON.stringify(newRepos))

    toast.success('Adicionado com sucesso!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  } catch (e) {
    yield put(Creators.addRepositoryFailure(e))

    toast.error('Erro ao adicionar repositório', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  }
}

export function * RepositoryLoad () {
  try {
    const repos = JSON.parse(localStorage.getItem('repos'))

    yield put(Creators.loadRequestSuccess(repos || []))
  } catch (e) {
    yield put(Creators.addRepositoryFailure(e))

    toast.error('Erro ao adicionar repositório', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  }
}
