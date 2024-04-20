import Header from '../../components/Header';
import PromoteArticle from "./PromoteArticle";
import Head from 'next/head';

// Inside your component or page


function App() {
  return (

    <main>
      <Head>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
       <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
       />
      </Head>
      <PromoteArticle />
      <div>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
      </div>
    </main>

  );
}

export default App;