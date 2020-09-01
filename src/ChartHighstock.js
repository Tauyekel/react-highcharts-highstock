import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as Highcharts from 'highcharts/highstock'

class ChartHighstock extends Component {

	componentDidMount() {
		this.createChart()
	}

	componentDidUpdate() {
		this.createChart()
	}

	createChart() {
		let formatData = []
		formatData = this.props.data.map(obj => {
			const date = obj['t'].split("-").reverse()
			const dateInSeconds = new Date(date[2], +date[1] - 1, +date[0] + 1).getTime()
			return [dateInSeconds, obj['v']]
		});

		/*console.log([...new Set(
			this.props.data.map(
				obj => obj['t'].split('-', 1).join('')
			)
		)])*/

		Highcharts.stockChart('chart', {
			rangeSelector: {
				selected: 5
			},

			title: {
				text: this.props.title
			},

			series: [{
				name: '',
				data: formatData,
				tooltip: {
					valueDecimals: 2
				}
			}]
		})
	}

	render() {
		return <div id='chart' />
	}
}

ChartHighstock.propTypes = {
	data: PropTypes.array,
	title: PropTypes.string
}

export default ChartHighstock
