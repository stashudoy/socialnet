// Create two constants for ActionCreators(functions) that below

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users:[
  
    ]
}



export const usersReduser = (state = initialState, action) => {  
    
    // Reducer - this function, that modify(change) state
    // For example some user click follos => dispatch(action<follow>) => this listen reducer and change store, whish rerendered(update) site

  
    switch(action.type) {

        case FOLLOW:
            return {
                ...state, 
                // users: [...state.users] equal users: state.users.map(u => u) p.s. run all elements with alias u
                users: state.users.map(u => {  // function map - create array like base array
                   if(u.id === action.userId) {
                    return {...u, followed: true}
                   }
                   return u
                }) 
            }

         
            case UNFOLLOW:
                return {
                    ...state, 
                    // users: [...state.users] equal users: state.users.map(u => u) p.s. run all elements with alias u
                    users: state.users.map(u => {  // function map - create array like base array
                       if(u.id === action.userId) {
                        return {...u, followed: false}
                       }
                       return u
                    }) 
                }

            case SET_USERS:
                return {
                    ...state,
                    users: action.users  // join two arays, one that was exist, and second that come from SET_USERS
                }    


        default: 
        return state





    }
}


// AC - Action Creator

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReduser