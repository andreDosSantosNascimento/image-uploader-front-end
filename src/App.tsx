import { Provider } from "./hooks";
import Router from "./routes/index.routes";
const App = () => (
    <Provider>
        <Router />
    </Provider>
);
export default App;
