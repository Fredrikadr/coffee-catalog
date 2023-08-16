import { Component } from "react";
import { CoffeeDrink } from "../models/CoffeeDrink.ts";
import CoffeeCard from "./CoffeeCard.tsx";
import Searchbar from "./Searchbar.tsx";



interface CatalogState {
  products: CoffeeDrink[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
}

class CoffeeCatalog extends Component<{}, CatalogState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      products: [],
      loading: true,
      error: null,
      searchTerm: ""
    };

  }
  
//Fetch coffee data
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

  handleInputChange = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  componentDidMount() {
    this.fetchData();
    console.log("Component did mount")
  }

  render() {
    const { products, loading, error, searchTerm } = this.state;


    if (error) {
      return <div>Error: {error}</div>
    }
    if (loading) {
      return <div>Loading...</div>
    }

    //Filter products by search term
    const filteredProducts = searchTerm
      ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      : products;

    //Filter products by display order
    const sortedProducts = filteredProducts.sort((a, b) =>
      a.displayOrder - b.displayOrder
    );

    
    return (
      <>
        <div className="top-container">
          <h1>Find the best<br></br> <span>Coffee</span> for you</h1>
          <Searchbar onSearchTermChange={this.handleInputChange} />
        </div>

        <div className="grid-container">
          {sortedProducts.length > 0 ? (sortedProducts.map(coffeeDrink => (
            <CoffeeCard key={coffeeDrink.id} drink={coffeeDrink} />)
          ))
            
            : (<div>No results found</div>)

          }
        </div>

      </>
    )
  }
}

export default CoffeeCatalog;