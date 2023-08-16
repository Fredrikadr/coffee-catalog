import CoffeeCatalog from './components/CoffeeCatalog.tsx'
import MenuBar from './components/MenuBar.tsx'
import TopNavigation from './components/TopNavigation.tsx'


function App() {

  return (
    <>
      <div id="glow-container">
        <div id="glow-effect"></div>
      </div>
      <TopNavigation />
      <CoffeeCatalog />
      <MenuBar/>
    </>
  )
}

export default App
