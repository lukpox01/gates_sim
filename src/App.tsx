
import {Layer, Stage} from 'react-konva'
import './App.css'
import ANDgate from "./gates/AND";

function App() {

    return (
        <Stage height={window.innerHeight} width={window.innerWidth}>
            <Layer>
                <ANDgate x={10} y={0} height={40} width={10}/>
                <ANDgate x={20} y={0} height={80} width={80}/>
                <ANDgate x={30} y={0} height={20} width={80}/>
            </Layer>
        </Stage>
    )
}

export default App
