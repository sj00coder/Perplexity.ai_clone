import { v4 as uuidv4 } from 'uuid';
export function submitSearchQuery(text) {
  const id = uuidv4();
  window.localStorage.setItem(id, text);
  return id;
}

export function getSearchQuery(id) {
  return window.localStorage.getItem(id);
}
