import axios from "axios";


axios.interceptors.request.use(config => {
	localStorage.setItem('isAuthenticated', false);
	config.headers.Authorization = `Token ${localStorage.token}`;
	config.baseURL = "http://localhost:8000/api/"
	return config;
}, error => error);