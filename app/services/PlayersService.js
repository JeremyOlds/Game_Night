import { AppState } from "../AppState.js"



class PlayerService {
  addPlayer() {

  }

  increasePlayerScore(playerId) {

    const players = AppState.players
    // console.log(players)

    let foundPlayer = players.find(player => player.id == playerId)

    // @ts-ignore
    foundPlayer.score++
    AppState.scoreChange++
  }
  decreasePlayerScore(playerId) {
    const players = AppState.players

    let foundPlayer = players.find(player => player.id == playerId)

    // @ts-ignore
    foundPlayer.score--
    AppState.scoreChange--
  }

}


export const playerService = new PlayerService()