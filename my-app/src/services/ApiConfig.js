import Axios from 'axios'
const mockURL = `https://5dced56e75f9360014c26410.mockapi.io/`

export const api = Axios.create({
	baseURL: mockURL,
	headers: {
	}
})

export default api;