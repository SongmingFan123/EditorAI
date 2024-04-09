"use client"
import './styles/globals.css'
import { useRouter } from 'next/navigation';


function App() {
  const router = useRouter();
  router.push('/pages/login');

}

export default App;