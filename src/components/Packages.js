import { ListGroup, Container } from "react-bootstrap"

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage, i) => <ListGroup.Item key={i}>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <ListGroup>
            {displayPackages}
            </ListGroup>
        </Container>

    )
}