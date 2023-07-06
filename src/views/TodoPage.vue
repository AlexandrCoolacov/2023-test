<template>
  <div class="todo">
    <TodoList
        :todo-list="getAllTasks"
        @editTask="getEditTask"
    />
    <CreateTask
        :edited-task="editedTask"
        :style="{marginTop: '20px'}"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import CreateTask from "@/components/CreateTask";
export default {
  name: 'HomeView',
  components: {
    TodoList,
    CreateTask
  },

  created() {
    this.$store.commit('getTasks')
  },

  data() {
    return{
      editedTask: null,
    }
  },
  methods: {
    getEditTask(task) {
      this.editedTask = task
      console.log(task)
    }
  },
  computed: {
    getAllTasks() {
      return this.$store.state.todoList
    }
  },
}
</script>
