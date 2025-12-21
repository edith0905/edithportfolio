import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-sky-50 border-t border-sky-200 py-10">
      <div className="flex flex-col items-center gap-6 text-center">

        <h3 className="text-xl font-semibold text-sky-900">
          Ama Kuatcha
        </h3>

        <div className="flex gap-6 text-2xl text-gray-700">
          <a href="#" className="hover:text-sky-700 transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-sky-700 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:ama@email.com" className="hover:text-sky-700 transition">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-gray-600">
          Design & développement :{" "}
          <a
            href="https://www.linkedin.com/in/ama-kuatcha"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-700 hover:underline"
          >
            Editech
          </a>
        </p>

        <p className="text-sm text-gray-600">
          © Copyright {new Date().getFullYear()} Tous droits réservés
        </p>
        
      </div>
    </footer>
  );
}
