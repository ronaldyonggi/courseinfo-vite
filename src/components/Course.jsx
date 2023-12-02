const Course = ({ course }) => {
    return (
        <>
            <h1>{course.name}</h1>
            {course.parts.map(p => (
                <li key={p.id}>{p.name} {p.exercises}</li>
            ))}
        </>
    )
}

export default Course