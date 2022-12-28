import {categoryStatus,cmsStatus} from "./Status";
import axios from "../helper/axios";

console.log(axios)

export const  GetCategoryAction=(userLogin)=>{
	 
	return async (dispatch)=>{
		dispatch({type:categoryStatus.CATEGORY_GET_REQUEST});
		const res = await axios.get(`/getcategories/`);
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:categoryStatus.CATEGORY_GET_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const  AddCategorAction=(data)=>{
	 
	return async (dispatch)=>{
		dispatch({type:categoryStatus.CATEGORY_ADD_REQUEST});
		const res = await axios.post(`/addcategory/`,data);
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:categoryStatus.CATEGORY_ADD_SUCCESS,
				payload:{
					categories
				}
			})
			alert("Categories Added")

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const DeleteCategoryAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:categoryStatus.CATEGORY_DELETE_REQUEST});
		const res = await axios.post(`/deletecategory/`,data);
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:categoryStatus.CATEGORY_DELETE_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const AddCmsAction=(data)=>{
	console.log(data)
	return async (dispatch)=>{
		dispatch({type:cmsStatus.CMS_REQUEST});
		const res = await axios.post(`/addcms/`,data);
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.CMS_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}


export const GetCmsAction=()=>{
	
	return async (dispatch)=>{
		dispatch({type:cmsStatus.CMS_GET_REQUEST});
		const res = await axios.post(`/getcms/`);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.CMS_GET_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const DeleteCmsAction=(data)=>{
	
	return async (dispatch)=>{
		dispatch({type:cmsStatus.CMS_DELETE_REQUEST});
		const res = await axios.post(`/deletecms/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.CMS_DELETE_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}
export const UpdateCmsAction=(data)=>{
	
	return async (dispatch)=>{
		dispatch({type:cmsStatus.CMS_UPDATE_REQUEST});
		const res = await axios.post(`/updatecms/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.CMS_UPDATE_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const AddCouponAction=(data)=>{
	console.log(data)
	return async (dispatch)=>{
		dispatch({type:cmsStatus.COUPON_REQUEST});
		const res = await axios.post(`/addcoupon/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.COUPON_SUCCESS,
				payload:{
					categories
				}
			})
			alert("Coupon Added")

		}else{
		dispatch({type:cmsStatus.COUPON_EXIST});
		alert("Coupon Code Already Exists")
	    }
	}
}



export const GetCouponAction=()=>{
	
	return async (dispatch)=>{
		dispatch({type:cmsStatus.COUPON_GET_REQUEST});
		const res = await axios.post(`/getcoupon/`);
		console.log("-------res.data-----------", res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.COUPON_GET_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const DeleteCouponAction=(data)=>{
	
	return async (dispatch)=>{
		dispatch({type:cmsStatus.COUPON_DELETE_REQUEST});
		const res = await axios.post(`/deletecoupon/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.COUPON_DELETE_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}


export const EditCouponAction=(data)=>{
	console.log(data)
	return async (dispatch)=>{
		dispatch({type:cmsStatus.COUPON_UPDATE_REQUEST});
		const res = await axios.post(`/editcoupon/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.COUPON_UPDATE_SUCCESS,
				payload:{
					categories
				}
			})
			

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}
