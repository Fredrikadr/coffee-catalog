import { Component } from "react"
import { CoffeeDrink } from "../models/CoffeeDrink.ts";

interface CoffeeCardProps {
  drink: CoffeeDrink
}

class CoffeeCard extends Component<CoffeeCardProps> {

  render() {
    const { drink } = this.props;
    const image = drink.assets.thumbnail.large.uri || drink.assets.fullSize.uri || drink.assets.masterImage.uri

    return (
      <div className="card" key={drink.id}>
        <figure>
          <img alt={drink.name} src={image}></img>
          <figcaption>
            <h5>{drink.name}</h5>
            <p>{drink.formCode}</p>
            <div className="price-container">
              <p className="price">$2.45</p>
              <button className="add-to-cart-btn">+</button>
            </div>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default CoffeeCard;