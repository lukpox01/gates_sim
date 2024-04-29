export interface Props {
    id: string;
    x: number
    y: number
    onDrag: (key: string, x: number, y: number) => void
    height?: number
    width?: number
}

export interface Gate {
    gate: string;
    x: number;
    y: number;
}