/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

import { todosReducer } from '../reducers/todosReducer'

const TodosContext = createContext()
const TodosUpdateContext = createContext()

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, [])

  return (
    <TodosContext.Provider value={todos}>
      <TodosUpdateContext.Provider value={dispatch}>
        {children}
      </TodosUpdateContext.Provider>
    </TodosContext.Provider>
  )
}

export default TodosProvider
