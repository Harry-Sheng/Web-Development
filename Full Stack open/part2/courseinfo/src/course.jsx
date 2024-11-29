const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />      
  </>

const Course = ({course}) => {
  const total = course.parts.reduce((sum, part) => sum += part.exercises, 0)
  return (
    <div>
      <Header course = {course.name}></Header>
      {course.parts.map(x => <Part key = {x.id} part = {x}></Part>)}
      <Total sum = {total}></Total>
    </div>
  )
}

export default Course