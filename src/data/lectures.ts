export type Lecture = {
  section: string
  videoId: string
  pages: Array<number>
  i18nSubtitle: string
}

export const lectures: Lecture[] = [
  {
    section: "1.1 Nomenclature",
    videoId: "wbnTnBQNDr4",
    pages: [1],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "1.2 Driving Factors",
    videoId: "abrGvSbKEjM",
    pages: [1, 2],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "1.3 Scaling Under Size-Synchrony Antagonism",
    videoId: "8f4aibO5vTI",
    pages: [2],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "2.1 Polkadot",
    videoId: "jFUQje4puAM",
    pages: [2, 3],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "2.2 Ethereum",
    videoId: "45c2oQTs-P8",
    pages: [3, 4],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "2.3 Fragmented Meta-Networks",
    videoId: "AUQZ38Wgl4c",
    i18nSubtitle: "filmed.buenos.aires",
    pages: [4, 5],
  },
  {
    section: "2.4 High-Performance Fully Synchronous Networks",
    videoId: "dhO53bV2b8c",
    pages: [5],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "3.1 Typography",
    videoId: "nPKq_5ChZv8",
    pages: [5],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "3.2 Functions and Operators",
    videoId: "qOw4XOu_n_w",
    pages: [6],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "3.3 Sets",
    videoId: "OqbSSkJFOIk",
    pages: [6],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "3.4 Numbers",
    videoId: "9qh4kH6Rewg",
    pages: [6],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "3.5 Dictionaries",
    videoId: "JOFb36EJx9Q",
    pages: [6],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "3.6 Truples",
    videoId: "irfFhAp3OxA",
    pages: [6],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "3.7 Sequencers",
    videoId: "4e1WCtYQbFM",
    pages: [6, 7],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "3.8 Cryptography",
    videoId: "2IzvXCE0G5w",
    pages: [7, 8],
    i18nSubtitle: "filmed.buenos.aires",
  },
  {
    section: "4 Overview",
    videoId: "Y4jzP633jiQ",
    pages: [8],
    i18nSubtitle: "filmed.singapore",
  },
  {
    section: "4.1 The Block",
    videoId: "R2aLFN60LjA",
    pages: [8],
    i18nSubtitle: "filmed.singapore",
  },
  {
    section: "4.2 The State",
    videoId: "3yE2Yl4RhEI",
    pages: [8],
    i18nSubtitle: "filmed.singapore",
  },
  {
    section: "4.2.1 State Transition Dependency Graph ",
    videoId: "1sCYaYb2-zw",
    pages: [8, 9],
    i18nSubtitle: "filmed.singapore",
  },

  // 4.3 Which History?
  // Page 9

  // 4.4 Time
  // Page 9

  {
    section: "4.5 Best Block",
    videoId: "C7D4DzUhV_M",
    i18nSubtitle: "filmed.singapore",
    pages: [9],
  },

  // 4.6 Economics
  // Page 9, 10

  {
    section: "4.7 Virtual Machine and Gas",
    videoId: "UXujxrshzDQ",
    i18nSubtitle: "filmed.singapore",
    pages: [10],
  },

  // 4.8 Epochs and Slots
  // Page 10, 11

  // 4.9 The Core Model and Services
  // Page 11, 12

  {
    section: "5 The Header",
    videoId: "eG75u2GmUD0",
    i18nSubtitle: "filmed.singapore",
    pages: [12],
  },

  {
    section: "5.1 The Epoch and Winning Tickets Markers",
    videoId: "N4b1SzB9TOg",
    i18nSubtitle: "filmed.singapore",
    pages: [12],
  },

  {
    section: "6.1 Timekeeping",
    videoId: "9rDkc8R9gU4",
    i18nSubtitle: "filmed.singapore",
    pages: [12, 13],
  },
  // 6.2 Safrole Basic State
  // Page 13

  {
    section: "6.3 Key Rotation",
    videoId: "pn4FK4fScMg",
    i18nSubtitle: "filmed.singapore",
    pages: [13],
  },

  {
    section: "6.4 Sealing and Entropy Accumulation",
    videoId: "CL6vMZLwtDk",
    i18nSubtitle: "filmed.singapore",
    pages: [13, 14],
  },

  {
    section: "6.5 The Slot Key Sequence",
    videoId: "jeiNDhT536o",
    i18nSubtitle: "filmed.singapore",
    pages: [14],
  },

  {
    section: "6.6 The Markers",
    videoId: "QfrN2i8XGag",
    i18nSubtitle: "filmed.singapore",
    pages: [14],
  },

  {
    section: "6.7 The Extrinsic and Tickets",
    videoId: "1xySjieSoDU",
    i18nSubtitle: "filmed.singapore",
    pages: [14, 15],
  },

  {
    section: "7 Recent History",
    videoId: "E2JA6bveihk",
    i18nSubtitle: "filmed.singapore",
    pages: [15],
  },

  {
    section: "8 Authorization",
    videoId: "gyY6LGJ9dbo",
    i18nSubtitle: "filmed.singapore",
    pages: [15],
  },

  {
    section: "8.1 Authorizers and Authorizations",
    videoId: "EJ4q8N4haV0",
    i18nSubtitle: "filmed.singapore",
    pages: [15],
  },

  {
    section: "8.2 Pool and Queue",
    videoId: "QSaCKG2B908",
    i18nSubtitle: "filmed.singapore",
    pages: [15, 16],
  },

  {
    section: "9 Service Accounts",
    videoId: "iek9B42k8Rg",
    i18nSubtitle: "filmed.singapore",
    pages: [16],
  },

  {
    section: "9.1 Code and Gas",
    videoId: "5UonAD0EpKI",
    i18nSubtitle: "filmed.singapore",
    pages: [16],
  },

  {
    section: "9.2 Preimage Lookups",
    videoId: "4leVpNtf3iw",
    i18nSubtitle: "filmed.singapore",
    pages: [16],
  },

  {
    section: "9.2.1 Invariants",
    videoId: "QIf6gShjByk",
    i18nSubtitle: "filmed.singapore",
    pages: [17],
  },

  {
    section: "9.2.2 Semantics",
    videoId: "a0OPe50r84o",
    i18nSubtitle: "filmed.singapore",
    pages: [17],
  },

  {
    section: "9.3 Account Footprint and Threshold Balance",
    videoId: "jI9k5PUGR9M",
    i18nSubtitle: "filmed.singapore",
    pages: [17],
  },

  {
    section: "9.4 Service Privileges ",
    videoId: "fND-n4gtxxI",
    i18nSubtitle: "filmed.singapore",
    pages: [17],
  },
  {
    section: "10 Judgements",
    videoId: "Ed--83UTLPk",
    i18nSubtitle: "filmed.singapore",
    pages: [17],
  },
  {
    section: "10.1 State",
    videoId: "8Y3CBHa6_PA",
    i18nSubtitle: "filmed.singapore",
    pages: [17],
  },
  {
    section: "10.2 Extrinsic",
    videoId: "yUIwWiSj2-k",
    i18nSubtitle: "filmed.singapore",
    pages: [17, 18],
  },
  {
    section: "10.3 Header",
    videoId: "GJnERoLNY-4",
    i18nSubtitle: "filmed.singapore",
    pages: [18],
  },
  {
    section: "11 Reporting and Assurance",
    videoId: "N49WRilkbNw",
    i18nSubtitle: "filmed.singapore",
    pages: [18],
  },
  {
    section: "11.1 State",
    videoId: "M9dYhXJO0-k",
    i18nSubtitle: "filmed.singapore",
    pages: [19],
  },
  {
    section: "11.1.1 Work Report",
    videoId: "wmz6Osi6Ww0",
    i18nSubtitle: "filmed.singapore",
    pages: [19],
  },
  {
    section: "11.1.2 Refinement Context",
    videoId: "OKNT9Owt5VU",
    i18nSubtitle: "filmed.singapore",
    pages: [19],
  },
  {
    section: "11.1.3 Availability",
    videoId: "Sms_glTSO6Q",
    i18nSubtitle: "filmed.singapore",
    pages: [19],
  },
  {
    section: "11.1.4 Work Result",
    videoId: "Q4S5CSjQBh8",
    i18nSubtitle: "filmed.singapore",
    pages: [19],
  },
  {
    section: "11.2 Package Availability Assurances",
    videoId: "MCZPtuFgltw",
    i18nSubtitle: "filmed.singapore",
    pages: [19],
  },
  {
    section: "11.2.1 The Assurances Extrinsic",
    videoId: "NDGc7YUJoG0",
    i18nSubtitle: "filmed.singapore",
    pages: [19],
  },
  {
    section: "11.3 Guarantor Assignments",
    videoId: "WEK48WQd2ac",
    i18nSubtitle: "filmed.singapore",
    pages: [20],
  },
  {
    section: "11.4 Work Report Guarantees",
    videoId: "u5MMbOm4Mnk",
    i18nSubtitle: "filmed.singapore",
    pages: [20],
  },
  {
    section: "11.4.1 Contextual Validity of Reports",
    videoId: "DmsYh92Yg3Q",
    i18nSubtitle: "filmed.singapore",
    pages: [20],
  },
  {
    section: "12.1 Preimage Integration",
    videoId: "JiPYhyzdgq8",
    i18nSubtitle: "filmed.singapore",
    pages: [21],
  },
  {
    section: "12.2 Gas Accounting",
    videoId: "0O_Ep-PtLg0",
    i18nSubtitle: "filmed.singapore",
    pages: [21],
  },
  {
    section: "12.3 Wrangling",
    videoId: "1SaYu2I5uh0",
    i18nSubtitle: "filmed.singapore",
    pages: [21],
  },
  {
    section: "12.4 Invocation",
    videoId: "PNMn3v1QNz0",
    i18nSubtitle: "filmed.singapore",
    pages: [21, 22],
  },
  {
    section: "13 Validator Activity Statistics",
    videoId: "sJ1Fs9g3c5k",
    i18nSubtitle: "filmed.singapore",
    pages: [22],
  },
]
