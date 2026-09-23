const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
    <Part part={props.parts[3]} />
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Course = (props) => {
  return(
    <div>
      <Header course={props.course.name}/>
      <Content parts={props.course.parts} />
      <Total total={props.course.parts} />
    </div>
  )
}

const Total = (props) => {
  const total = props.total[0].exercises + props.total[1].exercises + props.total[2].exercises + props.total[3].exercises
  return (
    <p><b>Number of exercises {total}</b></p>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App