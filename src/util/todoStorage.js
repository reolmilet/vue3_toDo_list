const LOCAL_KEY = 'todos-vuejs';
export function generateId(){
    return Date.now()+Math.random().toString(16).substr(2, 4);
}
export function save(todos){
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}
export function fetch(){
    const result = localStorage.getItem(LOCAL_KEY);
    if (result) {
      return JSON.parse(result);
    }
    return [];
}
export function filter(todos, visibility = "all") {
    if (visibility === "all") {
      return todos;
    } else if (visibility === "active") {
      return todos.filter((it) => !it.completed);
    } else if (visibility === "completed") {
      return todos.filter((it) => it.completed);
    }
    throw new Error("invalid visibility value");
  }
// export function filter(todos, visibilityRef){
//     return todos.filter(todo => {
//         switch (visibilityRef.value) {
//             case 'active':
//                 return todos.filter(todo => !todo.completed);
//             case 'completed':
//                 return  todos.filter(todo => todo.completed);
//             default:
//                 return true;
//         }
//     });
// }