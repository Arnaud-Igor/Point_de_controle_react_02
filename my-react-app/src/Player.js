import { Card } from 'react-bootstrap';


export function Player({ nom, equipe, nationalite, numero, age, imageJoueur }) {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    
                </Card.Body>
            </Card>
        </div>
    )
}