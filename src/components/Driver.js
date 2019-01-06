import React from 'react'

export default class Driver extends React.Component { 
  state = {
    isHovered: false,
    defaultImageSrc: './images/via_logo.png'
  }
  handleMouseEnter = () => {
    this.setState({ isHovered: true })
  }
  handleMouseLeave = () => {
    this.setState({ isHovered: false })
  }
  handleImgError = (event) => {
    event.target.src = this.state.defaultImageSrc
  }
  render() {
    return (
      <div className="data-block" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="data-block__container">
          <div className="data-block__imgs-wrapper">
            <img 
              className="data-block__main-img"
              src={this.props.data.profile_image || this.state.defaultImageSrc} 
              onError={this.handleImgError}
            />
            <img 
              className="data-block__type-img"
              src={this.props.data.driverType.toLowerCase().trim() ===  'citizen' ? './images/citizen.svg' : './images/professional.svg'}
            />
          </div>
          <div className="data-block__text-container">
            <h2>{this.props.data.name}</h2>
            <div>Driver Rank: {this.props.data.driverRank}</div>
            {
              this.state.isHovered && 
              (
                <div>
                  <div>Phone Number: {this.props.data.phone}</div> 
                  <div>Email: {this.props.data.email}</div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
