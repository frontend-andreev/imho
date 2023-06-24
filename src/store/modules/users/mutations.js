export default {
    SET_USERS(state, data) {
        state.listOfUsers = data
    },
    changeCurrentUser(state, user) {
        state.currentUser = user
    },
    changeUserByLocalStorage(state) {
        state.currentUser = JSON.parse(localStorage.getItem('user'))
    },
}