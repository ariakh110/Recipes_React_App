import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
//icons
import { GiKnifeFork } from "react-icons/gi";

//style
import { Logo, Nav } from "./App.styles";

function App() {
  return (
    <div className="App">
      <Nav>
        <GiKnifeFork></GiKnifeFork>
        <Logo to="/">delicious</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
