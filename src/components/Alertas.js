import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { removeAlert } from '../redux/actions'

const TIMEOUT_ALERTAS = 3000

class Alertas extends Component {
  render() {
    return (
      <div>
        {
          this.props.alertas.map(alerta => {
            const clases = alerta.type === 'error'
              ? 'bg-red-100 border-red-400 text-red-700'
              : 'bg-green-100 border-green-400 text-green-700'

            setTimeout(() => this.props.removeAlert(alerta), TIMEOUT_ALERTAS)
            
            return (
              <div key={alerta.text} className={`${clases} border px-4 py-3 rounded relative`} role='alert'>
                {alerta.text}
              </div>
            )
          })
        }
      </div>
    )
  }
}

Alertas.propTypes = {
  alertas: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      type: PropTypes.string,
    })
  )
}

const mapStateToProps = (state) => ({
  alertas: state.alertas
})

const mapDispatchToProps = (dispatch) => ({
  removeAlert (alert) {
    dispatch(removeAlert(alert))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Alertas)
