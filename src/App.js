import React, {Component} from 'react'
import cloneDeep from 'lodash/cloneDeep'

import DataP from './data/precipitation'
import DataT from './data/temperature'
import ChartHighstock from './ChartHighstock'

class App extends Component {
	state = {
		data: cloneDeep(DataT),
		title: 'Temperature'
	}

	temperatureInHighchartSelected = () => {
		this.setState({
			data: cloneDeep(DataT),
			title: 'Temperature'
		})
	}

	precipitationInHighchartSelected = () => {
		this.setState({
			data: cloneDeep(DataP),
			title: 'Precipitation'
		})
	}

	render() {
		const {data, title} = this.state
		const content = <ChartHighstock data={data} title={title} />

		return (
			<div className="App">
				<div className="container">
					<div className="nav">
						<button
							type='button'
							className={"btn btn-highchart " + (title === 'Temperature' ? 'active' : '')}
							onClick={this.temperatureInHighchartSelected}
						>
							Temperature
						</button>

						<button
							type='button'
							className={"btn btn-highchart " + (title === 'Precipitation' ? 'active' : '')}
							onClick={this.precipitationInHighchartSelected}
						>
							Precipitation
						</button>
					</div>
					{content}
				</div>
			</div>
		)
	}
}

export default App
