import {Switch, Route} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Home from "./containers/Home/Home";
import Post from "./containers/Post/Post";
import AddPost from "./containers/AddPost/AddPost";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";

const App = () => {
  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
      <main>
        <Container maxWidth="lg">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" exact component={Post}/>
            <Route path="/add-post" exact component={AddPost}/>
          </Switch>
        </Container>
      </main>
    </>
  );
}

export default App;
