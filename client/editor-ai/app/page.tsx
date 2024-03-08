import Link from "next/link";

function App() {
  return (
    <main>
      <ul>
        <Link href={"/homepage"}>Homepage</Link>
        <Link href={"/texteditor"}>Text Editor</Link>
        <Link href={"/login"}>Login</Link>
      </ul>
    </main>

  );
}

export default App;