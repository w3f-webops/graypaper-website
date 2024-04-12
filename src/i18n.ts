import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const KeywordAbstract = `<span class="abstract-word">Abstract.</span>`;
const KeywordJam = `<span class="jam"><span>J</span>am</span>`;

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Resources: "Resources",
          Prize: "Prize",
          Tour: "Tour",
          Download: "Download",
          News: "News",
          Contribute: "Contribute",
          "Coming soon": "Coming soon...",
          "Resources.Download": "Get a copy of the Graypaper here:",
          "Resources.Contribute": `Join the ${KeywordJam} in our [matrix] space:`,
          "Graypaper.Title":
            '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />A SEMI-COHERENT SCALABLE TRUSTLESS VM',
          "Abstract.p1": `${KeywordAbstract} We present a comprehensive and formal definition of ${KeywordJam}, a protocol combining elements of both <i>Polkadot</i> and <i>Ethereum</i>. In a single coherent model, ${KeywordJam} provides a global singleton permissionless object environment&#8212;much like the smart-contract environment pioneered by Ethereum&#8212;paired with secure sideband computation parallelized over a scalable node network, a proposition pioneered by Polkadot.`,
          "Abstract.p2": `${KeywordJam} introduces a decentralized hybrid system offering smart-contract functionality structured around a secure and scalable in-core/on-chain dualism. While the smart-contract functionality implies some similarities with Ethereum&#x2019;s paradigm, the overall model of the service offered is driven largely by underlying architecture of Polkadot.`,
          "Abstract.p3": `${KeywordJam} is permissionless in nature, allowing anyone to deploy code as a service on it for a fee commensurate with the resources this code utilizes and to induce execution of this code through the procurement and allocation of <i>core-time</i>, a metric of resilient and ubiquitous computation, somewhat similar to the purchasing of gas in Ethereum. We already envision a Polkadot-compatible <i>CoreChains</i> service.`,
          "CTA.Download": "Read the Graypaper",
        },
      },
      es: {
        translation: {
          Resources: "Recursos",
          Prize: "Premio",
          Tour: "Tour",
          Download: "Descargar",
          News: "Noticias",
          Contribute: "Contribuir",
          "Coming soon": "Próximamente...",
          "Resources.Download": "Obtén una copia del Graypaper aquí:",
          "Resources.Contribute": `Únete al ${KeywordJam} en nuestro espacio [matrix]:`,
          "Graypaper.Title":
            '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />Una máquina virtual escalable, semi-coherente y sin confianza',
          "Abstract.p1": `${KeywordAbstract} Presentamos una definición completa y formal de ${KeywordJam}, un protocolo que combina elementos tanto de <i>Polkadot</i> como de <i>Ethereum</i>. En un modelo coherente único, ${KeywordJam} proporciona un entorno de objeto global sin permisos y singleton&#8212;muy similar al entorno de contrato inteligente pionero de Ethereum&#8212;emparejado con cálculo de banda lateral seguro paralelizado sobre una red de nodos escalable, una propuesta pionera de Polkadot.`,
          "Abstract.p2": `${KeywordJam} introduce un sistema híbrido descentralizado que ofrece funcionalidad de contrato inteligente estructurada alrededor de un dualismo seguro y escalable en el núcleo/en la cadena. Aunque la funcionalidad de contrato inteligente implica algunas similitudes con el paradigma de Ethereum, el modelo general del servicio ofrecido está impulsado en gran medida por la arquitectura subyacente de Polkadot.`,
          "Abstract.p3": `${KeywordJam} es de naturaleza sin permisos, lo que permite a cualquiera implementar código como servicio en él por una tarifa proporcional a los recursos que este código utiliza y para inducir la ejecución de este código a través de la adquisición y asignación de <i>tiempo de núcleo</i>, una métrica de cálculo resiliente y ubicuo, algo similar a la compra de gas en Ethereum. Ya prevemos un servicio de <i>CoreChains</i> compatible con Polkadot.`,
          "CTA.Download": "Lee el Graypaper",
        },
      },
      jp: {
        translation: {
          Resources: "リソース",
          Prize: "賞",
          Tour: "ツアー",
          Download: "ダウンロード",
          News: "ニュース",
          Contribute: "貢献する",
          "Coming soon": "近日公開...",
          "Resources.Download": "こちらでGraypaperのコピーを入手してください：",
          "Resources.Contribute": `[matrix]スペースで${KeywordJam}に参加しよう：`,
          "Graypaper.Title":
            '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />セミコヒーレント スケーラブル トラストレス VM',
          "Abstract.p1": `${KeywordAbstract} 我々は、<i>Polkadot</i>と<i>Ethereum</i>の両方の要素を組み合わせたプロトコルである${KeywordJam}の包括的かつ正式な定義を提示します。一つの矛盾のないモデルとして、${KeywordJam}はグローバルなシングルトンの許可不要のオブジェクト環境を提供します。これはEthereumによって先駆けられたスマートコントラクト環境と非常に似ており、スケーラブルなノードネットワーク上で並列化された安全なサイドバンド計算と組み合わされています。これはPolkadotによって先駆けられた提案です。`,
          "Abstract.p2": `${KeywordJam}は、セキュアでスケーラブルなコア/オンチェーンの二元論を中心に構築されたスマートコントラクト機能を提供する分散型ハイブリッドシステムを導入します。スマートコントラクト機能はEthereumのパラダイムといくつかの類似点を示唆していますが、提供されるサービスの全体的なモデルは主にPolkadotの基盤となるアーキテクチャによって推進されています。`,
          "Abstract.p3": `${KeywordJam}は許可不要の性質を持ち、誰でも使用するコードをサービスとして展開することができ、このコードが利用するリソースに見合った料金を支払い、<i>コアタイム</i>の調達と割り当てを通じてこのコードの実行を誘発することができます。これは、Ethereumでのガスの購入にやや似た、レジリエントで普遍的な計算の指標です。私たちはすでにPolkadot互換の<i>CoreChains</i>サービスを想定しています。`,
          "CTA.Download": "Graypaperを読む",
        },
      },
      cn: {
        translation: {
          Resources: "资源",
          Prize: "奖",
          Tour: "旅游",
          Download: "下载",
          News: "新闻",
          Contribute: "贡献",
          "Coming soon": "即将推出...",
          "Resources.Download": "在这里获取Graypaper的副本：",
          "Resources.Contribute": `在我们的[matrix]空间加入${KeywordJam}：`,
          "Graypaper.Title":
            '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />半一致可扩展无需信任的虚拟机',
          "Abstract.p1": `${KeywordAbstract} 我们提出了一个全面和正式的定义${KeywordJam}，一个结合了<i>Polkadot</i>和<i>Ethereum</i>的元素的协议。在一个单一的连贯模型中，${KeywordJam}提供了一个全球单例无需许可的对象环境——非常类似于Ethereum开创的智能合约环境——与一个在可扩展节点网络上并行的安全边带计算相结合，这是Polkadot首创的提议。`,
          "Abstract.p2": `${KeywordJam}引入了一个分散的混合系统，提供围绕安全和可扩展的核心/链上二元性结构的智能合约功能。虽然智能合约功能意味着与Ethereum的范式有一些相似之处，但所提供服务的整体模型主要是由Polkadot的底层架构驱动的。`,
          "Abstract.p3": `${KeywordJam}的本质是无需许可的，允许任何人在其上部署代码作为服务，并根据该代码使用的资源支付相应的费用，并通过采购和分配<i>核心时间</i>来引导该代码的执行，这是一种类似于在Ethereum中购买气体的弹性和普遍的计算度量。我们已经设想了一个与Polkadot兼容的<i>CoreChains</i>服务。`,
          "CTA.Download": "阅读Graypaper",
        },
      },
    },
  });

export default i18n;
