import React, { Component } from "react";
import Product from "./Product";
import img1_path from "./images/id1_bookImg.jpeg";
import img2_path from "./images/id2_bookImg.jpeg";
import img3_path from "./images/id3_bookImg.jpeg";
import img4_path from "./images/id4_bookImg.jpeg";
import img5_path from "./images/id5_bookImg.jpeg";

class ShoppingCart extends Component {
  constructor(props) {
    super(props); // calling parent class's constructor
    this.state = {
      // initialize state
      products: [
        {
          id: 1,
          productName: "Introduction to Algorithms",
          price: 125.99,
          quantity: 0,
          img: img1_path,
          description:
            "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. <br/><br/>Introduction to Algorithms uniquely combines rigor and comprehensiveness. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers. Each chapter is relatively self-contained and can be used as a unit of study. The algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming. The explanations have been kept elementary without sacrificing depth of coverage or mathematical rigor.",
        },
        {
          id: 2,
          productName: "Cracking the Coding Interview",
          price: 59.99,
          quantity: 0,
          img: img2_path,
          description:
            "I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.\nCracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.\n Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.\nThese interview questions are real; they are not pulled out of computer science textbooks. They reflect what's truly being asked at the top companies, so that you can be as prepared as possible.",
        },
        {
          id: 3,
          productName: "Clean Code",
          price: 99.99,
          quantity: 71,
          img: img3_path,
          description:
            "Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.\nNoted software expert Robert C. Martin, presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin, who has helped bring agile principles from a practitioner’s point of view to tens of thousands of programmers, has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of software craftsman, and make you a better programmer―but only if you work at it.\nWhat kind of work will you be doing? You’ll be reading code―lots of code. And you will be challenged to think about what’s right about that code, and what’s wrong with it. More importantly you will be challenged to reassess your professional values and your commitment to your craft.  \nClean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code―of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.",
        },
        {
          id: 4,
          productName: "Think Like a Programmer",
          price: 24.99,
          quantity: 0,
          img: img4_path,
          description:
            "Programming isn’t just about syntax and assembling code—it’s about problem solving, and all good programmers must think creatively to solve problems. Like the best-selling Think Like a Programmer before it (with over 75,000 copies sold worldwide), this Python-based edition will help you transition from reading programs to writing them, in, Python. (No prior programming experience required!)\n\nRather than simply point out solutions to problems, author V. Anton Spraul will get you thinking by exposing you to techniques that will teach you how to solve programming problems on your own. Each chapter covers a single programming concept like data types, control flow, code reuse, recursion, and classes, then a series of Python-based exercises have you put your skills to the test.",
        },
        {
          id: 5,
          productName: "Learning SQL",
          price: 42.99,
          quantity: 0,
          img: img5_path,
          description:
            "As data floods into your company, you need to put it to work right away—and SQL is the best tool for the job. With the latest edition of this introductory guide, author Alan Beaulieu helps developers get up to speed with SQL fundamentals for writing database applications, performing administrative tasks, and generating reports. You’ll find new chapters on SQL and big data, analytic functions, and working with very large databases.\n\nEach chapter presents a self-contained lesson on a key SQL concept or technique using numerous illustrations and annotated examples. Exercises let you practice the skills you learn. Knowledge of SQL is a must for interacting with data. With Learning SQL, you’ll quickly discover how to put the power and flexibility of this language to work.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="row container-fluid m-auto cartCT">
        <h1 className="m-2 p-2">Shopping Cart</h1>
        {this.state.products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              onIncrease={this.quantityIncrease}
              onDecrease={this.quantityDecrease}
              onDelete={this.handleDelete}
            >
              <button className="btn btn-primary">Purchase</button>
            </Product>
          );
        })}
      </div>
    );
  }

  quantityIncrease = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };

  quantityDecrease = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
    this.setState({ products: allProducts });
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete?")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };

  // executes after constructor & render method
  componentDidMount = () => {};
}

export default ShoppingCart;
