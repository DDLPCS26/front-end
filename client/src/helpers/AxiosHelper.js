import axios from 'axios'; 

const key = localStorage.getItem('key');
const axiosHelper = axios.create()

axiosHelper.defaults.headers.common['Authorization'] = `Token ${key}`

export default axiosHelper 