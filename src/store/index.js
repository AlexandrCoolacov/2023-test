import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
    ]
  },
  getters: {
  },
  mutations: {
    addTask(state, taskForm) {
      state.todoList.push(taskForm)
      localStorage.setItem('tasksArray', JSON.stringify(state.todoList))
    },
    delTask(state, task) {
      state.todoList = state.todoList.filter( i => i.id !== task.id)
      localStorage.setItem('tasksArray', JSON.stringify(state.todoList))
    },
    editTask( state, editedTask) {
      state.todoList = state.todoList.map(i => i.id === editedTask.id ? editedTask : i)
      localStorage.setItem('tasksArray', JSON.stringify(state.todoList))
    },
    getTasks( state) {
      state.todoList = JSON.parse(localStorage.getItem('tasksArray'))
    }
  },
  actions: {
  },
  modules: {
  }
})
