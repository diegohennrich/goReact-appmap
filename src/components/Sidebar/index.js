import React from 'react'
import { Sidebar, Card } from './style'

import { MdCancel, MdChevronRight } from 'react-icons/md'
const Barra = props => (
  <Sidebar>
    <ul>
      {props.repos.map(i => (
        <li key={Math.random()}>
          <div className="content">
            <div className="card-left">
              <img
                className="foto"
                src="https://avatars2.githubusercontent.com/u/2254731?v=4"
                alt="avatar"
              />
              <div className="card-middle">
                <span>
                  <strong>Diego Hennrich</strong>@diegohennrich
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
