export interface MainProps{
    children?: JSX.Element
}
export interface CardProps extends Products{
    onPress?: () => void
}