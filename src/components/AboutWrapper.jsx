import { SectionWrapper } from "../hoc";  // Asegúrate de tener la ruta correcta
import About from "./About";  // Importa el componente About

const AboutWrapper = SectionWrapper(About, "about");  // Envuelve About con SectionWrapper

export default AboutWrapper;  // Exporta el nuevo componente envuelto