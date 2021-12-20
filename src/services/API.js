import axios from 'axios'


const { REACT_APP_BASE_URL } = process.env

const BASE_URL = REACT_APP_BASE_URL || 'http://localhost:4000'


const getQuery = (type, value) => {
	return axios.get(`${BASE_URL}/exams/${type}/${value}`)
}

const sendExam = exam => {
	return axios.post(`${BASE_URL}/send`, exam)
}

export {
	getQuery,
	sendExam
}