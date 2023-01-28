import { ThemeCard } from "./ThemeCard";

function App() {
  return (
    <div className="lg:grid grid-cols-2 gap-10 justify-center lg:m-14">
      <ThemeCard theme="theme-neon" />
      <ThemeCard theme="theme-swiss" />
      <ThemeCard />
    </div>
  );
}

export default App;
