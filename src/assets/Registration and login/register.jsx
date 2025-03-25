const Register = () => {
    return ( 
      <form className="form">
      <div className="flex-column">
        <label>Name</label>
      </div>
      <div className="inputForm">
        <svg height="60" viewBox="0 -9 32 32" width="40" xmlns="http://www.w3.org/2000/svg">
          <g id="Layer_3" data-name="Layer 3">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
          </g>
        </svg>
        <input type="text" className="input" placeholder="Enter your Name" />
      </div>
      
      <div className="flex-column">
        <label>Email</label>
      </div>
      <div className="inputForm">
        <input type="text" className="input" placeholder="Enter your Email" />
      </div>
      
      <div className="flex-column">
        <label>Password</label>
      </div>
      <div className="inputForm">
        <input type="password" className="input" placeholder="Enter your Password" />
      </div>
      
      <button className="button-submit">Sign Up</button>
      <p className="p">Already have an account? <span className="span">Login</span></p>
      <div className="flex-row">
        <button className="btn google">Google</button>
      </div>
    </form>
     );
}
 
export default Register;