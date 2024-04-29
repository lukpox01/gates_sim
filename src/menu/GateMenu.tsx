import './menu.css'
function Gate({name}: {name: string}) {

    return (
        <p>{name}</p>
    )
}
function GateMenu({add_gate}: {add_gate: (gate: string, x: number, y: number) => void}) {
    return (
        <div className={'gate-list-container'}>
            <ul className={'gate-list'}>
               <li
                   onClick={() => add_gate("AND", 10, 10)}>
                   <Gate name="AND"/>
               </li>
            </ul>
        </div>
    )
}

export default GateMenu

