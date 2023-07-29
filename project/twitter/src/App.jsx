import { useState } from 'react'
import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const App = () => {
    //const formaUserName = (userName) => `@${userName}`

    //const formattedUsername = <span>@{userName}</span>

    //const [name, setName] = useState('midudev')

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Angel Duran',
            isFollowing: true
        },

        {
            userName: 'pheralb',
            name: 'Pablo H.',
            isFollowing: false
        },

        {
            userName: 'PacoHdezs',
            name: 'Paco Hdez',
            isFollowing: true
        },

        {
            userName: 'TMchein',
            name: 'Tomas',
            isFollowing: false
        }

    ]






    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >{name}</TwitterFollowCard>
                    )
                })
            }


            {/*Se pone isFollowing sin especificar que es true isFollowing={true} porque es true por defecto */}


            {/*  <button onClick={() => setName('Pedromichel')}>Cambio nombre</button>*/}
        </section>
    )
}

export default App


{/*Se pueden pasar aparte de texto y boolean, funciones */ }
{/*Le pasamos la funcion directamente no la ejecucion de la funcion 'formaUserName()' la ejecucion de la funcion va a devovler lo que devuelva la funcion*/ }

{/*La diferencia entre componente y elemento:
el componente es una funcion que al ejecutarla te devuelve un elemento (es una factoria de elementos)
el elemento es lo que renderiza react
*/}


{/*Los cambios se propagan de los padres hacia el hijo siempre hacia abajo */ }

{/*Si utilizo una props para inicializar un estado hay que tener encuenta que solo se inicializa una vez y debo usar initial + el nombre para tener encuenta que solo se inicializa una vez*/ }

{/*La id de los elemento tiene que ser unico no alitorio */ }