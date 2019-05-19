import React from 'react'

import { AddFormContent } from './style'

const AddForm = props => (
  <AddFormContent>
    <h1>Adicionar novo usuário</h1>
    <input
      type="text"
      placeholder="Usuário no Github"
      onChange={props.onChange}
    />
    <div className="actions">
      <button className="cancelButton" type="button" onClick={props.onCancel}>
        Cancelar
      </button>
      <button className="addButton" type="submit">
        Salvar
      </button>
    </div>
  </AddFormContent>
)

export default AddForm
