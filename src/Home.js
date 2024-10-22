import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <h1>This is my application.</h1>
      <Button variant="contained" href="./cardetail">Chevy Nova 74'</Button>
    </div>
  );
}
