import {Layer, Stage} from 'react-konva'
import {useEffect, useState} from 'react';
import {v4 as uuid4} from 'uuid';

import './App.css'
import ANDgate from "./gates/AND";
import GateMenu from "./menu/GateMenu.tsx";
import NavBar from "./menu/NavBar.tsx";

import {Gate} from './utils.ts'


function App() {
    // TODO: use uuid to dynamically change gates state x, y on drag so i can better link then with wire
    const [gates, set_gates] = useState<{ [key: string]: Gate }>({});

    /**
     * Adds a new gate to the list of gates.
     * @param {string} gate - The type of gate to add.
     * @param {number} x - The x-coordinate of the gate on the canvas.
     * @param {number} y - The y-coordinate of the gate on the canvas.
     */
    const add_gate = (gate: string, x: number, y: number) => {
        set_gates((prevGates) => {
            const newKey = uuid4();
            return {
                ...prevGates,
                [newKey]: { gate: gate, x: x, y: y }
            };
        });
    };

    useEffect(() => {
        console.log(gates);
    }, [gates]);

    const change_pos = (key: string, x: number, y: number) => {
        set_gates((prevGates) => {
            return {
                ...prevGates,
                [key]: { ...prevGates[key], x: x, y: y }
            };
        });

    };

    return (
        <>
            <NavBar/>
            <Stage height={window.innerHeight} width={window.innerWidth}>
                <Layer>
                    {Object.keys(gates).map((key) => (
                        <ANDgate key={key} id={key} x={10} y={10} onDrag={change_pos} /> // the pos must be same as in the menu component
                    ))}
                </Layer>
            </Stage>
            <GateMenu add_gate={add_gate}/>
        </>
    )
}

export default App
