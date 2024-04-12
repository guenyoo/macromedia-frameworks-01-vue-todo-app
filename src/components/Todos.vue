<script setup lang="ts">
import { computed } from "vue";
import AddTodo from "./AddTodo.vue";
import Todo, { TodoProps } from "./Todo.vue";
import { handleLocalStorage } from "@/utils/handleLocalStorage";

const todos = handleLocalStorage(); // this updates via instance Cache

const openTodos = computed(() =>
  todos.value.filter((todo: TodoProps) => !todo.completed)
);
const completedTodos = computed(() =>
  todos.value.filter((todo: TodoProps) => todo.completed)
);

const completeTodo = (id: string) => {
  const todoToComplete = todos.value.find((todo) => todo.id === id);
  if (!todoToComplete) return;
  todoToComplete.completed = !todoToComplete?.completed;
};

const archiveTodo = (id: string) => {
  const todosToKeep = todos.value.filter((todo) => todo.id !== id);
  todos.value = todosToKeep;
};
</script>

<template>
  <section class="grid gap-5 p-5">
    <h2>Todos App</h2>
    <AddTodo />

    <h3 class="text-2xl">Open ToDo's</h3>
    <p v-if="!openTodos.length">Keine offenen Todos</p>
    <Todo
      :key="todo.id"
      :name="todo.name"
      :id="todo.id"
      :completed="todo.completed"
      @toggleCompleted="completeTodo"
      @archiveTodo="archiveTodo"
      v-for="todo in openTodos"
    />

    <h3 class="text-2xl">Completed ToDo's</h3>
    <p v-if="!completedTodos.length">Keine Abgeschlossenen Todos</p>
    <Todo
      :key="todo.id"
      :name="todo.name"
      :id="todo.id"
      :completed="todo.completed"
      @toggleCompleted="completeTodo"
      @archiveTodo="archiveTodo"
      v-for="todo in completedTodos"
    />
  </section>
</template>
