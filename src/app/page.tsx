import Cabecalho from "../components/Cabecalho";
import ListaHabilidade from "../components/ListaHabilidade";
import 'swiper/css';
import Contato from "../components/Contato";
import PequenoSobre from "../components/PequenoSobre";
export default function Home() {
  return (
    <div >
        <Cabecalho />
        
        <PequenoSobre />
        <ListaHabilidade /> 
        <Contato />
    </div>
  );
}
