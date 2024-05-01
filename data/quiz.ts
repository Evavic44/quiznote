export const q = {
  topic: "Object-oriented Programming in Java",
  quizzes: [
    {
      id: 4,
      question: "What is abstraction in Java?",
      description:
        "Define abstraction and its significance in Java programming.",
      options: {
        a: "It is a process of wrapping code and data together into a single unit.",
        b: "It is a way to implement encapsulation in Java.",
        c: "It is a mechanism wherein a new class is derived from an existing class.",
        d: "It is a technique to hide internal implementation details and show only functionality.",
      },
      answer: "d",
      resources: [
        {
          title: "GeeksforGeeks - Abstraction in Java",
          link: "https://www.geeksforgeeks.org/abstraction-in-java/",
        },
        {
          title: "Oracle Java Documentation - Abstraction",
          link: "https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html",
        },
      ],
    },
    {
      id: 2,
      question:
        "Which of the following is an advantage of using interfaces in Java?",
      description: "Choose the correct advantage of interfaces in Java.",
      options: {
        a: "They allow for multiple inheritance.",
        b: "They provide a way to achieve abstraction.",
        c: "They can have method implementations.",
        d: "They are used for data encapsulation.",
      },
      answer: "b",
      resources: [
        {
          title: "Oracle Java Documentation - Interfaces",
          link: "https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html",
        },
      ],
    },
    {
      id: 3,
      question: "What is the purpose of the 'super' keyword in Java?",
      description: "Identify the usage of the 'super' keyword in Java.",
      options: {
        a: "To call the constructor of the superclass.",
        b: "To access the instance variables of the superclass.",
        c: "To override a method in the superclass.",
        d: "To create an object of the superclass.",
      },
      answer: "a",
      resources: [
        {
          title: "GeeksforGeeks - super keyword in Java",
          link: "https://www.geeksforgeeks.org/super-keyword/",
        },
      ],
    },
    {
      id: 4,
      question:
        "Which of the following is true about abstract classes in Java?",
      description:
        "Choose the correct statement about abstract classes in Java.",
      options: {
        a: "They can be instantiated.",
        b: "They cannot have constructors.",
        c: "They cannot have abstract methods.",
        d: "They must be declared final.",
      },
      answer: "b",
      resources: [
        {
          title: "Oracle Java Documentation - Abstract Classes",
          link: "https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html",
        },
      ],
    },
    {
      id: 5,
      question:
        "Which of the following is NOT a principle of object-oriented programming?",
      description:
        "Identify the principle that does not belong to object-oriented programming.",
      options: {
        a: "Encapsulation",
        b: "Polymorphism",
        c: "Functional Programming",
        d: "Inheritance",
      },
      answer: "c",
      resources: [
        {
          title: "Wikipedia - Object-oriented Programming",
          link: "https://en.wikipedia.org/wiki/Object-oriented_programming",
        },
      ],
    },
    {
      id: 6,
      question: "What does the 'final' keyword signify in Java?",
      description: "Understand the usage of the 'final' keyword in Java.",
      options: {
        a: "The variable cannot be changed.",
        b: "The class cannot be extended.",
        c: "The method cannot be overridden.",
        d: "All of the above",
      },
      answer: "d",
      resources: [
        {
          title: "GeeksforGeeks - final keyword in Java",
          link: "https://www.geeksforgeeks.org/final-keyword-java/",
        },
      ],
    },
    {
      id: 7,
      question:
        "What is the output of the following Java code snippet?\n\npublic class Main {\n  public static void main(String[] args) {\n    int x = 5;\n    System.out.println(x++);\n    System.out.println(++x);\n  }\n}",
      description: "Determine the output of the given Java code snippet.",
      options: {
        a: "5\n6",
        b: "6\n6",
        c: "6\n7",
        d: "5\n5",
      },
      answer: "c",
      resources: [
        {
          title: "Stack Overflow - Post Increment vs Pre Increment in Java",
          link: "https://stackoverflow.com/questions/24853/what-is-the-difference-between-i-and-i-in-java",
        },
      ],
    },
    {
      id: 8,
      question:
        "Which of the following is a correct way to declare an array in Java?",
      description: "Choose the correct syntax for declaring an array in Java.",
      options: {
        a: "int[] arr;",
        b: "int arr();",
        c: "int[arr];",
        d: "None of the above",
      },
      answer: "a",
      resources: [
        {
          title: "Oracle Java Documentation - Arrays",
          link: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html",
        },
      ],
    },
    {
      id: 9,
      question: "What is the difference between '=='' and '.equals()' in Java?",
      description:
        "Understand the distinction between '==' and '.equals()' in Java.",
      options: {
        a: "'==' compares memory addresses, while '.equals()' compares object values.",
        b: "'==' compares object values, while '.equals()' compares memory addresses.",
        c: "'==' is used to check for null values, while '.equals()' is used for comparing strings.",
        d: "'==' is used for string concatenation, while '.equals()' is used for mathematical operations.",
      },
      answer: "a",
      resources: [
        {
          title: "Stack Overflow - Comparing strings in Java",
          link: "https://stackoverflow.com/questions/513832/how-do-i-compare-strings-in-java",
        },
      ],
    },
    {
      id: 10,
      question:
        "What is the purpose of 'try', 'catch', and 'finally' blocks in Java?",
      description:
        "Understand the role of exception handling blocks in Java programming.",
      options: {
        a: "'try' block is used for code execution, 'catch' block handles exceptions, and 'finally' block is executed regardless of exceptions.",
        b: "'try' block handles exceptions, 'catch' block is used for code execution, and 'finally' block is executed only if no exceptions occur.",
        c: "'try' block is used for code execution, 'catch' block handles exceptions, and 'finally' block is optional.",
        d: "'try' block is used for code execution, 'catch' block is used for code execution if no exceptions occur, and 'finally' block handles exceptions.",
      },
      answer: "a",
      resources: [
        {
          title: "Oracle Java Documentation - Exception Handling",
          link: "https://docs.oracle.com/javase/tutorial/essential/exceptions/",
        },
      ],
    },
  ],
};
