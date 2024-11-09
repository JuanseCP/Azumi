import logo from "../assets/logo.png"

const Sidebar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-white text-center sticky top-0 flex px-5">
      <a href="#introduccion" className="flex items-center">
        <img src={logo} className="h-20 w-20"></img>
        <p>Azumi</p>
      </a>
      <section className="text-center flex w-full justify-center space-x-5 me-28 items-center">
        <a href="#introduccion" className="hover:underline">Introducción</a>
        <a href="#instalacion" className="hover:underline">Instalación</a>
        <a href="#explicacion" className="hover:underline">Explicación</a>
      </section>
    </div>
  )
}

export default Sidebar