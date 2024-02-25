const LoginForm = ({ onLogin, onCreate }) => {
  // Handle either button click
  const handleSubmit = (e) => {
    e.preventDefault()
    // Grab relevant values
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    console.log('user: ', user)
    const clickType = e.nativeEvent.submitter.value
    
    if (clickType === 'login') {
      onLogin(user)
    } else {
      onCreate(user)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div><input placeholder="username" name="username"/></div>
      <div><input placeholder="password" name="password" type="password"/></div>
      <div>
        <button type="submit" name="submitType" value="login">login</button>
        <button type="submit" name="submitType" value="create">create</button>
      </div>
    </form>
  )
}

export default LoginForm