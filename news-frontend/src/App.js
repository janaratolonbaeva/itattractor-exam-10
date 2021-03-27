import {Switch, Route} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Home from "./containers/Home/Home";
import PostItem from "./containers/PostItem/PostItem";
import AddPost from "./containers/AddPost/AddPost";

const App = () => {
  return (
    <main>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route pathh="/add-post" component={AddPost}/>
          <Route path="/news/:id" exact component={PostItem}/>
        </Switch>
      </Container>
    </main>
  );
}

export default App;
