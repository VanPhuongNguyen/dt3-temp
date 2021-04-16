import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/reducers'
import { useHistory } from 'react-router-dom'
import { getUser } from 'redux/actions/users'
import { message } from 'antd'

export default (ComposedClass: any, reload: boolean|null) => {
    const Auth = (props: any) => {
        const user = useSelector((state: RootState) => state.users.user)
        const getUserError = useSelector((state: RootState) => state.users.getUserError)
        const loginUserError = useSelector((state: RootState) => state.users.loginUserError)
        const history = useHistory()
        const dispatch = useDispatch()

        useEffect(() => {
            if (!user) {
                if (reload) {
                    history.push('/registerLogin')
                }
            } else {
                if (reload == false) {
                    history.push('/')
                }
            }

            if (getUserError === undefined) {
                dispatch(getUser())
            }

            if (loginUserError && loginUserError.includes('Incorrect password')) {
                message.error('password incorrect');
            }
          
            if (loginUserError && loginUserError.includes('User existed')) {
                message.error('user existed');
            }

        }, [loginUserError, getUserError, JSON.stringify(user)])

        return (
            <div>
                <ComposedClass {...props} />
            </div>
        )
    }

    return Auth
}