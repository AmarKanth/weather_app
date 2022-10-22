import './Search.css';

import {useState, useEffect} from 'react';
import axios from 'axios';
import Wrapper from "../layout/Wrapper";


const Search = () => {
	const [data, setData] = useState([]);
	const [term, setTerm] = useState("Hyderabad");

	useEffect(() => {
		
		const fetchData = async () => {
			const response = await axios.get(`search?q=${term}`);
			setData(response.data);
		}
		fetchData();

	}, [term]);

	const handle = (e) => {
		e.preventDefault();
		setTerm(e.target.value)
	}

	return(
		<Wrapper>
			<div className="search-container">
				<div className="active-cyan-4 mb-4">
					<input type="text" className="form-control" placeholder="Search City" aria-label="Search" defaultValue={"Hyderabad"} onChange={e => handle(e)} />
				</div>

				<div className="search-result">
					{data.map((obj) => {
						return(
	                			<ul key={obj.id}>
									<li>City : {obj.city}</li>
									<li>Temp : {obj.temp}</li>
									<li>Pressure : {obj.pressure}</li>
									<li>Humidity : {obj.humidity}</li>
									<li>Wind Speed : {obj.wind_speed}</li>
									<li>Description : {obj.description}</li>
								</ul>
	                		)
	                	})
					}
				</div>
			</div>
		</Wrapper>
	)
}

export default Search;