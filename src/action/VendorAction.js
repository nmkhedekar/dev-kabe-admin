import React from 'react';
import {vendorStatus,syncStatus} from "./Status";
import axios from "../helper/axios";

export const VendorAction=()=> {
	console.log("get Vendor Hitted")
	return async (dispatch)=>{
		dispatch({type:vendorStatus.vendor_REQUEST});
		const res = await axios.get(`/getVendor/`);
		if(res.status===200){
            console.log(res)
            const dt = res.data;
			 
			dispatch({
				type:vendorStatus.vendor_SUCCESS,
				payload:{
					dt
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const updateVendorStatus=(data)=>{
	console.log(data);
	return async(dispatch)=>{
		dispatch({type:vendorStatus.vendor_STATUS_REQUEST});
		const res = await axios.post(`/statusUpdate`,data)
		console.log(res.data);
		if(res.status===200){
			const statusData = res.data;
			dispatch({
				type:vendorStatus.vendor_STATUS_SUCCESS,
				payload:{
					statusData
				}
			})
		}else{
			if(res.status===201){
				console.log(res.data);
			}
		}
	}
}


export const vendorDelete=(data)=>{
	console.log(data);
	return async(dispatch)=>{
		dispatch({type:vendorStatus.vendor_DELETE_REQUEST});
		const res = await axios.post(`/vendorDelete`,data)
		console.log(res.data);
		if(res.status===200){
			const deleteStatus = res.data;
			dispatch({
				type:vendorStatus.vendor_DELETE_SUCCESS,
				payload:{
					deleteStatus
				}
			})
		}else{
			if(res.status===201){
				console.log(res.data);
			}
		}
	}
}

export const vendorEdit=(id)=>{
	const data={id:id}
	return async(dispatch)=>{
		dispatch({type:vendorStatus.vendor_EDIT_REQUEST});
		const res = await axios.post(`/vendorEdit`,data)
		console.log(res.data);
		if(res.status===200){
			const editStatus = res.data;
			dispatch({
				type:vendorStatus.vendor_EDIT_SUCCESS,
				payload:{
					editStatus
				}
			})
		}else{
			if(res.status===201){
				console.log(res.data);
			}
		}
	}
}
export const updateVendor=(data)=>{
	
	return async(dispatch)=>{
		dispatch({type:vendorStatus.vendor_UPDATE_REQUEST});
		const res = await axios.post(`/updateStatus`,data)
		console.log(res.data);
		if(res.status===200){
			const updateStatus = res.data;
			dispatch({
				type:vendorStatus.vendor_UPDATE_SUCCESS,
				payload:{
					updateStatus
				}
			})
		}else{
			if(res.status===201){
				console.log(res.data);
			}
		}
	}
}
export const UploadBulk=(data)=>{
	 console.log(data);
 	return async(dispatch)=>{  
		dispatch({type:vendorStatus.vendor_BULK_REQUEST});
		const res = await axios.post(`https://appapi.albionline.com/api/vendorDescription`,data)
		 
		if(res.status===200){
			const vendorBulkStatus = res.data;
			dispatch({
				type:vendorStatus.vendor_BULK_SUCCESS,
				payload:{
					vendorBulkStatus
				}
			})
		}else{
			if(res.status===201){
				console.log(res.data);
			}
		}
	}
}


 
export const vendorAdd=(data)=>{
	return async(dispatch)=>{
		dispatch({type:vendorStatus.vendor_UPDATE_REQUEST});
		const res = await axios.post(`/BusinessReg`,data)
		console.log(res.data);
		if(res.status===200){
			const updateStatus = res.data;
			dispatch({
				type:vendorStatus.vendor_ADD_SUCCESS,
				payload:{
					updateStatus
				}
			})
		}else{
			if(res.status===201){
				console.log(res.data);
			}
		}
	}
}


export const vendorDetails=(id)=> { 
	const data={id:id}
	return async (dispatch)=>{
		dispatch({type:vendorStatus.vendor_REQUEST});
		const res = await axios.post(`/getById`,data)
		if(res.status===200){ 
            const dt = res.data;   
			dispatch({
				type:vendorStatus.vendor_SUCCESS,
				payload:{ 
					dt
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}


export const SyncDescriptionActionNull=()=>{
	return (dispatch)=>{
		dispatch({type:syncStatus.SYNC_DESCRIPTION_FAILED}) 

	}
}
export const SyncDescriptionAction=(data)=>{
	return async(dispatch)=>{ 
		dispatch({type:syncStatus.SYNC_DESCRIPTION_REQUEST})
		const res = await axios.post(`/livesyncdescription/`,data);
		console.log(res.data)
		if(res.data){
            console.log(res)
            const dt = res.data;
			 
			dispatch({type:syncStatus.SYNC_DESCRIPTION_SUCCESS})

		}else{
		if(res.status===201){
			console.log(res.data);
		}

	}
}
}

export const SyncStockActionNull=()=>{
	return (dispatch)=>{
		dispatch({type:syncStatus.SYNC_STOCK_FAILED}) 

	}
}
export const SyncStockAction=(data)=>{
	return async(dispatch)=>{ 
		dispatch({type:syncStatus.SYNC_STOCK_REQUEST})
		const res = await axios.post(`/livesyncstock/`,data);
		console.log(res.data)
		if(res.data){
            console.log(res)
            const dt = res.data;
			 
			dispatch({type:syncStatus.SYNC_STOCK_SUCCESS})

		}else{
		if(res.status===201){
			console.log(res.data);
		}

	}
}
}