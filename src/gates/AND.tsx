import {Group, Line, Rect, Text} from "react-konva";
import {Props} from "../utils.ts";

function ANDgate({x, y, height, width}: Props) {


    return (
        <Group draggable>
            <Rect
                className='and-gate'
                x={x}
                y={y}
                width={width}
                height={height}
                stroke={'black'}
                strokeWidth={1}
            />

            <Text
                x={x}
                y={y}
                text='OR'
                fontSize={height/100*40}
                fontFamily='Calibri'
                fill='black'
            />

            <Line
                x={x}
                y={y+(height/3*2)+(height/100*10)}
                points={[0, 0, -20, 0]}
                stroke={'black'}
                strokeWidth={1}
            />

            <Line
                x={x}
                y={y+(height/3)+(height/100*10)}
                points={[0, 0, -20, 0]}
                stroke={'black'}
                strokeWidth={1}
            />

            <Line
                x={x+width}
                y={y+(height/2)}
                points={[0, 0, 20, 0]}
                stroke={'black'}
                strokeWidth={1}
            />

        </Group>

    )
}

export default ANDgate