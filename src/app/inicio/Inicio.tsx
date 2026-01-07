import Cabecalho from "@/src/components/Cabecalho";
import ListaHabilidade from "@/src/components/ListaHabilidade";
import 'swiper/css';
import Contato from "@/src/components/Contato";
import PequenoSobre from "@/src/components/PequenoSobre";
export default function Inicio() {
  return (
    <div >
        <PequenoSobre />
        <ListaHabilidade /> 
        <Contato />
    </div>
  );
}
