import React, { Component, Fragment } from 'react'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './style.css'
import Barra from '../../components/Sidebar'
import Modal from '../../components/Modal'
import AddForm from '../../components/AddForm'
import RemoveForm from '../../components/RemoveForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as repositoryActions } from '../../store/ducks/repository'

class Main extends Component {
  state = {
    newRepository: {}
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize)
    this._resize()

    this.props.loadRequest()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize)
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }

  handleMapClick = e => {
    const [longitude, latitude] = e.lngLat
    this.setState({
      newRepository: {
        ...this.newRepository,
        latitude,
        longitude
      }
    })
    this.openModal('add')

    //console.log(`Latitude: ${latitude} \nLongitude: ${longitude}`)
    //alert(`Latitude: ${latitude} \nLongitude: ${longitude}`)(
    console.log(this.state)
  }

  handleNewRepository = e => {
    e.preventDefault()

    this.props.addRepositoryRequest(this.state.newRepository)
    console.log(this.state)
  }

  handleRemoveRepository = e => {
    console.log('entrou no remove: ', e)
    this.props.RepositoryRemove(e)
  }

  openModal(type) {
    this.props.addForm(type)
  }

  render() {
    return (
      <Fragment>
        {this.props.repository.modal && (
          <Modal>
            <form
              onSubmit={
                this.props.repository.TypeForm === 'add'
                  ? this.handleNewRepository
                  : this.handleRemoveRepository
              }
            >
              {this.props.repository.TypeForm === 'add' && (
                <AddForm
                  onChange={e =>
                    this.setState({
                      newRepository: {
                        ...this.state.newRepository,
                        name: e.target.value
                      }
                    })
                  }
                  onCancel={() => this.props.addFormCancel()}
                />
              )}

              {this.props.repository.RemoveForm && (
                <RemoveForm onCancel={() => this.props.addFormCancel()} />
              )}
            </form>
          </Modal>
        )}
        <div className="map">
          <MapGL
            {...this.props.repository.viewport}
            onClick={this.handleMapClick}
            mapStyle="mapbox://styles/mapbox/basic-v9"
            mapboxApiAccessToken={
              'pk.eyJ1IjoiZGllZ29oZW5ucmljaCIsImEiOiJjanZzZzM0aTgwMXZlNDRwMXd4ZXp1amgyIn0.dsGfaX7hV51ruAHw5nyAgg'
            }
            onViewportChange={viewport => this.props.changeMap(viewport)}
          >
            {this.props.repository.repos.map(i => (
              <Marker
                key={Math.random()}
                latitude={i.latitude}
                longitude={i.longitude}
                onClick={this.handleMapClick}
                captureClick={true}
              >
                <img className="avatar" src={i.avatar} alt="user" />
              </Marker>
            ))}
          </MapGL>
        </div>
        <Barra
          repos={this.props.repository.repos}
          onClick={e => this.handleRemoveRepository(e)}
        />
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({
  repository: state.repository
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(repositoryActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
