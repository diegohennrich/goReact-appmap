import React, { Component } from 'react'
import { MdCancel, MdChevronRight } from 'react-icons/md'
import { Card } from './style'

class Cards extends Component {
  render () {
    return (
      <Card>
        <ul>
          <li>
            <div className="cardContent">
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
        </ul>
      </Card>
    )
  }
}

export default Cards
