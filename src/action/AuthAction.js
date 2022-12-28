import {authStatus} from "./Status";
import axios from "../helper/axios";
console.log(axios)

export const  LoginPage=(userLogin)=>{
	 
	return async (dispatch)=>{
		dispatch({type:authStatus.LOGIN_REQUEST});
		const res = await axios.post(`/login/`,userLogin);
		if(res.status===200){
            console.log(res)
			const {token,user} = res.data; 
			localStorage.setItem("token",token);
			localStorage.setItem("admin",JSON.stringify(user));
			console.log({user})
			dispatch({
				type:authStatus.LOGIN_SUCCESS,
				payload:{
					token,user
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}
