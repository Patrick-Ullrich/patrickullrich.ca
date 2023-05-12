---
title: "Why useRef"
pubDate: "2020-10-10"
bannerUrl: "/assets/why-useref/banner.jpeg"
description: "Why are we using useRef and what are its implications?"
---

I remember the first time I had the requirement to build a timer using React.
I was just starting out with React and I wrote it the way I would expect as a JavaScript developer;
just to find out that it did not work. Weird behaviours such as variables that I defined within the
function body were undefined, which I was sure should have been defined. So I did what probably a lot
of us do — jump on google.ca and search for a **useInterval hook,** copied the code, and moved on.
As I became more familiar with React, this became a trivial task: “I need to store an interval id? Easy,
I’ll just use **useRef?**, duh”. But, why **useRef?** In this blog post we will explore alternative ways to solve the problem
and dive into **useRef?** to figure out why it ultimately is the best choice in this scenario.

---

If you are following the code examples, I would recommend trying out the Profiler to visually see components re-render.
To do so, open the console in chrome, clicking on Profiler -> General -> check ‘Highlight updates when components render’.

![profiler::Highlight updates when components render](/assets/why-useref/devtools.png)

If you are unsure how to start off a React project I would suggest checking out
[https://create-react-app.dev/docs/getting-started/](https://create-react-app.dev/docs/getting-started/) and come back once you are up and running.

---

Let’s start out with a classic Counter example

```tsx
function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Update</button>
    </div>
  );
}
```

Every time we press the Update button, we will see that everything on the page is being re-rendered as expected.

Simple enough, but what if we want to improve our UX and create a start and stop button to allow the user to start the timer and stop it respectively?
Lucky for us, browsers come natively with an interval functionality that is perfect for the job.

---

Unfamiliar with **setInterval** and **clearInterval?** Check out the official documentation on
developer.mozzila.org: [https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

In short, the **ssetInterval**s function will return an identifier that we can use to stop the interval at a later point using **sclearInterval(id: number).**

Let’s try implementing it:

```tsx
function Parent() {
  const [count, setCount] = useState<number>(0);

  let timerId: any = undefined;
  const startTimer = () => {
    timerId = window.setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  const endTimer = () => {
    window.clearInterval(timerId);
  };
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={endTimer}>Stop</button>
    </div>
  );
}
```

When we try running this project we will notice that the counter never stops.

![counter-not-working](/assets/why-useref/counter-not-working.gif)

Let’s take a closer look and check out what’s going on. If we put a **console.log** right after we set the **timerId** within the **startTimer** function,
and another **console.log** into the body of our function like so:

```tsx
let timerId: any = undefined;
console.log("timerId in render", timerId);
const startTimer = () => {
  timerId = window.setInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000);
  console.log("timerId in startTimer", timerId);
};
```

![console-output](/assets/why-useref/console-output.png)

Turns out our **timerId** is undefined. This is because once the interval executes (after one second) React re-renders the component
which will re-declare **timerId**. Luckily we have **state** to persist variables across renders. Easy mistake, let’s rewrite it using **useState.**

```tsx
const [timerId, setTimerId] = useState<number | undefined>(undefined);
console.log("timerId in render", timerId);
const startTimer = () => {
  let timerId = window.setInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000);
  setTimerId(timerId);
};
```

![correct-console-output](/assets/why-useref/correct-console-output.png)

As expected the app is now working. However, if you pay close attention to the console (or the profiler),
you will notice that once you press start we are seeing a render happening, even though the **count**1(the only state variable we are actually showing)
is not actually changing. This isn’t a huge deal in this small application, but seems like a waste of a render.
The reason it is re-rendering is because we are setting the timerId to the state which will trigger a re-render. Let’s remember this and come back to it later.

---

To enhance our UX even further, we want the user to be able to press their space key to stop the timer once started. To do so,
we want to **focus** the stop button after the start button has been pressed. We can achieve this through some DOM manipulation:

- Assign an **id** to the stop button
- Grab the element by id using `document.getElementById()`
- Set its focusing using `.focus()`

But that doesn’t sound very _reacty_, does it?

Welcome to **useRef.**

> **useRef** returns a mutable ref object whose .current property is initialized to the passed argument **(initialValue)**. The returned object will persist for the full lifetimes of the component.
> Source: [https://reactjs.org/docs/hooks-reference.html#useref](https://reactjs.org/docs/hooks-reference.html#useref)

To explain the above sentence in code that we already know:

```tsx
const ref = useRef<any>(initialValues);
```

Is from a markup perspective, the same as the following:

```tsx
const [ref] = useState<any>({ current: initialValue });
```

Note that we omitted the setter because **ref** is mutable. Furthermore, changing the value of **ref.current** will not trigger a re-render.
(hint hint) This sounds like the perfect tool to reference a DOM element that changes every time we re-render. Let’s implement our focus functionality using **useRef.**

```tsx
function Counter() {
  const [count, setCount] = useState<number>(0);
  const [timerId, setTimerId] = useState<any>(undefined);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const startTimer = () => {
    ...
    btnRef.current?.focus();
  };
  ...
  return (
    ...
    <button ref={btnRef} onClick={endTimer}>Stop</button>
  )
}
```

After pressing start, we can press the space key now to stop the counter because we focus the stop button. 🎉

---

Coming back to our extra render: As discussed, **useRef** is mutable and does not trigger a re-render. Sounds like it might be the better candidate to store our **timerId** than state.

```tsx
import React, { useRef, useState } from "react";
function Counter() {
  const [count, setCount] = useState<number>(0);
  const timerId = useRef<number | undefined>(undefined);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const startTimer = () => {
    timerId.current = window.setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    btnRef.current?.focus();
  };

  const endTimer = () => {
    window.clearInterval(timerId.current);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button ref={btnRef} onClick={endTimer}>
        Stop
      </button>
    </div>
  );
}
```

When we run the project now, we will see that we only re-render ones the timer increases.
Because **useRef**:

- **persists** the value across renders
- is mutable
- does **not trigger** a new render
- uses **short** Syntax

it is indeed the best way to store the the reference id of setInterval as well as a reference to a DOM element.
