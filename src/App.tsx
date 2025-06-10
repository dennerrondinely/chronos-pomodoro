import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading"

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading>
          Welcome to My React App
          <button><TimerIcon /></button>
        </Heading>
        <p>This is a simple React application.</p>
      </header>
    </div>
  );
}