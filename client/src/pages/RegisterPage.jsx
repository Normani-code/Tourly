import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
    } catch (e) {
      alert('Registration failed. Please try again later');
    }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Registro</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input type="text"
                 placeholder="Nombre"
                 value={name}
                 onChange={ev => setName(ev.target.value)} />
          <input type="email"
                 placeholder="Ejemplo@email.com"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="Contraseña"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Registrar</button>
          <div className="text-center py-2 text-gray-500">
           🌴Ya eres un Tourly lover? <Link className="underline text-black" to={'/login'}>Iniciar Sesión</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
