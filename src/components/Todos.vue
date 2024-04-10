<script setup lang="ts">
import { reactive, ref } from "vue";
import AddTodo from "./AddTodo.vue";
import Todo from "./Todo.vue";

const myReactiveVariable = reactive({ count: 0 });
const myRefVariable = ref(0);

const incrementStuff = () => {
  myReactiveVariable.count++;
};

const decrementStuff = () => {
  myReactiveVariable.count--;
};
</script>

<template>
  <section class="grid gap-3 p-5">
    <h2>Todos App</h2>
    <AddTodo />
    <h3 class="text-2xl">Open ToDo's</h3>
    <Todo name="testName" />

    <h3 class="text-2xl">Completed ToDo's</h3>
    Reactive: {{ myReactiveVariable.count }} Ref: {{ myRefVariable }}
    <button
      class="border bg-violet-300 p-3 rounded text-violet-900"
      @click="incrementStuff"
    >
      Mehr!
    </button>
    <button
      class="border bg-violet-300 p-3 rounded text-violet-900"
      @click="decrementStuff"
    >
      Weniger!
    </button>
  </section>
</template>
