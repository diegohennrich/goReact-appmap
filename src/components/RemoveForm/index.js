import React from 'react'

import { RemoveFormContent } from './style'

const RemoveForm = props => (
  <RemoveFormContent>
    <h1>Remover usuário {props.repository.name}</h1>

    <div className="actions">
      <button className="cancelButton" type="button" onClick={props.onCancel}>
        Cancelar
      </button>
      <button className="removeButton" type="submit">
        Remover
      </button>
    </div>
  </RemoveFormContent>
)

export default RemoveForm
