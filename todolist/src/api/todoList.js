import Axios from 'axios'

export const TodoList = () => {
  return Axios.get('/api/todolist')
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      throw err
    })
}
