import{onMounted, onUnmounted, ref,computed} from'vue'
import { filter } from '../util/todoStorage'
export default function useFilter(todosRef) {
    const validHash = ["all", "active", "completed"];
    const visibilityRef = ref('all')
    const onHashChange = () => {
        const hash = location.hash.replace(/#\/?/, "");
        if (validHash.includes(hash)) {
          //有效的
          visibilityRef.value = hash;
        } else {
          location.hash = "";
          visibilityRef.value = "all";
        }
      };
    onMounted(
        ()=>{
            window.addEventListener('hashchange',onHashChange)
        }
    )
    onUnmounted(
        ()=>{
            window.removeEventListener('hashchange',onHashChange)
        }
    )
   
    const filteredTodosRef = computed(() => {
        return filter(todosRef.value, visibilityRef.value);
      });
      const remainingRef = computed(() => {
        return filter(todosRef.value, "active").length;
      });
    
      const completedRef = computed(() => {
        console.log(filter(todosRef.value, "completed").length)
        return filter(todosRef.value, "completed").length;
        
      });
    return {
        visibilityRef,
        filteredTodosRef,
        remainingRef,
        completedRef,

    }
}