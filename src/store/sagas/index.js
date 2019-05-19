// este arquivo deve juntar os sagas e exportar
import { all, takeLatest } from 'redux-saga/effects'
import { Types as TypesRepository } from '../ducks/repository'
import { RepositoryRequest, RepositoryLoad } from './repository'

export default function * rootSaga () {
  yield all([
    takeLatest(TypesRepository.ADD_REQUEST, RepositoryRequest),
    takeLatest(TypesRepository.LOAD_REQUEST, RepositoryLoad)
  ])
}
