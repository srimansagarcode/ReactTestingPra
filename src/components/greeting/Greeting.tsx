type GreetProps = {
  name?: string
}
function Greeting(props: GreetProps) {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Greeting