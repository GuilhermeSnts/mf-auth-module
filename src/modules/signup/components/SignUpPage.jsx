import React from 'react'

function SignUpPage() {
  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="retype your password" />
      <button>submit</button>
    </div>
  );
}

export default SignUpPage;
