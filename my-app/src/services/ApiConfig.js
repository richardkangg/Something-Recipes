import Axios from 'axios'
const mockURL = `https://5dced56e75f9360014c26410.mockapi.io/`
const infoURL = 'https://api.edamam.com/api/nutrition-details'

export const api = Axios.create({
	baseURL: mockURL,
	headers: {
	}
})

export const infoApi = Axios.create({
	baseURL: infoURL,
	headers: {
		
	}
})

export default api;