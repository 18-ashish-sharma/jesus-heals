import '../signUp_Login/signUpLoginStyle.css'

export const SignUp_Login = ()=>{
    return(
    	<div className="main container">  	
		    <input type="checkbox" id="chk" aria-hidden="true"/>

			    <div className="signup">
				    <form method="post" >
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt"  placeholder="User name" required=""/>
                        <input type="email" name="email" placeholder="Email" required=""/>
                        <input type="text" name="contact" placeholder="Contact No." required=""/>
                        <input type="password" name="pswd" placeholder="Password" required=""/>
                        <button>Sign up</button>
				    </form>
			    </div>

			    <div className="login">
				    <form method="post">
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required=""/>
                        <input type="password" name="pswd" placeholder="Password" required=""/>
                        <button>Login</button>
                    </form>
			    </div>
	    </div>        

    )
}