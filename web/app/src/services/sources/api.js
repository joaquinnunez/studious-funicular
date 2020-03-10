import apisauce from 'apisauce'

const create = () => {
  const { REACT_APP_API_PROTOCOL, REACT_APP_API_HOST, REACT_APP_API_PORT } = process.env
  const protocol = (REACT_APP_API_PROTOCOL) ? REACT_APP_API_PROTOCOL : 'http'
  const hostname = (REACT_APP_API_HOST) ? REACT_APP_API_HOST : 'localhost'
  const port = (REACT_APP_API_PORT) ? REACT_APP_API_PORT : '8000'
  const baseURL = `${protocol}://${hostname}:${port}`

  const api = apisauce.create({
    baseURL,
    timeout: 10000
  })

  const fetch = () => api.get(`/countries`)
  const fetchCities = (countryCode) => api.get(`/cities/${countryCode}`)

  return {
    fetch,
    fetchCities
  }
}

export default {
  create
}
