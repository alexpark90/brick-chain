import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme/mui-theme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {fade} from 'material-ui/utils/colorManipulator'
import { VisibleOnlyAuth, HiddenOnlyAuth } from '../../core/utils/wrappers'
import { HashRouter,
         Route,
         Redirect,
         Switch } from 'react-router-dom'
import {
  green700, orange700, teal700, cyan800, orange900
} from 'material-ui/styles/colors'
/*
 * Import global styles into entire app
 */
import './styles/app.scss'

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui'

/* application containers & components */
import { HeaderContainer, LeftNavBarContainer, HomeViewContainer, LoginContainer } from '../index'
import { Modal } from 'components'

injectTapEventPlugin()

const theme = getMuiTheme({
  palette: {
    primary1Color: fade(cyan800, 0.7),
    primary2Color: fade(cyan800, 0.8),
    accent1Color: orange700,
    accent2Color: orange900,
    pickerHeaderColor: cyan800,
    clockCircleColor: green700
  }
  // status: {
  //   danger: 'orange',
  // },
})

const styles = {
  background: {
    position: 'fixed',
    backgroundImage: 'url("https://www.avocoidentity.com/wp-content/uploads/2017/12/blockchain.jpg")',
    // backgroundColor: '#AED581',
    width: '100%',
    height: '900px',
    zIndex: -10
  }
}

class AppContainer extends Component {
  constructor (props) {
    super(props)
  }



  render () {
    const { ui, actions } = this.props

    const AfterLoginView = VisibleOnlyAuth(() =>
      <div>
        <HashRouter>
          <div>
            <HeaderContainer />
            <div className='container'>
              <Switch>
                <Route path='/home' component={HomeViewContainer} />
                <Redirect from='/' to='/home' />
              </Switch>
            </div>
            <LeftNavBarContainer />
          </div>
        </HashRouter>
        <Modal
          open={ui.showModal}
          actions={ui.modalActions}
          uiActions={actions.ui}
          title={ui.modalTitle} />
      </div>
    )

    const BeforeLoginView = HiddenOnlyAuth(() =>
      <div className='container center'>
        <LoginContainer />
      </div>
    )

    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <div style={styles.background} />
          <div style={{opacity: 1}}>
            <AfterLoginView />
            <BeforeLoginView />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps (state) {
  return {
    ui: state.ui
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
