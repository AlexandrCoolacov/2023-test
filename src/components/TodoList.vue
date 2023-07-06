<template>
  <section>
    <div
        :style="{
            width: '600px',
            margin: '0 auto',
        }"
        class="list">
      <div
          v-if="todoList && todoList.length"
          class="isTaskExist">
        <div
            v-for="(task, i) in todoList"
            :key="i"
            class="div"
            :style="{
              marginBottom: '7px',
              display: 'flex',
              justifyContent: 'space-between',
            }"
        >
          <div class="info">
            {{ task.title }} : {{ task.desc}}
          </div>
          <div class="buttons">
            <button :style="{marginRight: '10px'}" @click="delTask(task)">
              Удалить
            </button>
            <button @click="editTask(task)">
              Редактировать
            </button>
          </div>

        </div>
      </div>
      <div v-else>
        Задач нет
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todoList: null
  },
  methods: {
    delTask(task) {
      this.$store.commit('delTask', task)
    },
    editTask(task) {
      this.$emit('editTask', task)
    }
  },
}
</script>

<style scoped lang="scss">

</style>
