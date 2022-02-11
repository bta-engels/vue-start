<script>
import store from "@/store";
export default {
    name: "SwitchLang",
    beforeRouteEnter(to) {
        store.dispatch('locale/setLang', to.params.langCode);
        try {
            store.commit('todos/mTranslateListe')
            if(store.state.todos.todo.id) {
                store.commit('todos/mTodo', store.state.todos.todo)
            }
        } catch (e) {
            alert(e)
        }
    },
}
</script>

