type GreetProps = {
    name?: string
}

const Greet = (props: GreetProps) => {
  return (
    <div>Hello {props.name ? props.name : "Somebody"}</div>
  )
}

export default Greet