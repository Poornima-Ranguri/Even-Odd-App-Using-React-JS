import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrementing = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0

    const isEvenOrOddText = isEven ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="home">
        <h1 className="heading">Count {count}</h1>
        <p className="para">{isEvenOrOddText}</p>
        <button className="btn" type="button" onClick={this.onIncrementing}>
          Increment
        </button>
        <p className="paragraph">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
