import React from 'react'

import 'whatwg-fetch'

class GeoPosition extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: null
    }
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('https://freegeoip.net/json/')
      .then(response => {
         console.log(`Status: ${response.status}`)
         return response.json()
      })
      .then(json => {
         this.setState({
           city: json.city
         })
      })
      .catch(e => {
         console.log('parsing failed', e)
      })
    }, 2000)
  }

  render () {
    if (this.state.city) {
      return (
        <div>
          Vous êtes situé à {this.state.city}
        </div>
      )
    } else {
      return (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      )
    }

  }
}

export default GeoPosition;
