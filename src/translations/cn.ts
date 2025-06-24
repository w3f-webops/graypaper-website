import { Translation } from "../i18n"
import { KeywordAbstract, KeywordJam, KeywordMatrix } from "./helpers"

const translation: Translation = {
    "Abstract.p1": `${KeywordAbstract} 我们提出了一个全面和正式的关于${KeywordJam}的定义，一个结合了<i>Polkadot</i>和<i>Ethereum</i>元素的协议。在一个单一的连贯模型中，${KeywordJam}提供了一个全局单例的、无需许可的对象环境——类似于Ethereum开创的智能合约环境，配合上安全的旁路计算，此计算可以并行地运行在可扩展的节点网络上，这是Polkadot首创的方案。`,
    "Abstract.p2": `${KeywordJam}引入了一个去中心的混合系统，提供围绕安全性和可扩展的in-core/on-chain二元性构建的智能合约功能。虽然智能合约功能意味着与Ethereum的范式有一些相似之处，但所提供的服务的整体模型主要是由Polkadot的底层架构驱动的。`,
    "Abstract.p3": `${KeywordJam}的本质是无需许可的，允许任何人在其上部署代码作为服务，并根据该代码使用的资源支付相应的费用，并通过购买和分配<i>core-time</i>来引导该代码的执行，core-time是一种弹性的、普遍的计算度量，类似于Ethereum中的gas费用。我们已经构想了一个与Polkadot兼容的<i>CoreChains</i>服务。`,
    // TODO confirm by native speaker
    "Additional Resources": undefined,
    "Clients": "客户端",
    "Clients.add": `如果您想列出您的客户端或更新您的信息，请<a target=\"_blank\" href=\"https://github.com/w3f-webops/graypaper-website/issues/new?assignees=&labels=&projects=&template=client-listing-request.md&title=Client+Listing%3A+XYZ\">在此</a>提交请求。完成里程碑后，请<a href=\"https://github.com/w3f/jam-milestone-delivery\" target=\"_blank\">向Web3基金会提交您的里程碑</a>以领取奖励。`,
    "Clients.amount": `目前在<a href=\"https://jam.web3.foundation/#languages\" target=\"_blank\">5种语言集</a>中共列出了{{numberOfClients}}个客户端：`,
    "Clients.contact": "联系方式",
    "Clients.language": "语言",
    "Clients.milestone": "里程碑",
    "Clients.name": "名称",
    "Clients.set": "集合",
    "Clients.web": "网站",
    "Clients.why": `<a href=\"/prize\">${KeywordJam} 实施者奖</a>鼓励多个客户端实现以增强网络弹性。本页表格列出了已知正在开发的客户端。`,
    "Coming soon": "即将推出...",
    "Contribute": "贡献",
    "CTA.Download": "阅读Gray Paper",
    "Download": "下载",
    "filmed.brussels": "2024年7月11日于比利时布鲁塞尔的Sneakers Cafe拍摄",
    "filmed.buenos.aires": "2024年5月10日在布宜诺斯艾利斯拍摄",
    "filmed.singapore": "2024年6月19日在新加坡国立大学拍摄",
    "GrayPaper.Title": '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />准一致、可扩展、无需信任的虚拟机',
    "Hide Gray Paper": "隐藏灰皮书",
    "Interview": "访谈",
    "Latest version": "最新版本",
    "Lectures": "讲座",
    "News": "新闻",
    "Next Section": "下一节",
    "Previous Section": "上一节",
    "Prize": "奖励",
    "Prize.resources": `在此了解有关奖项、申请方式、里程碑和规则的更多信息：`,
    "Prize.cta": "阅读公告",
    "Prize.description": `Web3基金会宣布${KeywordJam}实施者奖，总奖池为1000万DOT，旨在促进${KeywordJam}协议开发的多样性。该奖项的目标是鼓励创建多个客户端实现，从而增强网络弹性。`,
    "Prize.headline": "1000万DOT奖池",
    "Resources.Contribute": `加入我们的 ${KeywordJam} ${KeywordMatrix} 空间：`,
    // TODO confirm by native speaker
    "Resources.DecisiveVersion": undefined,
    "Resources.Download": "在这里获取Gray Paper的副本：",
    "Resources.Latex": "或从源码编译LaTeX：",
    "Resources.MostRecent": "最新官方发布版本",
    "Resources.VersionNoBackground": "为方便起见，提供了无深色背景版本。决定性版本",
    // TODO confirm by native speaker
    "Resources.UnofficialVersions": "非官方翻译版本:",
    // TODO confirm by native speaker
    "Resources.ChineseTranslation": "中文版 by Qinwen Wang (Lollipop Builders)",
    // TODO confirm by native speaker
    "Resources.MetaDescription": "加入JAM所需的所有资源。",
    "Resources": "资源",
    "Select Lecture": "选择讲座",
    "Show Section in Gray Paper": "在灰皮书中显示章节",
    "Tour Description": "Gavin Wood将在全球各大学举办系列讲座，带领大家深入解读Gray Paper。",
    "Tour YouTube": `<a href=\"https://www.youtube.com/@JamPrizeTour\" target=\"_blank\">${KeywordJam} 奖励巡回YouTube频道</a>分享本次巡回的录制内容。请参见<a href=\"/lectures\">讲座</a>部分，结合巡回资料学习Gray Paper。`,
    "Tour": "指南",
}

export default translation