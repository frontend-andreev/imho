export default {
    getAvailableCountries(state) {
        return state.availableCountries
    },
    getAuthors(state) {
        return state.listOfAuthors
    },
    getPublications(state) {
        return state.listOfPublications
    },
    getArchive(state) {
        return state.listOfArchive
    },
    getAllPublications(state) {
        return state.listOfPublications.concat(state.listOfArchive)
    },
    getThemes(state) {
        return state.listOfThemes
    },
    getAuthorById(state) {
        return (id) => {
            return state.listOfAuthors.find((x) => x.id == id)
        }
    },
    getPublicationById(state) {
        return (id) =>
            state.listOfPublications.find((x) => x.id == id)
    },
    getRange(state) {
        return state.rangeForPeriod
    },
    getTextForPeriod(state) {
        return state.textForPeriod
    },
    getSizeOfContainer(state) {
        return state.mainContainer
    },
    getCurrentMode() {
        return JSON.parse(localStorage.getItem('mode'))
    }
}