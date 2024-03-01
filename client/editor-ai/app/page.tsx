import Link from "next/link";
import Homepage from "./homepage";

function App() {
  return (
    <main>
      <ul>
        <Link href={"/homepage"}>Go to Homepage</Link>
        <Link href={"/homepage"}>Go to Text Editor</Link>
      </ul>
      <Homepage />
    </main>

  );
}

export default App;