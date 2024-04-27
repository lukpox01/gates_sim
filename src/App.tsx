import {Layer, Stage} from 'react-konva'
import './App.css'
import ANDgate from "./gates/AND";
import GateMenu from "./menu.tsx";
import React, {useState} from 'react';

function App() {
    const [gates, set_gates] = useState([
        {gate: "AND", x: 10, y: 10},
        {gate: "AND", x: 20, y: 10},
        {gate: "AND", x: 30, y: 10}])

    /**
     * Adds a new gate to the list of gates.
     * @param {string} gate - The type of gate to add.
     * @param {number} x - The x-coordinate of the gate on the canvas.
     * @param {number} y - The y-coordinate of the gate on the canvas.
     */
    const add_gate = (gate: string, x: number, y: number) => {
        set_gates((g) => [...g, {gate: gate, x: x, y: y}]);
    }

    return (
        <>
            <Stage height={window.innerHeight} width={window.innerWidth}>
                <Layer>
                    {gates.map((gate) =>
                        (<ANDgate x={gate.x} y={gate.y}/>)
                    )}
                </Layer>
            </Stage>
            <GateMenu add_gate={add_gate}/>
        </>
    )
}

export default App
