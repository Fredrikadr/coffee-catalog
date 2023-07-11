import { Component } from "react";
import { CoffeeDrink } from "../models/CoffeeDrink.ts";
import CoffeeCard from "./CoffeeCard.tsx";
import Searchbar from "./Searchbar.tsx";



interface CatalogState {
  products: CoffeeDrink[];
  loading: boolean;
  error: string | null;
}

class CoffeeCatalog extends Component<{}, CatalogState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      products: [],
      loading: true,
      error: null
    };

  }

  async fetchData() {
    try {
      this.setState({
        loading: true
      });
      console.log("fetching")
      const response = await fetch("http://localhost:5000/coffee-drinks");
      const data = await response.json();

      console.log(data)

      this.setState({ loading: false, products: data })
    } catch (error: any) {
      this.setState({ error: error.message, })
      console.log(error)
    }

    return
  }

  componentDidMount() {
    this.fetchData();
    console.log("Component did mount")
  }

  render() {
    const { products, loading, error } = this.state;

    
    if (error) {
      return <div>Error: {error}</div>
    }
    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <>
        <div className="top-container">
          <h1>Find the best<br></br> <span>Coffee</span> for you</h1>
        <Searchbar/>
        </div>
        
      <div className="grid-container">
        {products.map(coffeeDrink => (
          <CoffeeCard key={coffeeDrink.id} drink={coffeeDrink} />
        ))}
      </div>
      
      </>
    )
  }
}

export default CoffeeCatalog;