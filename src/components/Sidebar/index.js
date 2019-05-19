import React from 'react'
import { Sidebar } from './style'

import { MdCancel, MdChevronRight } from 'react-icons/md'
const Barra = props => (
  <Sidebar>
    <ul>
      {props.repos.map(i => (
        <li key={Math.random()} onClick={() => props.onClick(i)}>
          <div className="content">
            <div className="card-left">
              <img className="foto" src={i.avatar} alt="avatar" />
              <div className="card-middle">
                <span>
                  <strong>{i.nome}</strong>
                  {i.url}
                </span>
              </div>
            </div>
            <div className="card-right">
              <MdCancel className="close" />
              <MdChevronRight className="seta" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </Sidebar>
)

export default Barra
