import { type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { CommonHead } from "../components/Head/CommonHead";
import { Layout } from "../components/Layout";
import Graypaper from "../images/graypaper.png";

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <Layout {...props}>
      <div className="flex flex-col items-center mt-10 sm:mt-20 sm:pr-[25px] md:pr-[30px]">
        <StaticImage
          className="w-[90%]  sm:w-[400px]"
          src="../images/jam-pen-polkadot.png"
          alt="JAM Logo"
          placeholder="blurred"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-full md:w-3/4">
          <h1 className="text-center font-bold text-lg sm:text-2xl md:text-3xl mt-8 uppercase">
            <span className="whitespace-nowrap">JOIN-ACCUMULATE MACHINE:</span>
            <br />
            Una máquina virtual escalable, semi-coherente y sin confianza.
          </h1>
          <div className="abstract indent-pars">
            <p className="no-indent">
              <span style={{ fontVariant: "small-caps" }}>Abstract.</span>{" "}
              Presentamos una definición completa y formal de{" "}
              <span className="jam">
                <span>J</span>am
              </span>
              , un protocolo que combina elementos tanto de <i>Polkadot</i> como
              de <i>Ethereum</i>. En un modelo coherente único,{" "}
              <span className="jam">
                <span>J</span>am
              </span>{" "}
              proporciona un entorno de objeto global sin permisos y
              singleton&#8212;muy similar al entorno de contrato inteligente
              pionero de Ethereum&#8212;emparejado con cálculo de banda lateral
              seguro paralelizado sobre una red de nodos escalable, una
              propuesta pionera de Polkadot.
            </p>
            <p>
              <span className="jam">
                <span>J</span>am
              </span>{" "}
              introduce un sistema híbrido descentralizado que ofrece
              funcionalidad de contrato inteligente estructurada alrededor de un
              dualismo seguro y escalable en el núcleo/en la cadena. Aunque la
              funcionalidad de contrato inteligente implica algunas similitudes
              con el paradigma de Ethereum, el modelo general del servicio
              ofrecido está impulsado en gran medida por la arquitectura
              subyacente de Polkadot.
            </p>
            <p>
              es de naturaleza sin permisos, lo que permite a cualquiera
              implementar código como servicio en él por una tarifa proporcional
              a los recursos que este código utiliza y para inducir la ejecución
              de este código a través de la adquisición y asignación de{" "}
              <i>tiempo de núcleo</i>, una métrica de cálculo resiliente y
              ubicuo, algo similar a la compra de gas en Ethereum. Ya prevemos
              un servicio de <i>CoreChains</i> compatible con Polkadot.
            </p>
          </div>
          <div className="abstract">
            <p className="text-center">
              <a href={Graypaper}>Lee el Graypaper</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>JAM</title>
    <CommonHead />
  </>
);
