import { Component } from "react";
import { CoffeeDrink } from "../models/CoffeeDrink.ts";



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

      this.setState({loading: false, products: data})
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

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error: {error}</div>
    }

    return (
      <div>
        {products.map(coffeeDrink => (
          <div key={coffeeDrink.id}>
            <h3>{coffeeDrink.name}</h3>
            <p>{coffeeDrink.category}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default CoffeeCatalog;