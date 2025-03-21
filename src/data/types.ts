// Language Set interfaces
interface CooperateCodeLanguage {
  name: "Java" | "AspectJ" | "Kotlin" | "C#" | "Go"
  set: "A"
}

interface QuickCodeLanguage {
  name: "C" | "C++" | "D" | "Rust" | "Swift" | "Zig" | "Carbon" | "Fortran"
  set: "B"
}

interface CuteCodeLanguage {
  name:
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
  set: "C"
}

interface CorrectCodeLanguage {
  name:
    | "Ada"
    | "Julia"
    | "Erlang"
    | "Elixir"
    | "OCaml"
    | "Smalltalk"
    | "F#"
    | "Scala"
    | "APL"
  set: "D"
}

interface MadLanguage {
  name: "Brainfuck" | "Whitespace" | "Redstone"
  set: "Z"
}

// Combined Language type
type Language =
  | CooperateCodeLanguage
  | QuickCodeLanguage
  | CuteCodeLanguage
  | CorrectCodeLanguage
  | MadLanguage

export interface ClientData {
  description: `${string}.` | `${string}!` | ""
  homepage: `http${string}` | ""
  name: string
  languages: Language[]
  milestone: 0 | 1 | 2 | 3 | 4 | 5
  contact: string[]
  address?: string
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
