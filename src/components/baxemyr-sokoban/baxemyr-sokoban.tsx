import { Component, State, h } from "@stencil/core";

@Component({
  tag: "baxemyr-sokoban",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Sokoban {
  @State() score: number = 0;


  // {this.tiles.map((tile) =>
  //     <div key={tile.uid}>{tile.image}</div>)}
  render() {
    return (
      <div>
      <p>Current score: {this.score}</p>
      </div>
      );
  }
}
