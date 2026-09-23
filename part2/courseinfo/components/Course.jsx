const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => props.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)
  
const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Total = (props) => {
  const total = props.parts.reduce((s, p) => s+p.exercises, 0)
  return (
    <p><b>Number of exercises {total}</b></p>
  )
}

const Course = (props) => {
  return(
    <div>
      <Header course={props.course.name}/>
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course