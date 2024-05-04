import axios from "axios"
import { fetchStart } from "../features/authSlice"
import ( useDispatch ) from "react-redux"

export const login = async (userData) => {
    const BASE_URL = "https://10117.fullstack.clarusway.com"

    dispatch(fetchStart())

    try {
         const data = await axios(`${BASE_URL}/auth/login`, userData )
         console.log(data)
    } catch (error) {
        console.log(error)
    }

   
}