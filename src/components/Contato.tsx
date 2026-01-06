import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export default function Contato() {
    return(
        <footer className="mt-15">
        <div className="max-w-screen-xl mx-auto py-8 px-4 flex flex-col items-center">
            <h2 className="text-3xl font-[--font-titulos] text-texto mb-4">Contato</h2>
            <div className="flex gap-6 mb-4">
                <Link href="https://www.linkedin.com/in/adriano-teixeira-benevenuto-sampaio-236151330/" 
                target="_blank" rel="noopener noreferrer" 
                className="text-texto hover:text-destaque transition-colors">
                    <FaLinkedin size={50} />
                </Link>
                <Link href="https://github.com/AdrianoATBS"
                 target="_blank" rel="noopener noreferrer"
                  className="text-texto hover:text-destaque transition-colors">
                    <FaGithub size={50} />
                </Link>
            </div>
        </div>
        </footer>
    )
}