import React, { Component, Fragment } from 'react'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Barra from '../../components/Sidebar'
class Main extends Component {
  state = {
    repos: [1, 2, 3, 4, 5],
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -29.6620335,
      longitude: -51.1679283,
      zoom: 14
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize)
    this._resize()
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

  handleMapClick(e) {
    const [longitude, latitude] = e.lngLat

    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`)
  }

  render() {
    return (
      <Fragment>
        <div className="map">
          <MapGL
            {...this.state.viewport}
            onClick={this.handleMapClick}
            mapStyle="mapbox://styles/mapbox/basic-v9"
            mapboxApiAccessToken={
              'pk.eyJ1IjoiZGllZ29oZW5ucmljaCIsImEiOiJjanZzZzM0aTgwMXZlNDRwMXd4ZXp1amgyIn0.dsGfaX7hV51ruAHw5nyAgg'
            }
            onViewportChange={viewport => this.setState({ viewport })}
          >
            <Marker
              latitude={-29.6620335}
              longitude={-51.1679283}
              onClick={this.handleMapClick}
              captureClick={true}
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48
                }}
                src="https://avatars2.githubusercontent.com/u/2254731?v=4"
                alt="user"
              />
            </Marker>
          </MapGL>
        </div>

        <Barra repos={this.state.repos} />
      </Fragment>
    )
  }
}

export default Main
