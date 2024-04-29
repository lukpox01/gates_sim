import './menu.css'

function Item({name}: {name: string}){
    return (
        <li>
            <p>{name}</p>
        </li>
    )
}

function NavBar() {
    return (
        <nav>
            <ul>
                <Item name='C'/>
            </ul>
        </nav>
    )
}

export default NavBar