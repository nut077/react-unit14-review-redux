export function saveState(state) {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.log(e);
  }
}

export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}