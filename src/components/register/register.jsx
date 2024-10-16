import "./register.css";

export function Register()
{
    return(
       <>
         <main>
            <form>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password"></input></dd>
                    <dt>Age</dt>
                    <dd><input type="number" /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" /></dd>
                </dl>
                <button className="btn-register">Register</button>
            </form>
         </main>
       </>
    )
}