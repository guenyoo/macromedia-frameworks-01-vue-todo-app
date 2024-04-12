<script setup lang="ts">
import ArchiveIcon from "@/assets/archive.svg";

export type TodoProps = { name: string; completed: boolean; id: string };
const { name, completed, id } = defineProps<TodoProps>();
</script>

<template>
  <article
    class="grid gap-3 grid-cols-3 border border-slate-200 py-3 bg-slate-100"
  >
    <input
      type="checkbox"
      :id="id"
      name="name"
      :checked="completed"
      @change="$emit('toggleCompleted', id)"
    />
    <label :for="id">{{ name }}</label>

    <button @click="$emit('archiveTodo', id)">
      <ArchiveIcon class="size-5" />
    </button>
  </article>
</template>
