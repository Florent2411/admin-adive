const nowDate = new Date().toISOString();

export const emptyCV = {
  name: '',
  occupation: '',
  email: '',
  phone: '',
  address: '',
  picture: '',
  about: '',
  skills: [],
  hobbies: [],
  experiences: [],
  birthDate: new Date().toISOString(),
  education: [],
  other: '',
  languages: [],
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
  },
}

export const mockCV = {
  name: "BADINI Rachid Rodrigue",
  occupation: "Senior Fullstack Typescript Developper",
  email: "bsrodrigue@gmail.com",
  phone: "+22675225388",
  address: "Ouagadougou",
  picture: "",
  about: "I enjoy working on interesting projects",
  other: "Nothing more to say about me...",
  birthDate: nowDate,
  skills: [
    "Javascript", "Typescript", "Python", "Ruby", "Docker", "Express",
  ],
  hobbies: [
    "Reading", "Philosophy", "Programming", "Cooking",
  ],
  languages: [
    {
      "language": "German",
      "profisciency": "native"
    },
    {
      "language": "French",
      "profisciency": "native"
    },
    {
      "language": "Spanish",
      "profisciency": "fluent"
    },
  ],
  experiences: [
    {
      "title": "Javascript Backend Engineer",
      "description": "I worked on the servers of the payment services of Google to allow customers to purchase applications faster than usual.",
      "company": "Google",
      "country": "United States",
      "startDate": nowDate,
      "endDate": nowDate,
    }
  ],
  education: [
    {
      "title": "Bachelor in Computer Networking",
      "university": "Aube Nouvelle",
      "country": "Burkina Faso",
      "startDate": nowDate,
      "endDate": nowDate,
    }
  ],
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
  },
};
