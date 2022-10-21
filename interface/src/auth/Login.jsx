import './Login.css';

import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const Login = () => {
	const navigate = useNavigate();

	const [data, setData] = useState({
		email: '',
		password: ''
	})

	const handle = (e) => {
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
	}

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();

		await axios.post('login/', data).then(res => {
			console.log(res.data)
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('isAuthenticated', true)
			navigate("/search");
		}).catch(error => {
			localStorage.removeItem('token');
			localStorage.removeItem('isAuthenticated');
		})
	}

	return (
		<form className="form-signin" onSubmit={submit}>
		    <h1 className="h3 mb-3 font-weight-normal">SignIn</h1>
		    <input type="email" className="form-control" placeholder="Email address" id="email" onChange={e => handle(e)} />
		    <input type="password" className="form-control" placeholder="Password" id="password" onChange={e => handle(e)} />
		    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
		</form>
	)
}

export default Login;