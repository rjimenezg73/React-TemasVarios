import { useUserContext, useUserToggleContext } from "../UserProvider";

const Hijo = () => {

  const user = useUserContext();
  const cambiaLogin = useUserToggleContext();

  return (
    <div>

      <h2>Componente Hijo</h2>
      {user &&
        <div>
          <p>Hola {user.name}</p>
          <p>E-mail: {user.email}</p>
        </div>
      }
      <button onClick={cambiaLogin}>Cambia Login</button>
    </div>
  )
}

export default Hijo
