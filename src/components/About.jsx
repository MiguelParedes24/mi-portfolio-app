// src/components/About.jsx
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Miguel! <br className="hidden lg:inline-block" /> Me gusta
            construir aplicaciones web.
          </h1>
          <p className="mb-8 leading-relaxed">
            Bienvenido! Soy un estudiante con muchas ganas de insertarme en el
            mundo It y seguir creciendo como programador. Actualmente me
            encuentro estudiando la carrera de Analista Programador
            Universitario en la Universidad Nacional de la Patagonia San Juan
            Bosco (UNPSJB) en la ciudad de Comodoro Rivadavia, Chubut,
            Argentina.
          </p>

          <em>
            &quot;No son nuestras habilidades las que demuestran lo que somos,
            son nuestras decisiones.&quot;
          </em>
          <div className="flex justify-center mt-6"></div>

          <div className="flex justify-center flex-wrap gap-2 align-middle">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white rounded text-lg"
            >
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Mira mis trabajos anteriores
            </a>

            <a
              href="https://drive.google.com/file/d/1Rl2G2R-BwExdDJFGm7q2NKoIz7Vos5KB/view?usp=sharing"
              target="_blank"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Mi Curriculum Vitae
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center aspect-square rounded-full "
            alt="foto-perfil"
            src="/assets/img/foto-perfil.jpg"
          />
        </div>
      </div>
    </section>
  );
}
