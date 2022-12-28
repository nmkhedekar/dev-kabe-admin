import React,{useEffect,useState} from 'react'
import {Link,Redirect, useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import {LoginPage} from "../action";

export default function Login() {
  const navigate = useNavigate();
  const auth = useSelector(state=>state.auth); 
   const dispatch =  useDispatch()

   const [email,setEmail] = useState("");
   const [password,setPassword] = useState(""); 

   const loginData=()=>{
         const data={email,password};
         dispatch(LoginPage(data));
    }

 
    useEffect(() => {
      if(auth?.authenticate){
      navigate("/home");
    } 
    }, [auth])



 
	return (
		<div className="hold-transition login-page">
		<div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html">
      <a aria-current="page" className="MobileHeaderTop__logo active" href="/en/">
  <svg
    id="Layer_1"
    x="0px"
    y="0px"
    width="84.241px"
    height="36.1206px"
    viewBox="0 0 84.241 36.1206"
    xmlSpace="preserve"
  >
    <g>
      <path
        d="M42.2637,22.3956c0,3.6036-2.5371,5.2146-5.0335,5.2146c-2.7783,0-4.9125-1.913-4.9125-5.0537 c0-3.2212,2.114-5.1942,5.0736-5.1942C40.3107,17.3622,42.2637,19.4157,42.2637,22.3956z M34.8745,22.496 c0,1.8926,0.9261,3.322,2.4363,3.322c1.4094,0,2.3959-1.389,2.3959-3.362c0-1.5302-0.6845-3.2819-2.3759-3.2819 C35.5792,19.174,34.8745,20.8654,34.8745,22.496z"
        style={{ fill: "rgb(249, 165, 26)" }}
      />
      <path
        d="M43.9347,20.503c0-1.1277-0.0204-2.0738-0.0808-2.9195h2.1746l0.1208,1.4698h0.0604 c0.4228-0.7649,1.4898-1.691,3.1209-1.691c1.711,0,3.4828,1.1073,3.4828,4.2077v5.8186h-2.4763v-5.5366 c0-1.4094-0.5236-2.4766-1.8728-2.4766c-0.9865,0-1.671,0.7049-1.9326,1.4497c-0.0804,0.2216-0.1008,0.5236-0.1008,0.8053v5.7582 h-2.4963V20.503z"
        style={{ fill: "rgb(249, 165, 26)" }}
      />
      <path
        d="M55.0885,13.0938h2.4963v14.2948h-2.4963V13.0938z"
        style={{ fill: "rgb(249, 165, 26)" }}
      />
      <path
        d="M62.5377,14.8455c0,0.7449-0.5437,1.3286-1.4094,1.3286c-0.8257,0-1.3693-0.5837-1.3693-1.3286 c0-0.7653,0.564-1.3489,1.3893-1.3489C61.9941,13.4966,62.5174,14.0803,62.5377,14.8455z"
        style={{ fill: "rgb(249, 165, 26)" }}
      />
      <rect
        x="59.9002"
        y="17.5835"
        width="2.4963"
        height="9.8051"
        style={{ fill: "rgb(249, 165, 26)" }}
      />
      <path
        d="M64.692,20.503c0-1.1277-0.0204-2.0738-0.0808-2.9195h2.1746l0.1208,1.4698h0.0604 c0.4228-0.7649,1.4898-1.691,3.1207-1.691c1.711,0,3.4828,1.1073,3.4828,4.2077v5.8186h-2.4763v-5.5366 c0-1.4094-0.5236-2.4766-1.8726-2.4766c-0.9865,0-1.671,0.7049-1.9326,1.4497c-0.0804,0.2216-0.1008,0.5236-0.1008,0.8053v5.7582 H64.692V20.503z"
        style={{ fill: "rgb(249, 165, 26)" }}
      />
      <path
        d="M77.597,23.1805c0.0604,1.7718,1.4497,2.5371,3.0199,2.5371c1.1477,0,1.9734-0.1612,2.7183-0.4429 l0.3624,1.711c-0.8457,0.3424-2.0134,0.6041-3.4228,0.6041c-3.1811,0-5.0537-1.953-5.0537-4.9526 c0-2.7183,1.651-5.275,4.7921-5.275c3.1808,0,4.2277,2.6171,4.2277,4.7713c0,0.4632-0.04,0.8257-0.0804,1.0469H77.597z  M81.9055,21.4491c0.0204-0.9061-0.3825-2.3959-2.0334-2.3959c-1.5302,0-2.1743,1.3893-2.275,2.3959H81.9055z"
        style={{ fill: "rgb(249, 165, 26)" }}
      />
      <path
        d="M6.387,0c2.565,0,4.6445,2.0797,4.6445,4.6443 c0,2.5641-2.0795,4.6447-4.6445,4.6447c-2.5643,0-4.644-2.0806-4.644-4.6447C1.743,2.0797,3.8227,0,6.387,0z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "rgb(236, 28, 36)"
        }}
      />
      <path
        d="M16.7816,20.5806c-0.4366,0-0.6544,0.2511-0.6544,0.7527v7.7401 c0,0.5035,0.2178,0.7545,0.6544,0.7545c0.4355,0,0.6515-0.251,0.6515-0.7545v-7.7401 C17.4331,20.8316,17.2171,20.5806,16.7816,20.5806z"
        style={{ fill: "rgb(236, 28, 36)" }}
      />
      <path
        d="M5.0452,24.8746v4.1988c0,0.5035,0.2203,0.7545,0.6546,0.7545c0.4379,0,0.6558-0.251,0.6558-0.7545 v-5.0746C5.4764,24.1582,5.043,24.4505,5.0452,24.8746z"
        style={{ fill: "rgb(236, 28, 36)" }}
      />
      <path
        d="M24.6645,12.7736c0.0463,0.1948,0.0713,0.3981,0.0713,0.6075c0,0.7155-0.2894,1.3629-0.7567,1.83 c-0.4675,0.4671-1.1147,0.7571-1.8291,0.7571v0.0009h-0.0007v-0.0009c-0.7149,0-1.3615-0.29-1.8291-0.7571 c-0.4685-0.4675-0.7583-1.1149-0.7583-1.83c0-0.0567,0.0022-0.1134,0.006-0.1687C13.556,14.511,8.4154,17.885,0,15.0689 c0,5.7437,0,17.2319,0,17.2319h0.0031c0.0009,1.0538,0.4281,2.0111,1.1193,2.7001c0.6894,0.6903,1.6463,1.1193,2.7003,1.1198 h19.1259c1.0547-0.0005,2.0093-0.4295,2.7007-1.1198c0.6896-0.6889,1.1187-1.6462,1.1187-2.7005l0.0035-19.2682 C26.046,12.8958,25.3453,12.8134,24.6645,12.7736z M8.6191,31.4197H6.3556v-0.4485c-0.178,0.4047-0.7093,0.6075-1.5989,0.6075 c-1.3159,0-1.9741-0.584-1.9741-1.7507v-4.4658c0-0.5189,0.1539-0.9657,0.4552-1.3531c0.3049-0.3825,0.9597-0.866,1.9684-1.4399 c0.7023-0.3312,1.0859-0.5973,1.1494-0.797v-1.9292c0-0.5047-0.2179-0.7562-0.6558-0.7562c-0.4344,0-0.6546,0.2515-0.6546,0.7562 v2.1289H2.7826v-2.1289c0-0.6651,0.176-1.1884,0.5278-1.5719c1.816,0.3946,3.4778,0.4764,5.0412,0.3658 c0.178,0.3303,0.2675,0.7323,0.2675,1.2061V31.4197z M12.3999,31.4197h-2.2632V18.4296c0.772-0.1245,1.5233-0.287,2.2632-0.4707 V31.4197z M19.6961,29.0734c0,0.994-0.214,1.6507-0.648,1.969c-0.4317,0.3152-0.9683,0.4755-1.6059,0.4755 c-0.4946,0-0.9314-0.1638-1.315-0.4853v0.387h-2.2626V17.5684c0.7585-0.2138,1.5103-0.4384,2.2626-0.6544v2.511 c0.4642-0.29,1.0686-0.4357,1.8105-0.4357c0.4552,0,0.8619,0.1386,1.2229,0.4171c0.3573,0.2789,0.5355,0.9201,0.5355,1.9269 V29.0734z M23.4356,31.4197h-2.2385V17.4945h2.2385V31.4197z"
        style={{ fill: "rgb(236, 28, 36)" }}
      />
      <path
        d="M26.7715,3.9031v5.954C14.473,9.0574,11.6525,18.5146,0,13.0853V8.9365 C11.5175,15.1526,14.6071,3.1424,26.7715,3.9031z"
        style={{ fill: "rgb(249, 165, 26)" }}
      />
      <path
        d="M22.1491,11.4271c1.0784,0,1.9528,0.8749,1.9528,1.9535 c0,1.0781-0.8745,1.9531-1.9528,1.9531c-1.0784,0-1.9528-0.8749-1.9528-1.9531C20.1963,12.302,21.0708,11.4271,22.1491,11.4271z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "rgb(249, 165, 26)"
        }}
      />
    </g>
  </svg>
</a>

    </a>
  </div>
  {/* /.login-logo */}
  <div className="login-box-body">
    <p className="login-box-msg">Sign in to start your session</p>
    <form>
      <div className="form-group has-feedback">
        <input type="email" 
              className="form-control" 
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)} />
        <span className="glyphicon glyphicon-envelope form-control-feedback icoColor" />
      </div>
      <div className="form-group has-feedback">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />
        
        <span className="glyphicon glyphicon-lock form-control-feedback" />
      </div>
      <div className="row">
        <div className="col-xs-8">
          <div className="checkbox icheck">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
        </div>
        {/* /.col */}
        <div className="col-xs-4">
          <button 
          type="button" 
          className="btn btn-warning btn-block btn-flat"
          onClick={(e)=>loginData()}>
            Sign In
          </button>
        </div>
        {/* /.col */}
      </div>
    </form>
    {/*<div className="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" className="btn btn-block btn-social btn-facebook btn-flat">
        <i className="fa fa-facebook" /> Sign in using Facebook
      </a>
      <a href="#" className="btn btn-block btn-social btn-google btn-flat">
        <i className="fa fa-google-plus" /> Sign in using Google+
      </a>
    </div>*/}
    {/* /.social-auth-links */}
    <a href="#">I forgot my password</a>
    <br />
    <Link to="/reg" className="text-center">
      Register a new membership
    </Link>
  </div>
  {/* /.login-box-body */}
</div>

			
		</div>
	)
}