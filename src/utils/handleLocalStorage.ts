import { TodoProps } from "@/components/Todo.vue";
import { Ref, ref, watch } from "vue";

let todosInstance: Ref<TodoProps[]>;

export function handleLocalStorage() {
  if (todosInstance) {
    return todosInstance;
  }

  // get Todos from LocalStorage
  const localStorageItems = localStorage.getItem("todos") || JSON.stringify([]);

  // Create a reactive Variable from LocalStorage Items
  const todos = ref(JSON.parse(localStorageItems));

  // Watcher to update localStorage when todos change
  watch(
    todos,
    (newValue) => {
      localStorage.setItem("todos", JSON.stringify(newValue));
    },
    { deep: true }
  );

  todosInstance = todos;
  return todosInstance;
}
