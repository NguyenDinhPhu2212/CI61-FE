// import logo from './logo.svg';
// import './App.css';
import YourPost from "./components/YourPost";
import PostScreen from "./screens/PostScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostForm from "./components/PostForm";
import Menu from "./components/Menu";
import ForumScreen from "./screens/ForumScreen";
function App() {
    return (
        <Router>
            <div className="flex w-full">
                <Menu />
                <div className="w-5/6 h-screen overflow-y-auto">
                    <Switch>
                        <Route path="/home" exact component={ForumScreen} />
                        <Route
                            path="/your-blogs"
                            exact
                            component={YourPost}
                        />
                        <Route
                            path="/detail-blog"
                            exact
                            component={PostScreen}
                        />
                        <Route path="/create" exact component={PostForm} />
                        <Route path="/edit" exact component={PostForm} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
