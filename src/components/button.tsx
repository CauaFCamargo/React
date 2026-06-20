type Props = React.ComponentProps<"button"> & {
    name: string

}

export function Button({ name, onClick }: Props) {
    return <button onClick={onClick}>{name}</button>
}