export class Player {
  constructor(name, imageUrl, id) {

    this.score = 0
    this.name = name
    this.imgUrl = imageUrl
    this.id = id
  }



  get PlayerLineTemplate() {
    return /*html*/`
   <div class="row text-white align-items-center py-2">
  <div class="col-4">
    <img class="img-fluid rounded" src="${this.imgUrl}" alt="Filler Picture">
  </div>
  <div class="col-5">
    <p>'${this.name}'</p>
  </div>
  <div class="col-3 d-flex justify-content-evenly">
    <button onclick="app.PlayersController.increasePlayerScore(${this.id})">+1</button>
    <p>${this.score}</p>
    <button onclick="app.PlayersController.decreasePlayerScore(${this.id})">-1</button>
    </div>
    </div>
    `
  }






}

