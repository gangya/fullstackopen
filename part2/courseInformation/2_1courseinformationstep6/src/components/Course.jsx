import { Header } from "./Header"
import { Content } from "./Content"

export const Course = ({course}) => {
    return (
        <>
        <Header textHeader={course.name} />
        <Content courseContents={course.parts} />
        </>
    )
}