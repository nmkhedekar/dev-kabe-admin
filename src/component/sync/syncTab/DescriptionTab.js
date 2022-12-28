import React,{useEffect,useState} from 'react'
import {SyncDescriptionAction,SyncDescriptionActionNull} from "../../../action";
import {useSelector,useDispatch} from "react-redux";

export default function DescriptionTab() {
	const [username,setUsername] = useState("asw");
	const [password,setPassword] = useState("53d4ee58-72d0-46a4-9c42-e337aa417508");
	const [dateTime,setDateTime] = useState("");

	const auth = useSelector(state=>state.auth);
	const syncAuth = useSelector(state=>state.vendor);
	const dispatch = useDispatch();
	const synchronization = syncAuth.syncDescription;


	const syncDescription=()=>{
		const data = {username:username,password:password,dateTime:dateTime}
		dispatch(SyncDescriptionAction(data))
	}

	useEffect(()=>{
		dispatch(SyncDescriptionActionNull())
	},[])
	return (
		<div>
			
			<div className="row col-md-4">
			<div>
			<input type="text" className="form-control" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
			<input type="password" className="form-control" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
			<input type="datetime-local" onChange={(e)=>setDateTime(e.target.value)}/>
			</div>
			<button type="button" className="btn btn-primary" onClick={(e)=>syncDescription()}>Sync</button>
			</div>
		 
		</div>
	)
}