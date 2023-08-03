import { withProviders } from "./providers";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return <AppRouter />
};

export default withProviders(App);