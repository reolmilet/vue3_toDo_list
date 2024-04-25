import { ref,computed } from "vue";
export default function useEditTodo(todoRef){
    const editingTodoRef = ref(null)
    let originalTitle = ''
    const editTodo=(todo)=>
    { originalTitle=todo.title
        editingTodoRef.value=todo
       
    }
    const doneTodo=(todo)=>{
        editingTodoRef.value=null
        const title =todo.title.trim()
        if(title){
            todoRef.value=title
        }
        else{
            console.log(todoRef.value.indexOf(todo))
            todoRef.value.splice(todoRef.value.indexOf(todo),1)
        }

    }
    const cancelEdit=(todo)=>{
         editingTodoRef.value=null;
        todo.title=originalTitle
       
        
    }
    const allDone=computed(
        {
            get(){
                todoRef.value.filter(todo=>todo.completed).length===0
                
            },
            set(bo){
                todoRef.value.forEach(todo=>todo.completed=bo)
            }
        }
    )
    return {editingTodoRef,
    editTodo,
    doneTodo,
    cancelEdit,
    allDone

}
}