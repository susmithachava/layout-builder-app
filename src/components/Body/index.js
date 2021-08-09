import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-container">
              <h3 className="left-nav">Left Navbar Menu</h3>
              <p className="item">Item1</p>
              <p className="item">Item2</p>
              <p className="item">Item3</p>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h3 className="content-heading">Content</h3>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-container">
              <h3 className="right-nav-heading">Right Navbar</h3>
              <div className="ad">Ad1</div>
              <div className="ad">Ad2</div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
