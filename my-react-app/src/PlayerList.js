import { Player } from "./Player";
import { players } from './Players';



export function PlayerList() {

    const playersCopy = players.map((player) => {
        return (
            <li className="col-lg-4 list-unstyled my-2">
                <Player nom={player.nom} />
            </li>
        )
    })

    return (
        <div className="container">
            <ul className="row">
                {playersCopy}
            </ul>
        </div>
    )
}