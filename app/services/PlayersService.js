import { AppState } from "../AppState.js"



class PlayerService {

  increasePlayerScore(playerId) {

    const players = AppState.players
    console.log(players)

    let foundPlayer = players.find(player => player.id == playerId)

    // @ts-ignore
    foundPlayer.score++

  }
  decreasePlayerScore(playerId) {
    const players = AppState.players

    let foundPlayer = players.find(player => player.id == playerId)

    // @ts-ignore
    foundPlayer.score--

  }

}


export const playerService = new PlayerService()