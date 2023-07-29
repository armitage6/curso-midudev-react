import { useState } from "react"

const TwitterFollowCard = ({ children, userName, initialIsFollowing }) => {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : ' tw-followCard-button'



    const handelClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    src={`https://unavatar.io/${userName}`} alt="Avatar Random"
                    className='tw-followCard-avatar'
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName '>@{userName}</span>
                </div>
            </header>
            <aside>
                <button onClick={handelClick} className={buttonClassName}>
                    <span className="tw-followCard-text">{text}</span>

                    <span className="tw-followCard-stopfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard

{/*Se pasan props y se desectructuran para que la informacion se adapte  */ }
{/*Es mala practica modificar una prop */ }

{/*Children es el hijo de un elemento se puede utilizar a nivel de componente */ }

{/*Se pueden utilizar valores por defecto en el prop por si alguna informacion no viene */ }

{/*Renderizado condicional, dependiendo de una condicion que renderice una cosa o otra*/ }

{/*Hooks son utilidades de react que permiten dotar de mas funcionalidades a los componentes*/ }

{/*estado interno porque esta  a nivel de cada uno de los elementos que crear el componente no esta compartido entre los elementos*/ }


{/*Imperativo vs Declarativo 
imperativo: instrucciones precisa de que hacer 

*/}