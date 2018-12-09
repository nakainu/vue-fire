<template>
<div id="app">
  <div>
    <label>Name:</label>
    <input type="text" v-model="name" />
    <label>Detail:</label>
    <input type="text" v-model="detail" />
    <button @click="addTodo()">Add</button>
  </div>

  <div>
    <ul>
      <li v-for="todoName of todos" v-bind:key="todoName['.key']">
        <div v-if="!todoName.edit">
          <label>Name:</label>
          <p>{{ todoName.name }}</p>
          <label>Detail:</label>
          <p>{{ todoName.detail }}</p>
          <button @click="removeTodo(todoName['.key'])">Remove</button>
          <button @click="setEditTodo(todoName['.key'])">Edit</button>
        </div>
        <div v-else>
          <input type="text" v-model="todoName.name">
          <input type="text" v-model="todoName.detail">
          <button @click="saveEdit(todoName)">Save</button>
          <button @click="cancelEdit(todoName['.key'])">Cancel</button>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {
  todosRef
} from './firebase';

export default {
  data() {
    return {
      name: '',
      detail: ''
    }
  },
  created() {
  },
  firebase: {
    todos: todosRef
  },
  methods: {
    addTodo() {
      todosRef.push({
        name: this.name,
        detail: this.detail,
        edit: false
      })
      this.name = '';
      this.detal = '';
    },
    removeTodo(key) {
      todosRef.child(key).remove();
    },
    setEditTodo(key) {
      todosRef.child(key).update({
        edit: true
      })
    },
    cancelEdit(key) {
      todosRef.child(key).update({
        edit: false
      })
    },
    saveEdit(todo) {
      const key = todo['.key'];
      todosRef.child(key).set({
        name: todo.name,
        detail: todo.detail,
        edit: false
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: transparent;
  border: 2px solid brack;
}
</style>
