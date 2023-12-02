const Course = ({ course }) => {
    const arr = course.parts
    const total = arr.reduce((acc, curr) => acc + curr.exercises, 0)
    return (
        <>
            <h1>{course.name}</h1>
            {course.parts.map(p => (
                <li key={p.id}>{p.name} {p.exercises}</li>
            ))}
            <strong>total of {total} exercises</strong>

        </>
    )
}

export default Course