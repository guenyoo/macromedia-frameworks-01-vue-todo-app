<script setup lang="ts">
import clsx from "clsx";
const disabled = false;
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
    />
    <button
      :class="
        clsx('p-3 rounded shadow cursor-pointer', {
          'bg-teal-200 text-teal-700': !disabled,
          'bg-neutral-200 text-neutral-700': disabled,
        })
      "
    >
      Todo hinzufügen
    </button>
  </section>
</template>
