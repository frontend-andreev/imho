export default {
    changeAvailableCountries(state, data) {
        let clearArray = () => {
            state.availableCountries.splice(0, state.availableCountries.length)
        }
        if (Array.isArray(data)) { // data - либо массив со всеми странами, либо навзание одной страны
            state.availableCountries = [...data]
        } else if (state.availableCountries.includes(data) && state.availableCountries.length == 1) {
            return
        } else {
            clearArray()
            state.availableCountries.push(data)
        }
    },
    changeSizeOfContainer(state, data) {
        state.mainContainer = data
    },
    SET_AUTHORS(state, data) {
        state.listOfAuthors = data
    },
    SET_PUBLICATIONS(state, data) {
        state.listOfPublications = data
    },
    SET_THEMES(state, data) {
        state.listOfThemes = data
    },
    SET_ARCHIVE(state, data) {
        state.listOfArchive = data
    },
    changeRangeForPeriod(state, data) {
        state.rangeForPeriod = data
    },
    changeTextForPeriod(state, data) {
        state.textForPeriod = data
    },
    changeMode(state, data) {
        if (data) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
        localStorage.setItem('mode', JSON.stringify(data))

    }
}