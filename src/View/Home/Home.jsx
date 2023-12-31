import Header from "../../Componentes/Header/Header";
import Tasks from "../../Componentes/Tasks/Tasks";
import "./index.scss";

export default function Home({ data }) {
  return (
    <section className="container">
      <Header />
      <h1 className="container__h1">
        Otimize seu tempo e se organize com o nosso Planejador Diário.
      </h1>
      <Tasks data={data} />
    </section>
  );
}