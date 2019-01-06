import React from 'react'
import DriversList from './DriversList'
import Header from './Header'

export default class ViaApp extends React.Component {
  state = {
    drivers: [],
    filteredDrivers: [],
    driversListLoading: true,
    errorMessage: undefined
  }
  async componentDidMount() {
    try {
      const response = await fetch('http://private-05627-frontendnewhire.apiary-mock.com/contact_list')

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const drivers = await response.json()
      this.setState({ drivers, driversListLoading: false, filteredDrivers: drivers })
    } catch (error) {
      this.setState({ driversListLoading: false })
      this.setState({ errorMessage: error.message })
    }
  }
  filterDrivers = (event) => {
    const name = event.target.value
    const filteredDrivers = this.state.drivers.filter((driver) => driver.name.toLowerCase().includes(name.toLowerCase()))
    this.setState({ filteredDrivers })
  }
  render() {

    return (
      <div>
        <Header onInputChange={this.filterDrivers}/>
        <div className="container">
          {this.state.driversListLoading && <div className="spinner"></div>}
          {!this.state.driversListLoading && <DriversList list={this.state.filteredDrivers} />}
          {!this.state.driversListLoading && this.state.errorMessage && <div>{this.state.errorMessage}</div> }
        </div>
      </div>
    )
  }
}
