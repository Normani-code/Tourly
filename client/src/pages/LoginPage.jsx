import {Link, Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "../UserContext.jsx";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const {data} = await axios.post('/login', {email,password});
      setUser(data);
      alert('Inicio de Sesion Correcto');
      setRedirect(true);
    } catch (e) {
      alert('Error al Iniciar Sesion');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Inicio de sesion</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input type="email"
                 placeholder="Ejemplo@email.com"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="Contraseña"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Iniciar Sesion</button>
          <div className="text-center py-2 text-gray-500">
           😶‍🌫️ No eres miembro de Tourly? <Link className="underline text-black" to={'/register'}>Registrarte</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
