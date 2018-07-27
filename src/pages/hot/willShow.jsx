import React, { Component } from 'react'

class willShowMovie extends Component {
  render () {
    return (
      <section>
        即将上映
        {JSON.stringify(this.props.list)}
      </section>
    )
  }
}

export default willShowMovie
