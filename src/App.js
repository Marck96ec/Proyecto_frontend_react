import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all";
import RoutesBasic from "./routes/RoutesBasic";
import Axios from "axios";

Axios.interceptors.request.use(function (config) {
  config.url = `${process.env.REACT_APP_API_BASE_URL}${config.url}`;
  return config;
});

function App() {
  return (
    <>
      <RoutesBasic />
    </>
  );
}

export default App;
