// prettier-ignore
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

const KeywordAbstract = `<span class="abstract-word">Abstract.</span>`
const KeywordJam = `<span class="jam"><span>J</span>am</span>`
const KeywordMatrix = `<a href="https://matrix.org/" target="_blank"
rel="noopener noreferrer">[matrix]</a>`

type Translation = Record<keyof typeof EnglishTranslation, string | undefined>
const EnglishTranslation = {
  "Abstract.p1": `${KeywordAbstract} We present a comprehensive and formal definition of ${KeywordJam}, a protocol combining elements of both <i>Polkadot</i> and <i>Ethereum</i>. In a single coherent model, ${KeywordJam} provides a global singleton permissionless object environment&#8212;much like the smart-contract environment pioneered by Ethereum&#8212;paired with secure sideband computation parallelized over a scalable node network, a proposition pioneered by Polkadot.`,
  "Abstract.p2": `${KeywordJam} introduces a decentralized hybrid system offering smart-contract functionality structured around a secure and scalable in-core/on-chain dualism. While the smart-contract functionality implies some similarities with Ethereum&#x2019;s paradigm, the overall model of the service offered is driven largely by underlying architecture of Polkadot.`,
  "Abstract.p3": `${KeywordJam} is permissionless in nature, allowing anyone to deploy code as a service on it for a fee commensurate with the resources this code utilizes and to induce execution of this code through the procurement and allocation of <i>core-time</i>, a metric of resilient and ubiquitous computation, somewhat similar to the purchasing of gas in Ethereum. We already envision a Polkadot-compatible <i>CoreChains</i> service.`,
  "Additional Resources": "Additional Resources",
  "Coming soon": "Coming soon...",
  "CTA.Download": "Read the Gray Paper",
  "filmed.brussels":
    "Filmed at the The Sneakers Cafe in Brussels, Belgium on July 11, 2024",
  "filmed.buenos.aires": "Filmed in Buenos Aires on May 10, 2024",
  "filmed.singapore":
    "Filmed at the National University of Singapore on June 19, 2024.",
  "GrayPaper.Title":
    '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />A SEMI-COHERENT SCALABLE TRUSTLESS VM',
  "Hide Gray Paper": "Hide Gray Paper",
  "Latest version": "Latest version",
  "Next Section": "Next Section",
  "Previous Section": "Previous Section",
  "Prize.description": `The Web3 Foundation announces the ${KeywordJam} Implementer&#x2019;s Prize, a 10 Million DOT prize pool aimed at fostering diversity in the development of the ${KeywordJam} protocol. The goal of this prize is to encourage the creation of multiple client implementations, enhancing the network&#x2019;s resilience.`,
  "Prize.cta": "Read the announcement",
  "Prize.apply": `The ${KeywordJam} Implementer’s Prize encourages multiple client implementations to boost network resilience. The Foundation seeks proposals for ${KeywordJam} Implementer’s Prize here:`,
  "Resources.Contribute": `Join the ${KeywordJam} in our ${KeywordMatrix} rooms:`,
  "Resources.DecisiveVersion": "on GitHub is the decisive version",
  "Resources.Download": "Get a copy of the Gray Paper here:",
  "Resources.Latex": "or compile the LaTeX from source:",
  "Resources.MostRecent": "most recent official released version",
  "Resources.VersionNoBackground":
    "A version without the dark background is provided for your convenience. The",
  "Select Lecture": "Select a Lecture",
  "Show Section in Gray Paper": "Show Section in Gray Paper",
  "Tour Description":
    "Gavin Wood will be appearing at universities around the world in a series of lectures to take viewers through the Gray Paper and explain each part in depth.",
  Contribute: "Contribute",
  Download: "Download",
  Interview: "Interview",
  Lectures: "Lectures",
  News: "News",
  Prize: "Prize",
  Resources: "Resources",
  Tour: "Tour",
}

const PortugueseTranslation: Translation = {
  "Abstract.p1": `${KeywordAbstract} Apresentamos uma definição abrangente e formal de ${KeywordJam}, um protocolo que combina elementos da <i>Polkadot</i> e <i>Ethereum</i>. Em um modelo único e coerente, ${KeywordJam} oferece um ambiente de objeto global singleton e permissionless - muito parecido com o ambiente de contratos inteligentes pioneiro no Ethereum - emparelhado com computação paralelizada segura em uma rede de nós escalável, uma proposta pioneira do Polkadot.`,
  "Abstract.p2": `${KeywordJam} introduz um sistema híbrido descentralizado que oferece funcionalidade de contratos inteligentes estruturada em torno de um dualismo seguro e escalável in-core/on-chain. Embora a funcionalidade de contratos inteligentes implique algumas semelhanças com o paradigma da Ethereum, o modelo geral do serviço oferecido é amplamente impulsionado pela arquitetura subjacente da Polkadot.`,
  "Abstract.p3": `${KeywordJam} é de natureza permissonless, onde que qualquer pessoa pode implantar código como um serviço, mediante uma taxa proporcional aos recursos que esse código utiliza e induza a execução desse código através da aquisição e alocação de <i>core-time</i>, uma métrica de computação resiliente e onipresente, um pouco semelhante à compra de gás no Ethereum. Já prevemos um serviço <i>CoreChains</i> compatível com Polkadot.`,
  "Additional Resources": "Recursos Adicionais",
  "Coming soon": "Em breve...",
  "CTA.Download": "Leia o Gray Paper",
  "filmed.brussels":
    "Filmado no The Sneakers Cafe em Bruxelas, Bélgica, em 11 de julho de 2024",
  "filmed.buenos.aires": "Filmado em Buenos Aires em 10 de maio de 2024",
  "filmed.singapore":
    "Filmado na Universidade Nacional de Singapura em 19 de junho de 2024.",
  "GrayPaper.Title":
    '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />UMA MÁQUINA VIRTUAL SEMI-COERENTE ESCALÁVEL E TRUSTLESS',
  "Hide Gray Paper": "Ocultar Gray Paper",
  "Latest version": "Versão mais recente",
  "Next Section": "Próxima Seção",
  "Previous Section": "Seção Anterior",
  "Prize.description": `A Web3 Foundation anuncia o prêmio para implementação do ${KeywordJam}, um prêmio de 10 milhões de DOT destinado a fomentar a diversidade no desenvolvimento do protocolo ${KeywordJam}. O objetivo deste prêmio é incentivar a criação de múltiplas implementações de clientes, aumentando a resiliência da rede.`,
  "Resources.Contribute": `Junte-se ao ${KeywordJam} em nossas salas no ${KeywordMatrix}:`,
  "Resources.DecisiveVersion": "no GitHub é a versão definitiva",
  "Resources.Download": "Obtenha uma cópia do Gray Paper aqui:",
  "Resources.Latex": "ou compile o LaTeX a partir do código-fonte:",
  "Resources.MostRecent": "versão oficial mais recente lançada",
  "Resources.VersionNoBackground":
    "Uma versão sem o fundo escuro é fornecida para sua conveniência. A",
  "Select Lecture": "Selecione uma Aula",
  "Show Section in Gray Paper": "Mostrar Seção no Gray Paper",
  "Tour Description":
    "Gavin Wood estará presente em universidades ao redor do mundo em uma série de palestras para guiar os espectadores pelo Gray Paper e explicar cada parte em detalhes.",
  Contribute: "Contribuir",
  Download: "Baixar",
  Interview: "Entrevista",
  Lectures: "Aulas",
  News: "Notícias",
  Prize: "Prêmio",
  Resources: "Recursos",
  Tour: "Tour",
  "prize.cta": undefined,
  "prize.apply": undefined,
}

const SpanishTranslation: Translation = {
  "Abstract.p1": `${KeywordAbstract} Presentamos una definición completa y formal de ${KeywordJam}, un protocolo que combina elementos tanto de <i>Polkadot</i> como de <i>Ethereum</i>. En un modelo coherente único, ${KeywordJam} proporciona un entorno de objeto global singleton no permisionado&#8212;muy similar al entorno de contratos inteligentes promovido por Ethereum&#8212;emparejado con cálculo de banda lateral seguro paralelizado sobre una red de nodos escalable, una propuesta pionera de Polkadot.`,
  "Abstract.p2": `${KeywordJam} introduce un sistema híbrido descentralizado que ofrece funcionalidad de contratos inteligentes estructurada alrededor de un dualismo seguro y escalable in-core/on-chain. Aunque la funcionalidad de contratos inteligentes implica algunas similitudes con el paradigma de Ethereum, el modelo de servicio ofrecido está impulsado en gran medida por la arquitectura subyacente de Polkadot.`,
  "Abstract.p3": `${KeywordJam} es de naturaleza no permisionada, permitiendo a cualquiera desplegar código como servicio en él por una tarifa proporcional a los recursos que este código utiliza y e inducir la ejecución de este código a través de la adquisición y asignación de <i>core-time</i>, una métrica de cálculo resiliente y ubicua, algo similar a la compra de gas en Ethereum. Ya prevemos un servicio de <i>CoreChains</i> compatible con Polkadot.`,
  "Additional Resources": undefined,
  "Coming soon": "Próximamente...",
  "CTA.Download": "Lee el Gray Paper",
  "filmed.brussels":
    "Filmado en The Sneakers Cafe en Bruselas, Bélgica el 11 de julio de 2024",
  "filmed.buenos.aires": "Filmado en Buenos Aires el 10 de mayo de 2024",
  "filmed.singapore":
    "Filmado en la Universidad Nacional de Singapur el 19 de junio de 2024.",
  "GrayPaper.Title":
    '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />Una máquina virtual escalable, semi-coherente y libre de confianza',
  "Hide Gray Paper": "Ocultar Gray Paper",
  "Latest version": undefined,
  "Next Section": "Próxima Sección",
  "Previous Section": "Sección Anterior",
  "Prize.description": undefined,
  "Resources.Contribute": `Únete al ${KeywordJam} en nuestro espacio ${KeywordMatrix}:`,
  "Resources.DecisiveVersion": undefined,
  "Resources.Download": "Obtén una copia del Gray Paper aquí:",
  "Resources.Latex": undefined,
  "Resources.MostRecent": undefined,
  "Resources.VersionNoBackground": undefined,
  "Select Lecture": "Seleccionar una Conferencia",
  "Show Section in Gray Paper": "Mostrar Sección en el Gray Paper",
  "Tour Description": undefined,
  Contribute: "Contribuir",
  Download: "Descargar",
  Interview: undefined,
  Lectures: "Conferencias",
  News: "Noticias",
  Prize: "Premio",
  Resources: "Recursos",
  Tour: "Tour",
  "prize.cta": undefined,
  "prize.apply": undefined,
}

const JapaneseTranslation: Translation = {
  "Abstract.p1": `${KeywordAbstract} ここに、<i>Polkadot</i>と<i>Ethereum</i>の両方の要素を組み合わせたプロトコルである${KeywordJam}の形式仕様の全体像を提示します。${KeywordJam}という一貫した一つのモデルの中には、Ethereumによって先駆けられたスマートコントラクト環境に通ずる「グローバルで、単一（シングルトン）の、パーミッションレスなオブジェクト指向環境」と、Polkadotによって先駆けられた「スケーラブルなノードネットワーク上で並列化された、セキュアなサイドバンド計算」の両要素が組み合わされています。`,
  "Abstract.p2": `${KeywordJam}は、セキュアでスケーラブルな、インコア（in-core）/オンチェーン（on-chain）の二元性を軸に構成されたスマートコントラクト機能を提供できる分散型ハイブリッドシステムを導入します。スマートコントラクト機能はEthereumの枠組みとある程度の類似点を示唆していますが、Polkadotが基盤とするアーキテクチャが、提供されるサービスモデル全体の礎となっています。`,
  "Abstract.p3": `${KeywordJam}は本質的にパーミッションレスであり、誰でもコードをサービスとして${KeywordJam}上にデプロイすることができます。その際、コードが消費するリソース量に応じて、Ethereumでのガス購入と似た形式で、${KeywordJam}上では<i>コアタイム（core-time）</i>と呼ばれる計算リソースを購入し、割り当てることで、デプロイしたコードの実行を行うことができます。<i>コアタイム</i>は、安定していてどこでも利用可能な計算リソースの単位です。私たちはすでに、Polkadotと互換性のある<i>コアチェーン（CoreChains）</i>サービスを構想しています。`,
  "Additional Resources": undefined,
  "Coming soon": "近日公開...",
  "CTA.Download": "Gray Paperを読む",
  "filmed.brussels": "7月11日にベルギー・ブリュッセルのスニーカーカフェで撮影",
  "filmed.buenos.aires": "2024年5月10日にブエノスアイレスで撮影",
  "filmed.singapore": "2024年6月19日にシンガポール国立大学で撮影",
  "GrayPaper.Title":
    '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />セミコヒーレント、スケーラブル、トラストレス仮想マシン（VM）',
  "Hide Gray Paper": "Gray Paperを非表示にする",
  "Latest version": undefined,
  "Next Section": "次のセクション",
  "Previous Section": "前のセクション",
  "Prize.description": undefined,
  "Resources.Contribute": `${KeywordMatrix}チャットルームから${KeywordJam}に参加しよう：`,
  "Resources.DecisiveVersion": undefined,
  "Resources.Download": "Gray Paperはここからダウンロードできます：",
  "Resources.Latex":
    "もしくは、こちらからLaTeXソースファイルをコンパイルできます:",
  "Resources.MostRecent": undefined,
  "Resources.VersionNoBackground": undefined,
  "Select Lecture": "講義を選択",
  "Show Section in Gray Paper": "Gray Paperでセクションを表示",
  "Tour Description": undefined,
  Contribute: "貢献する",
  Download: "ダウンロード",
  Interview: undefined,
  Lectures: "講義",
  News: "ニュース",
  Prize: "賞金制度",
  Resources: "リソース",
  Tour: "ツアー",
  "prize.cta": undefined,
  "prize.apply": undefined,
}

const ChineseTranslation: Translation = {
  "Abstract.p1": `${KeywordAbstract} 我们提出了一个全面和正式的关于${KeywordJam}的定义，一个结合了<i>Polkadot</i>和<i>Ethereum</i>元素的协议。在一个单一的连贯模型中，${KeywordJam}提供了一个全局单例的、无需许可的对象环境——类似于Ethereum开创的智能合约环境，配合上安全的旁路计算，此计算可以并行地运行在可扩展的节点网络上，这是Polkadot首创的方案。`,
  "Abstract.p2": `${KeywordJam}引入了一个去中心的混合系统，提供围绕安全性和可扩展的in-core/on-chain二元性构建的智能合约功能。虽然智能合约功能意味着与Ethereum的范式有一些相似之处，但所提供的服务的整体模型主要是由Polkadot的底层架构驱动的。`,
  "Abstract.p3": `${KeywordJam}的本质是无需许可的，允许任何人在其上部署代码作为服务，并根据该代码使用的资源支付相应的费用，并通过购买和分配<i>core-time</i>来引导该代码的执行，core-time是一种弹性的、普遍的计算度量，类似于Ethereum中的gas费用。我们已经构想了一个与Polkadot兼容的<i>CoreChains</i>服务。`,
  "Additional Resources": undefined,
  "Coming soon": "即将推出...",
  "CTA.Download": "阅读Gray Paper",
  "filmed.brussels": "2024年7月11日于比利时布鲁塞尔的Sneakers Cafe拍摄",
  "filmed.buenos.aires": "2024年5月10日在布宜诺斯艾利斯拍摄",
  "filmed.singapore": "2024年6月19日在新加坡国立大学拍摄",
  "GrayPaper.Title":
    '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />准一致、可扩展、无需信任的虚拟机',
  "Hide Gray Paper": "隐藏灰皮书",
  "Latest version": undefined,
  "Next Section": "下一节",
  "Previous Section": "上一节",
  "Prize.description": undefined,
  "Resources.Contribute": `加入我们的 ${KeywordJam} ${KeywordMatrix} 空间：`,
  "Resources.DecisiveVersion": undefined,
  "Resources.Download": "在这里获取Gray Paper的副本：",
  "Resources.Latex": undefined,
  "Resources.MostRecent": undefined,
  "Resources.VersionNoBackground": undefined,
  "Select Lecture": "选择讲座",
  "Show Section in Gray Paper": "在灰皮书中显示章节",
  "Tour Description": undefined,
  Contribute: "贡献",
  Download: "下载",
  Interview: undefined,
  Lectures: "讲座",
  News: "新闻",
  Prize: "奖励",
  Resources: "资源",
  Tour: "指南",
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: EnglishTranslation,
      },
      es: {
        translation: SpanishTranslation,
      },
      pt: {
        translation: PortugueseTranslation,
      },
      jp: {
        translation: JapaneseTranslation,
      },
      cn: {
        translation: ChineseTranslation,
      },
    },
  })

export default i18n
