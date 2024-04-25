export default function useRemoveTodo(todoRef) {
    const remove = (todo)=>{
        todoRef.value.splice(todoRef.value.indexOf(todo),1)
    }
    const removeCompleted=function(){
        todoRef.value=todoRef.value.filter(todo=>!todo.completed)
    }
    return {
        remove,
        removeCompleted
    }
}