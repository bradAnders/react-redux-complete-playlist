const initState = {
    posts: [
        {id: '1', title: 'Squirtle laid an egg', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dignissimos. Suscipit quod, perspiciatis unde iure nemo reprehenderit. Illum assumenda delectus deleniti expedita fuga possimus rem, totam, accusantium provident rerum quaerat!'},
        {id: '2', title: 'Charmander laid an egg', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dignissimos. Suscipit quod, perspiciatis unde iure nemo reprehenderit. Illum assumenda delectus deleniti expedita fuga possimus rem, totam, accusantium provident rerum quaerat!'},
        {id: '3', title: 'Pikachu laid an egg', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dignissimos. Suscipit quod, perspiciatis unde iure nemo reprehenderit. Illum assumenda delectus deleniti expedita fuga possimus rem, totam, accusantium provident rerum quaerat!'},
    ]
}

const rootReducer = (state=initState, action) => {
    switch (action.type) {
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id )
            };
        default:
            return state;
    }
}

export default rootReducer;
