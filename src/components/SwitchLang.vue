<script>
import store from "@/store";
export default {
    name: "SwitchLang",
    beforeRouteEnter(to) {
        store.dispatch('locale/setLang', to.params.langCode);
        store.commit('todos/mTranslateListe')
        if(store.state.todos.todo) {
            store.commit('todos/mTodo', store.state.todos.todo)
        }
    }
}
</script>

