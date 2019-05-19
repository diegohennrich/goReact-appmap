/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'repository/ADD_REQUEST',
  ADD_SUCCESS: 'repository/ADD_SUCCESS',
  ADD_FAILURE: 'repository/ADD_FAILURE',
  REMOVE_REPOSITORY: 'repostiory/REMOVE_REPOSITORY',
  ADD_FORM: 'repository/ADD_FORM',
  ADD_FORM_CANCEL: 'repository/ADD_FORM_CANCEL',
  LOAD_REQUEST: 'repository/LOAD_REQUEST',
  LOAD_SUCCESS: 'repository/LOAD_SUCCESS',
  CHANGE_MAP: 'CHANGE_MAP'
}

/**
 *  Actions
 */
export const Creators = {
  loadRequest: () => ({
    type: Types.LOAD_REQUEST
  }),
  loadRequestSuccess: repos => ({
    type: Types.LOAD_SUCCESS,
    payload: { repos }
  }),
  addRepositoryRequest: data => ({
    type: Types.ADD_REQUEST,
    payload: { data }
  }),

  addRepositorySuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),
  addRepositoryFailure: data => ({
    type: Types.ADD_FAILURE,
    payload: { data }
  }),
  RepositoryRemove: data => ({
    type: Types.REMOVE_REPOSITORY,
    payload: { data }
  }),
  addForm: () => ({
    type: Types.ADD_FORM
  }),
  addFormCancel: () => ({
    type: Types.ADD_FORM_CANCEL
  }),
  changeMap: viewport => ({
    type: Types.CHANGE_MAP,
    payload: { viewport }
  })
}

/**
 * Reducers
 */
const INICIAL_STATE = {
  repos: [],
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: -29.65718546199015,
    longitude: -51.1767259455929,
    zoom: 14
  },
  modal: false,
  newRepository: {},
  TypeForm: 'add'
}

export default function (state = INICIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        repos: action.payload.repos
      }
    case Types.REMOVE_REPOSITORY:
      return {
        ...state,
        repos: state.repos.filter(i => i.id !== action.payload.data.id),
        modal: false
      }
    case Types.ADD_REQUEST:
      return {
        ...state
      }
    case Types.ADD_SUCCESS:
      return {
        ...state,

        modal: false,
        repos: [...state.repos, action.payload.data]
      }
    case Types.ADD_FAILURE:
      return {
        ...state,
        modal: false
      }
    case Types.ADD_FORM:
      return {
        ...state,
        modal: true
      }
    case Types.ADD_FORM_CANCEL:
      return {
        ...state,
        modal: false
      }

    case Types.CHANGE_MAP:
      return {
        ...state,
        viewport: action.payload.viewport
      }
    default:
      return { ...state }
  }
}
