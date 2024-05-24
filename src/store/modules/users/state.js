const state = {
        listOfUsers: [{
        id: 1,
        login: '123',
        password: '123',
        name: 'Даниил',
        surname: 'Андреев',
        roles: ['администратор'],
        availableCountries: ['RUS']

    }, {
        id: 2,
        login: 'test',
        password: 'test',
        name: 'Кто-то',
        surname: 'Кто-то',
        roles: ['администратор'],
        availableCountries: ['RUS']
    }],
    currentUser: null
}

export default state
