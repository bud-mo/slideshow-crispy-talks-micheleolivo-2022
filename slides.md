---
theme: default
background: /images/mechanic-watch.jpg
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
title: Test-Driven Development
---

# Test-Driven Development

How to make everything working on the first try

<!--
Today We will see how Test-Driven Development can help You daily with
Your job.

After seeing the first slide probably You are thinking how boring is this
topic, at least it was my reaction.

But the way You approach the code can help You a lot, really!
-->

---
layout: center
---

# Schedule

Introduction to TDD

1. Boring stuff
1. Why
1. How
1. Examples
1. Wrap-up

---
layout: image-right
image: /images/bored-guy.jpg
---

# The definition

First, the boring stuff

Test-driven development (TDD) is a software development process **relying on software requirements being converted to test cases before software is fully developed**, and tracking all software development by repeatedly testing the software against all test cases. 

This is as opposed to software being developed first and test cases created later.

<!--
First, we need to have in mind the definition of the test-driven development
approach.

In other word, the definition tells You to think first on **how**
the thing you are going to do can be tested.
-->

---
layout: image-right
image: /images/why.jpg
---

# Why?

Why we **need** it?

<v-click>

### 🎯 Understand the requirements

😎 More confidence on the project

</v-click>
<v-click>

### 🏗 Engineer correctly

😌 No more messy code

</v-click>
<v-click>

### 🐛 Less bugs

🏖 More free time!

</v-click>
<v-click>

And less angry customers 😁

</v-click>

<!--
Thinking on how a thing can be tested gives Us the opportunity to
think on the requirements that was given to Us.

Once the requirements are correctly understood We can engineer correctly
the application.

So We write less bugs, that means We can spend less time debugging them.

So we have happy customers and PMs
-->
---
layout: image-right
image: /images/rocks-on-water.jpg
---

# How?

**How can I** achieve the peace of mind?

## 🌟 Golden rules 🌟

<v-click>

1. 🪓 Split the code

</v-click>
<v-click>

2. 🥇 Create just one test

</v-click>
<v-click>

3. 🎯 Focus on the task related to the test

</v-click>

<!--
To achieve that peace of mind We must follow 3 simple golden rules:

- The smaller is the code, the less dependency will have, easier will be to test.
- We need to make just one test for the use case we are going to develop, the next one will be created in the future.
  For example to cover an error from the backend, a new use case, when a bug appear and so on...
- You can focus only on that task: as you can mock evironment, depencencies and network calls you can focus on the solution.

-->

---
image: /images/so-boring.jpg
layout: image
---

---

# Tools

For a React application
