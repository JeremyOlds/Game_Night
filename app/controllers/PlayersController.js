import { AppState } from "../AppState.js"
import { playerService } from "../services/PlayersService.js"
import { setHTML } from "../utils/Writer.js"


function _drawPlayers() {
  let players = AppState.players

  let template = ''

  players.forEach(player => template += player.PlayerLineTemplate)

  setHTML('players', template)

};



export class PlayersController {

  constructor() {
    console.log('testing player controller')
    _drawPlayers()
  }

  // create a function to increase the score of a player, this needs to reference the service
  // create a function to decrease the score of a player, this needs to reference the service
  // 

  increasePlayerScore(playerId) {

    playerService.increasePlayerScore(playerId)

  }
  decreasePlayerScore(playerId) {
    playerService.decreasePlayerScore(playerId)
  }


}


