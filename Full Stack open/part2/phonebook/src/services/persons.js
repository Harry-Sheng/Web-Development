import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const create = (newObject) =>{
    return axios.post(baseUrl,newObject)
}

const deleteEntries = (id) =>{
    return axios.delete(baseUrl + '/' + id)
}

const update = (id, newObject) =>{
    console.log(`${baseUrl}/${id}`)
    return axios.put(`${baseUrl}/${id}`, newObject)
}
export default {
    create,
    deleteEntries,
    update
}