import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScreensContext from "./context/screens-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ScreensContext>
    <App />
  </ScreensContext>
);
