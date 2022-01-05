---
---

# Introduction

***Week 1 - Tuesday***

## What are semantics?

The **semantics** of a program is the _meaning_ of a program. This is in contrast to _syntax_, which is the _structure_ of a program.

:::info

You learn about syntax in CS 153 "Compilers". This class is more about semantics.

:::

So, what is the meaning of a program?

Maybe we can just _run the program_ to see what it does! But, there might be a mistake in the code that we wrote. There might also be a mistake in the _compiler_ or the _interpreter_. Hmm, this is no good... :sweat:

Maybe we can _read the programming language's manual_! But, a manual only describes a single programming language and we might want to implement our program in many different programming languages. Also, a manual will be written in some _natural language_ like English or Spanish, which can be imprecise in meaning and hard to understand for foreign speakers. This is also no good... :weary:

Instead, we want to use mathematical, **formal language** to describe the semantics of a program. Using a formal language has the following benefits:

* **Less ambiguous.** The behavior of the language is clearer, which is useful for anyone who needs to write programs in the language, implement a compiler or interpreter for the language, add a new feature to the language, etc.

* **More concise.** Mathematical concepts and notation can clearly and concisely describe a language and state restrictions on legal programs in the language. For example, the Java Language Specification (2rd edition) devotes a chapter (26 pages) to describing the concept of definite assignment, most of which is describing, in English, a dataflow analysis that can be expressed more succinctly using mathematics.

* **Formal arguments.** Most importantly, a formal semantics allows us to state, and prove, program properties that we’re interested in. For example: we can state and prove that all programs in a language are guaranteed to be free of certain run-time errors, or free of certain security violations; we can state the specification of a program and prove that the program meets the specification (i.e., that
the program is guaranteed to produce the correct output for all possible inputs).

### Why are semantics important? :shrug:

When we build a program, we usually want to verify the following:

* Will my program crash or not when I try to run it?
* Will my program do what I want it do? For example, will some input $x$ be correctly transformed into some output $f(x)$?

The questions above are about the **correctness** of a program. One way to verify the correctness of a program is by using _tests_. Instead of using tests, this class will explore how you can _prove_ that your program is correct.

## Types of Semantics

The drawback of formal semantics is that they can lead to fairly complex mathematical models, especially if one attempts to describe all details in a full-featured modern language. Few real programming languages have a formal semantics, since modeling all the details of a real-world language is hard: real languages are complex, with many features.

In programming language theory, there are many _types_ of semantics, each with their own strengths and weaknesses. Here are a few that are explored in this class:

* Operational Semantics
* Denotational Semantics
* Axiomatic Semantics

Each of these types of semantics are briefly described below.

### Operational Semantics :floppy_disk:

Operational semantics is a way to describe the meaning of a program by constructing proofs from logical statements about its __execution__. A valid program is interpreted as a sequence of steps. These steps _are_ the meaning of the program.

You will learn about operational semantics in Week 1-2.

If you are interested, here is [the Wikipedia article on operational semantics](https://en.wikipedia.org/wiki/Operational_semantics).

### Denotational Semantics :books:

Denotational semantics is a way to describe the meaning of a program by constructing **mathematical objects** (called denotations). Denotational semantics is more "pure math-y" and abstract, while operational semantics is more concrete and intuitive to a programmer.

You will learn about denotational semantics in Week 3.

If you are interested, here is [the Wikipedia article on denotational semantics](https://en.wikipedia.org/wiki/Denotational_semantics).

### Axiomatic Semantics :brain:

Axiomatic semantics is a way to describe the meaning of a program by using logical statements. In particular, you use **predicates with variables**, where the variables define the state of the program.

You will learn about axiomatic semantics in Week 10.

If you are interested, here is [the Wikipedia article on axiomatic semantics](https://en.wikipedia.org/wiki/Axiomatic_semantics), although it is quite short.

## Conclusion

In computer science, semantics allow you to understand the meaning of a program and verify that your program is correct, no matter which programming language you decide to implement it in.

There are many strategies for using a mathematical formal language to describe a program's semantics.

In the next lecture, you will learn about one form of operational semantics called _small-step semantics_. :baby:
