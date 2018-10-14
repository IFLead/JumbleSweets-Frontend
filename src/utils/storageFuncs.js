export function toLocalStorage(item, name) {
  localStorage.setItem(name, JSON.stringify(item));
}

export function fromLocalStorage(name, defaultVal = undefined) {
  const item = localStorage.getItem(name);
  return item ? JSON.parse(item) : defaultVal;
}

export function toSessionStorage(item, name) {
  sessionStorage.setItem(name, JSON.stringify(item));
}

export function fromSessionStorage(name, defaultVal = undefined) {
  const item = sessionStorage.getItem(name);
  return item ? JSON.parse(item) : defaultVal;
}
