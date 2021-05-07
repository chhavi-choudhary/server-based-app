export default (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
            // const updateUsers = state.users.map(user => {
            //     if (user.id === updateUser.id) {
            //         return updateUser;
            //     }
            //     return user;
            // })
            // return {
            //     ...state,
            //     users: updateUsers
            // }

        default:
            return state;
    }
}