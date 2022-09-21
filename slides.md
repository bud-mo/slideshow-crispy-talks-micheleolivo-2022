---
theme: default
background: '/images/mechanic-watch.jpg'
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Michele Olivo's Slides for Crispy Talk 2022
  Test-Driven development

  [Github repository](https://github.com/bud-mo/slideshow-crispy-talks-micheleolivo-2022)
drawings:
  persist: false
css: unocss
title: Test-Driven Development
download: false
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

# About this slideshow

This slideshow can be found at

[slideshow-crispy-talks-micheleolivo-2022.vercel.app](https://slideshow-crispy-talks-micheleolivo-2022.vercel.app)

<br>
<br>

The code is available on [Github].

[Github]: https://github.com/bud-mo/slideshow-crispy-talks-micheleolivo-2022

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
image: '/images/bored-guy.jpg'
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
image: '/images/why.jpg'
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
image: '/images/rocks-on-water.jpg'
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
background: '/images/split.jpg'
layout: cover
---

# It's all about splitting

---

# Split a React component

```tsx {all|4|6-8}
import useMyComponent from './use-my-component';

const MyComponent: FC = () => {
  const { name } = useMyComponent();
  return (
    <div>
      Hello {name}
    </div>
  );
};
```

Source code on [Github](https://github.com/bud-mo/slideshow-crispy-talks-micheleolivo-2022/blob/master/example-code/src/components/my-component.tsx)

---
layout: two-cols
---

# Unit test

Of a React component

```tsx {all|4-6|11-13|15|all}
vi.mock('../hooks/use-my-component', () => {
  return {
    default: vi.fn()
      .mockImplementation(
        () => ({ name: 'Buddy' })
      ),
  };
});

it('Should render the name', () => {
  render(
    <MyComponent />,
  );
  expect(
    screen.getByText(/Hello Buddy!/)
  ).toBeInTheDocument();
});
```

Source code on [Github](https://github.com/bud-mo/slideshow-crispy-talks-micheleolivo-2022/blob/master/example-code/src/components/my-component.test.tsx)

::right::

<v-click>

# Result

Of the test

```
 ✓ src/components/my-component.test.tsx (1)

Test Files  1 passed (1)
     Tests  1 passed (1)
  Start at  17:33:58
  Duration  2.66s (transform 743ms, setup 222ms, collect 441ms, tests 33ms)
```

</v-click>

---
layout: two-cols
---

# Unit test

Of a React hook

```tsx {all}
it('Should return an empty name', () => {
  const { result } = renderHook(() => useMyComponent());
  expect(result.current).toStrictEqual({
    name: undefined
  });
});
```

Source code on [Github](https://github.com/bud-mo/slideshow-crispy-talks-micheleolivo-2022/blob/master/example-code/src/hooks/use-my-component.test.ts)

::right::

<v-click>

# Result

Of the test

```
 ✓ src/hooks/use-my-component.test.ts (1)

Test Files  1 passed (1)
     Tests  1 passed (1)
  Start at  18:04:51
  Duration  1.61s (transform 521ms, setup 98ms, collect 51ms, tests 18ms)
```

</v-click>

---
layout: two-cols
---

# Stories

With [Storybook](https://storybook.js.org/)

```tsx {all|9-11|all}
export default {
  title: 'Components/MyComponent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultName: 'Buddy',
};
```

Source code on [Github](https://github.com/bud-mo/slideshow-crispy-talks-micheleolivo-2022/blob/master/example-code/src/components/my-component.stories.tsx)

::right::

<div class="absolute left-120 top-0">
  <img src="/images/screenshot-storybook-my-component.png" class="min-w-230"/>
</div>
