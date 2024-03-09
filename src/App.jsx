import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <FloatingWhatsApp
        accountName="Miguel Paredes"
        phoneNumber="+5492975949959"
        avatar="/assets/img/foto-perfil.jpg"
        chatMessage="Hola! ¿En qué puedo ayudarte?"
        placeholder="Escribe un mensaje..."
        allowClickAway={true}
        statusMessage="Respondo en breve"
        chatboxStyle={{ borderRadius: "10px", color: "black" }}
        notification={false}
      />
    </main>
  );
}

export default App;
