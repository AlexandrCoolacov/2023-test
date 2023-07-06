<template>
  <section>
    <div
        class="task"
        :style="{
          display: 'flex',
          flexDirection: 'column',
          width: '600px',
          margin: '0 auto'
          }"
    >
      Название:
      <input v-model="taskForm.title" class="title">
      Описание:
      <input v-model="taskForm.desc" class="title">
    </div>
    <div
        class="buttons"
        :style="{marginTop: '20px' }"
    >
      <button
          :style="{marginRight: '20px'}"
          v-if="currentTaskToEdit"
          @click="saveTask">
        Сохранить
      </button>
      <button
          v-if="!currentTaskToEdit"
          @click="addTask">
        Добавить задачу
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CreateTask',
  props: {
    editedTask: null,
    todoList: null
  },

  data() {
    return {
      taskForm : {
        title: '',
        desc: ''
      },
      currentTaskToEdit: null
    }
  },
  methods: {
    addTask() {
      if (this.taskForm.title !== '' && this.taskForm.desc !== '') {
        this.$store.commit('addTask', {
          id: Math.random() *1000,
          ...this.taskForm })
      }
      for (let key in this.taskForm) {
        this.taskForm[key] = ''
      }
    },
    saveTask() {
      this.$store.commit('editTask',{id: this.editedTask.id, ... this.taskForm})
      for (let key in this.taskForm) {
        this.taskForm[key] = ''
      }
      this.currentTaskToEdit = null

    }
  },
  computed: {
    getAllTasks() {
      return this.$store.state.todoList
    }
  },
  watch: {
    editedTask: {
      immediate: false,
      deep: true,
      handler() {
        this.currentTaskToEdit = this.editedTask
        this.taskForm.title = this.currentTaskToEdit .title
        this.taskForm.desc = this.currentTaskToEdit .desc
        console.log(this.editedTask)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
