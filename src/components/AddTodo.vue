<script setup lang="ts">
import clsx from "clsx";
import { computed, ref } from "vue";
import { handleLocalStorage } from "@/utils/handleLocalStorage";

const todos = handleLocalStorage();
const addTodoInput = ref("");
const disabled = computed(() => !addTodoInput.value);

const addTodo = () => {
  const newTodos = [
    ...todos.value,
    {
      completed: false,
      id: window.crypto.randomUUID(),
      name: addTodoInput.value,
    },
  ];
  todos.value = newTodos;
  addTodoInput.value = "";
};
</script>

<template>
  <section class="grid gap-3">
    <h3 class="text-2xl">Add ToDo</h3>
    <input
      class="border rounded p-3"
      type="text"
      name="add-todo"
      id="add-todo"
      placeholder="Nächstes Todo?"
      v-model="addTodoInput"
    />
    <button
      :class="
        clsx('p-3 rounded shadow cursor-pointer', {
          'bg-teal-200 text-teal-700': !disabled,
          'bg-neutral-200 text-neutral-700': disabled,
        })
      "
      @click="addTodo"
    >
      Todo hinzufügen
    </button>
  </section>
</template>
