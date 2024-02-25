const LoginForm = ({ onLogin, onCreate, onLogout, user }) => {
  // Handle either button click
  const handleSubmit = (e) => {
    e.preventDefault()
    // Grab relevant values
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    // distinguish button clicked
    const clickType = e.nativeEvent.submitter.value
    if (clickType === 'login') {
      onLogin(user)
    } else {
      onCreate(user)
    }
  }

  return (
    <div>
      { user
      ? <div className="username-header">
            <p><strong>{user.username}</strong> is logged in</p>
            <button onClick={onLogout}>logout</button>
        </div> 
      : <form onSubmit={handleSubmit}>
          <div><input placeholder="username" name="username"/></div>
          <div><input placeholder="password" name="password" type="password"/></div>
          <div>
            <button type="submit" name="submitType" value="login">login</button>
            <button type="submit" name="submitType" value="create">create</button>
          </div>
        </form>
      }
    </div>
  )
}

export default LoginForm