import { writable } from "svelte/store";
import {localStore} from "./localStore.js";

export const alert = writable("Wellcome to the Svelte");

const initialTodos = [
  { id: 1, name: 'Visit MDN web docs', completed: true },
  { id: 2, name: 'Complete the Svelte Tutorial', completed: false },
]

export const todos = localStore('mdn-svelte-todo', initialTodos);
