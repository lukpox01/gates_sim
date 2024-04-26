
function Gate({name}: {name: string}) {

    return (
        <div>
            <p>{name}</p>
        </div>
    )
}
function GateMenu() {
    return (
        <div>
            <Gate name="OR"/>
        </div>
    )
}

export default GateMenu