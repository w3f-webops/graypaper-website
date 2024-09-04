type Language =
  | "Java"
  | "AspectJ"
  | "Kotlin"
  | "C#"
  | "Go"
  | "C"
  | "C++"
  | "C/C++"
  | "D"
  | "Rust"
  | "Swift"
  | "Zig"
  | "Carbon"
  | "Fortran"
  | "Scheme"
  | "Common Lisp"
  | "Prolog"
  | "Haskell"
  | "ML"
  | "Perl"
  | "Python"
  | "Ruby"
  | "JavaScript"
  | "TypeScript"
  | "Groovy"
  | "Dart"
  | "Ada"
  | "Julia"
  | "Erlang"
  | "Elixir"
  | "OCaml"
  | "Smalltalk"
  | "F#"
  | "Scala"
  | "APL"
  | "Brainfuck"
  | "Whitespace"
  | "Redstone"

interface ClientData {
  description: `${string}.` | `${string}!` | ""
  homepage: `http${string}` | ""
  name: string
  lang: Language
  lang_set: "A" | "B" | "C" | "D" | "Z"
  milestone: 0 | 1 | 2 | 3 | 4 | 5
  contact: string[]
}

export const clients: ClientData[] = [
  {
    description: "Parity experimental JAM client. Currently closed source.",
    homepage: "",
    name: "PolkaJam",
    lang: "Rust",
    lang_set: "B",
    milestone: 0,
    contact: [],
  },
  {
    description: "JAM client implementation in Rust",
    homepage: "https://universaldot.foundation",
    name: "UNIVERSALDOT",
    lang: "Rust",
    lang_set: "B",
    milestone: 1,
    contact: [info@universaldot.foundation],
  },
  {
    name: "JamZig",
    description:
      "Implementation of the Jam client in the Zig programming language.",
    homepage: "https://jamzig.dev",
    lang: "Zig",
    lang_set: "B",
    milestone: 0,
    contact: ["info@jamzig.dev", "#jamzig:matrix.org"],
  },
  {
    description:
      "Some Polkadot coders taking up the challenge. Currently closed source.",
    homepage: "",
    name: "Graymatter",
    lang: "Elixir",
    lang_set: "D",
    milestone: 0,
    contact: [],
  },
  {
    description:
      "A cute Python implementation of Jam. Currently closed source.",
    homepage: "",
    name: "Jampy",
    lang: "Python",
    lang_set: "C",
    milestone: 0,
    contact: ["@DaKKK:matrix.org"],
  },
  {
    description:
      "Boka / 波卡 / bō kǎ: JAM built with Swift. Brought to you by Laminar Labs.",
    homepage: "",
    name: "Boka",
    lang: "Swift",
    lang_set: "B",
    milestone: 0,
    contact: ["bryan@acala.network"],
  },
  {
    description: "We are working on the Go implementation of Jam 🍓.",
    homepage: "https://www.eiger.co/",
    name: "Strawberry",
    lang: "Go",
    lang_set: "A",
    milestone: 0,
    contact: ["hello@eiger.co"],
  },
  {
    description:
      "TypeScript implementation of the JAM protocol. Currently not publicly visible.",
    homepage: "",
    name: "TSJam",
    lang: "TypeScript",
    lang_set: "C",
    milestone: 0,
    contact: ["@prematurata:matrix.org"],
  },
  {
    description:
      "Scala implementation of the JAM protocol. Currently not publicly visible.",
    homepage: "https://github.com/jam4scala/",
    name: "Jam4s",
    lang: "Scala",
    lang_set: "D",
    milestone: 0,
    contact: [
      "@sergei_astapov:matrix.org",
      "@subotic:matrix.org",
      "@celadari:matrix.org",
      "@basedafdev:matrix.org",
    ],
  },
  {
    description: "",
    homepage: "https://marcuspang.me/",
    name: "Jamgo",
    lang: "Go",
    lang_set: "A",
    milestone: 0,
    contact: ["@marcuspang:matrix.org"],
  },
  {
    description:
      "Spread the Joy with Every Jar - Taste the Magic of Our Jam & Jelly!",
    homepage: "https://zondax.ch/",
    name: "Jelly",
    lang: "Julia",
    lang_set: "D",
    milestone: 0,
    contact: ["jelly@zondax.ch"],
  },
  {
    description:
      "We are a team of 8, experienced in Java and Kotlin blockchain development.",
    homepage: "",
    name: "JAM Forge",
    lang: "Kotlin",
    lang_set: "A",
    milestone: 0,
    contact: ["@philoniare:matrix.org"],
  },
  {
    description:
      "From Colorful Notion: Would love to connect our working QUIC implementation in Fall, organize a weeklong meetup at Devcon in Thailand.",
    homepage: "https://dune.com/substrate/jam-duna",
    name: "JAM DUNA",
    lang: "Go",
    lang_set: "A",
    milestone: 0,
    contact: ["https://t.me/colorfulnotion"],
  },
  {
    description: "",
    homepage: "https://fluffylabs.dev",
    name: "Typeberry",
    lang: "TypeScript",
    lang_set: "C",
    milestone: 0,
    contact: ["@tomusdrw:matrix.org"],
  },
  {
    description: "A Team of Web3 Researchers+Devs; Currently private.",
    homepage: "https://chainscore.finance",
    name: "Tessera",
    lang: "Rust",
    lang_set: "B",
    milestone: 0,
    contact: ["prasad@chainscore.finance"],
  },
  {
    description:
      "We are working on Zig implementation of JAM. Currently closed source.",
    homepage: "",
    name: "Jam With Zig",
    lang: "Zig",
    lang_set: "B",
    milestone: 0,
    contact: ["@rosarp:matrix.org"],
  },
  {
    description: "Rust implementation of JAM.",
    homepage: "",
    name: "Vinwolf",
    lang: "Rust",
    lang_set: "B",
    milestone: 0,
    contact: ["vinsystems@proton.me"],
  },
  {
    description: "C++ implementation of JAM.",
    homepage: "https://marmaladeorg.github.io/marmalade-frontend/",
    name: "Marmalade",
    lang: "C++",
    lang_set: "B",
    milestone: 0,
    contact: ["@sisco0:matrix.org"],
  },
  {
    description:
      "Gossamer JAM client. Built in Go and developed by ChainSafe. Currently closed source.",
    homepage: "https://github.com/chainsafe",
    name: "Gossamer",
    lang: "Go",
    lang_set: "A",
    milestone: 0,
    contact: ["gossamer@chainsafe.io"],
  },
  {
    description: "PBA Alumni Implementing JAM in Elixir.",
    homepage: "http://jamixir.org/",
    name: "Jamixir",
    lang: "Elixir",
    lang_set: "D",
    milestone: 0,
    contact: ["daniel@jamixir.org", "daiagi@jamixir.org"],
  },
  {
    description:
      "A fun GO implementation of the JAM client by the AirLyft team. Currently closed source.",
    homepage: "https://polkadot.airlyft.one/",
    name: "Jamaica",
    lang: "Go",
    lang_set: "A",
    milestone: 0,
    contact: ["@rmagon:matrix.org"],
  },
  {
    description: "An OCaml implementation of the Polkadot JAM.",
    homepage: "",
    name: "Po-jam-l",
    lang: "OCaml",
    lang_set: "D",
    milestone: 0,
    contact: ["me@markpetruska.eu"],
  },
  {
    description: "C++ implementation of JAM protocol by Quadrivium.",
    homepage: "https://qdrvm.io/",
    name: "MORUM",
    lang: "C++",
    lang_set: "B",
    milestone: 0,
    contact: ["info@qdrvm.io"],
  },
  {
    description: "",
    homepage: "",
    name: "Block Cowboys",
    lang: "C/C++",
    lang_set: "B",
    milestone: 0,
    contact: ["sbaileyms@gmail.com"],
  },
  {
    description: "JAM Rust client implementation.",
    homepage: "",
    name: "RJAM",
    lang: "Rust",
    lang_set: "B",
    milestone: 0,
    contact: ["@0xjunha:matrix.org"],
  },
  {
    description:
      "Haskell implementation of the JAM protocol. Currently not publicly visible.",
    homepage: "",
    name: "JAMLabs",
    lang: "Haskell",
    lang_set: "C",
    milestone: 0,
    contact: ["@AltiMario:matrix.org", "info@mlabs.city"],
  },
  {
    name: "PyJAMaz",
    description: "Python Implementation of JAM by JAMdot Technologies.",
    homepage: "https://github.com/JAMdotTech",
    lang: "Python",
    lang_set: "C",
    milestone: 0,
    contact: ["hello@jamdot.tech"],
  },
  {
    name: "subjam",
    description: "Go implementation of JAM protocol.",
    homepage: "https://github.com/subjamdev",
    lang: "Go",
    lang_set: "A",
    milestone: 0,
    contact: ["https://x.com/nathanccxv"],
  },
  {
    name: "JavaJam",
    description: "Java implementation of JAM.",
    homepage: "https://method5.com",
    lang: "Java",
    lang_set: "A",
    milestone: 0,
    contact: ["info@method5.com"],
  },
]
