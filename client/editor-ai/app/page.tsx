import Link from "next/link";


function App() {
  return (
    <main>
      <Link href={"/homepage"}>Go to Homepage</Link>
      <br />
      <Link href={"/texteditor"}>Go to Text Editor</Link>
    </main>

  );
}

export default App;