import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { 'API-KEY': '23007c70-d369-4578-ab95-a24535e880f8' },
})
export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 100) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
			.then(response => {
				return response.data
			})
	},
}
