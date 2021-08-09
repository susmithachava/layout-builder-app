import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './index.css'

class Layout extends Component {
  render() {
    return (
      <div className="layout-container">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default Layout
