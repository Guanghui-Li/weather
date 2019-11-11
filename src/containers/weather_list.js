import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/chart";
import GoogleMaps from "../components/google_maps";

class WeatherList extends Component {
	renderWeather(cityData) {
		const { lon, lat } = cityData.city.coord;
		const name = cityData.city.name;
		const temperature = cityData.list.map(dt => {
			return dt.main.temp;
		});
		const pressure = cityData.list.map(dt => {
			return dt.main.pressure;
		});
		const humidity = cityData.list.map(dt => {
			return dt.main.humidity;
		});
		console.log(temperature);
		return (
			<tr key={name}>
				<td>
					<GoogleMaps lon={lon} lat={lat} />{" "}
				</td>
				<td>
					<Chart data={temperature} color='red' units='Kelvin' />
				</td>
				<td>
					<Chart data={pressure} color='blue' units='hpa' />
				</td>
				<td>
					<Chart data={humidity} color='green' units='%' />
				</td>
			</tr>
		);
	}
	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (Kelvin)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}
// function mapStateToProps(state){
// return { weather:state.weather };
// }
// ES6 equivalent for the function above
function mapStateToProps({ weather }) {
	return { weather };
}
export default connect(mapStateToProps)(WeatherList);
