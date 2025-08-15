import React from "react"
import { connect } from "react-redux"
import Users from "./Users"
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer"


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispaptchToProps = (dispatch) => {        //dispatch - connect to store
    return {
        follow: (userId) => {
            dispatch(followAC(userId))   //dispatch always result, not function!! dispatch - send result to store 
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))   //dispatch always result, not function!! dispatch - send result to store 
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispaptchToProps)(Users)