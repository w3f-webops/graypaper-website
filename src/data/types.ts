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

export interface ClientData {
  description: `${string}.` | `${string}!` | ""
  homepage: `http${string}` | ""
  name: string
  lang: Language
  lang_set: "A" | "B" | "C" | "D" | "Z"
  milestone: 0 | 1 | 2 | 3 | 4 | 5
  contact: string[]
}

export interface Lecture {
  section: string
  videoId: string
  pages: Array<number>
  i18nSubtitle: string
}

export interface News {
  date: string
  title: string
  link: string
}
