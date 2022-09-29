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
hideInToc: true
---

# Ciao!

---
background: '/images/mechanic-watch.jpg'
layout: cover
class: text-center
hideInToc: true
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
layout: intro
---

# I'm Michele

an Head of Frontend Development in Crispy Bacon

<br>
<br>

This slideshow can be found at

[https://tinyurl.com/mo-ct-2022](https://tinyurl.com/mo-ct-2022)

<br>
<br>

The code of this slideshow and complete code examples are available on [Github].

[Github]: https://github.com/bud-mo/slideshow-crispy-talks-micheleolivo-2022

---
layout: center
hideInToc: true
---

# Schedule

<Toc />

---
layout: section
---

# Boring stuff

---
layout: image-right
image: '/images/bored-guy.jpg'
hideInToc: true
---

# The definition

First, the boring stuff

Test-driven development (TDD) is a software development process **relying on software requirements being converted to test cases before software is fully developed**, and tracking all software development by repeatedly testing the software against all test cases. 

This is as opposed to software being developed first and test cases created later.

<br>

Definition from [Wikipedia](https://en.wikipedia.org/wiki/Test-driven_development)

<!--
First, we need to have in mind the definition of the test-driven development
approach.

In other word, the definition tells You to think first on **how**
the thing you are going to do can be tested.
-->

---
layout: section
---

# Why

---
layout: quote
hideInToc: true
---

> Let me touch this little thing

_You_, 2022

---
layout: image
image: '/images/cleveland-clinic.jpg'
---

---
layout: quote
hideInToc: true
---

> It will take 5 years of refactoring to fix this thing because "reasons"

_You_, 2022

---
layout: image-right
image: '/images/why.jpg'
hideInToc: true
---

# Why it is happened?

How TDD helps me?

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
layout: section
---

# How

---
layout: image-right
image: '/images/rocks-on-water.jpg'
hideInToc: true
---

# How can I start?

What can I do to apply TDD?

## <noto-glowing-star /> Golden rules* <noto-glowing-star />

<br>

<v-click>

1. 🪓 Split the code

</v-click>
<br>
<v-click>

2. 🥇 Create just one test

</v-click>
<br>
<v-click>

3. 🎯 Focus on the task related to the test

</v-click>

<br>
<br>
<br>
<br>

<v-click>

###### * Assuming that the requirements are crystal-clear

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
class: text-center
hideInToc: true
---

# It's all about splitting

<v-click>

Seriously

</v-click>

---
layout: image
image: '/images/code-is-code.jpg'
---

---
layout: section
---

# Examples

---
hideInToc: true
---

# Code Split

of a React component

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
hideInToc: true
---

# Unit test

of a React component

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

of the test

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
hideInToc: true
---

# Unit test

of a React hook

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

of the test

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
hideInToc: true
---

# Stories

with [Storybook](https://storybook.js.org/)

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

---
layout: section
---

# Wrap-up

---
layout: image-right
image: '/images/it-is-fine.jpg'
hideInToc: true
---

# You can continue in the way you live...

like this guy

<noto-see-no-evil-monkey class="mx-32 my-20 text-8xl" />

<v-click>

No, is **NOT** fine.

</v-click>

---
layout: image-right
image: '/images/new-level.jpg'
hideInToc: true
---

# Or You can Level Up

and be an awesome developer

<noto-star-struck class="m-32 text-8xl" />
