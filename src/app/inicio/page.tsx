import ListaHabilidade from "@/src/components/ListaHabilidade";
import 'swiper/css';
import Contato from "@/src/components/Contato";
import PequenoSobre from "@/src/components/PequenoSobre";
export default function Inicio() {
  return (
    <>
        <main className="w-full max-w-6xl mx-auto px-4">
        <PequenoSobre />
        <ListaHabilidade /> 
        <Contato />

        </main>
    </>
  );
}
