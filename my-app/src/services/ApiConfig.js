import Axios from 'axios'
const mockURL = `https://5dced56e75f9360014c26410.mockapi.io/`
const wineURL = 'https://api.spoonacular.com/food/wine/pairing/'

export const api = Axios.create({
	baseURL: mockURL,
	headers: {
	}
})

export const wineApi = Axios.create({
	baseURL: wineURL,
	headers: {
	}
})

export default api;