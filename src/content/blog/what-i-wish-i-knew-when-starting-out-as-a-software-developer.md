---
title: "What I wish I knew when starting out as a Software Developer"
pubDate: "2020-09-17"
bannerUrl: "/assets/what-i-wish-i-knew-when-starting-out-as-a-software-developer/banner.jpeg"
description: "You are in the middle of your studies to become a software developer or just landed your first job - Congratulations 🥳 — Let me share some recommendations that I have received from mentors in the past, thoughts I have shared with mentees, and ideas that I wish someone would have told me when I started out. While there are many 100+ tips posts out there, I will focus on a short list of the things that I believe have been the most impactful in my career."
---

You are in the middle of your studies to become a software developer or just landed your first job - Congratulations 🥳 — Let me share some recommendations that I have received from mentors in the past, thoughts I have shared with mentees, and ideas that I wish someone would have told me when I started out. While there are many 100+ tips posts out there, I will focus on a short list of the things that I believe have been the most impactful in my career.

Speaking of me… Let’s start the list with one of my biggest regrets looking back, call it a bonus tip: **Prioritize side projects**. I started my career by taking a post secondary diploma in Software before eventually getting my B. Sc. in Computer Science later on. My mantra could be described as “Work Hard, Play Hard” with a big focus on the later half. When not in class, I was reading up on the latest Starcraft 2 builds or planning out my twitch career. My peak was six simultaneous viewers and I barely made it into Masters in the Starcraft Ladder. Is this what I regret? No. Play as much video games as you want and don’t give up on your streaming career - but, **prioritize side projects.** Schedule a time slot to learn a new framework, a new programming language, or just read a book about software. While I do work on side projects now, I find myself more often than not prioritizing other things over them. I am in my late twenties with no kids, I can only imagine that once kids are in the picture my priorities will shift even further.

With that primer, let’s get started in no particular order.

---

## Use a Version Control System

> There are only 2 types of developers. Developers who use Source Control and developers who have not yet lost code.

One of the most fundamental tools all developers share is a version control system such as [Microsofts TFVC](https://en.wikipedia.org/wiki/Azure_DevOps_Server) or [Git](https://en.wikipedia.org/wiki/Git).
It will be one of your most used pieces of software of your developer weapon arsenal. Ensure that you understand it well.
You should feel very confident in dealing with:

- merge conflicts
- branches
- pull requests
- writing meaningful commit messages

Using a GUI for this is fine, but will find that you feel more confident once you have learned navigating git using your terminal.

![xkcd-comic-git::Source: https://xkcd.com/1597/](/assets/what-i-wish-i-knew-when-starting-out-as-a-software-developer/git.png)

If you aren’t feeling confident using git for example, I highly recommend a resource such as [https://learngitbranching.js.org/](https://learngitbranching.js.org/) to get you started.
Then really take it to the next level and start using version control in every project you are working on. Start holding yourself to a high standard by using a pull request for every feature you are adding to your project,
and explore implementing some basic branching strategy.

---

## “Tutorial Cycle Trap”

We live in an amazing time where you can learn essentially anything you want online via tutorials. While tutorials are great resources to get started in coding, you want to ensure you aren’t just jumping from one tutorial to the next. After you have finished a tutorial, you need to apply the newly gained knowledge. It’s like learning how to say Hello in 30 languages, but never using it in a complete sentence - not very useful.

Instead try to apply your knowledge by building a basic application as a side project. If not sure what to build, here are some ideas:

- If you are part of a sports team, try to think of a problem to solve
- Ask your family or friends for problems they encounter that you can come up with a solution to solve
- Look for open source projects that you can contribute too. (Luckily you are well versed with Git)
- Every day apps such as a weather app, To-Do list, or page that allows you to search through a library are always great apps to try building
- Copy an existing app like Medium, Facebook, or Instagram

The reasons why you find yourself in that endless cycle can vary, but often due to uncertainty in your own skill or to **decision paralysis.**

---

## Decision Paralysis

![xkcd-comic-decision::Source: https://xkcd.com/1801/](/assets/what-i-wish-i-knew-when-starting-out-as-a-software-developer/decision_paralysis.png)

One of the most common questions I get from Junior developers is: “Should I learn Angular or ReactJS?” or “What is the best programming language?”.
Looking at my Google search history, I might be guilty for the same question way too often myself.
The truth is, life isn’t always black and white and the best answer is probably: **it depends.** That isn’t very helpful, is it?
There is other advice that you might have read as well, such as: **Choose the right tool for the job or Looking at this performance comparison, Language X is the best performing language.**
But who wants to build a weather app using Assembly? The truth is, it **does not matter** what language or framework you pick.
Especially in the first years of development, it’s all about **learning how to learn.** As you learn your first language, you will quite literally learn how to learn a language,
which will allow you to learn your second language faster, and the third one even faster.
By the time you get comfortable with Language five or six, you will be able to pick up a new language over a weekend.

Let’s look at “polarizing” frameworks such as Angular and ReactJS as an example. Angular known to do things the “Angular Way” has still lots of transferable skills:

- Typescript
- Patterns such as the Facade pattern
- Async programming
- Web requests
- Modular components

and many more.
_So if you are currently using Angular, no worries, not all is lost._ 😉

---

## Red-Green-Refactor

A term popularized by Test-Driven-Development (TDD). While I do recommend writing tests, I will omit them from the advice on this one and instead focus on the Refactor part — which I think both Junior and Senior developers are often missing out on.

![red-green-refactor](/assets/what-i-wish-i-knew-when-starting-out-as-a-software-developer/red-green-refactor.jpeg)

Red and Green is being done by default by most developers, but rarely do I see a developer stop and take an honest look at their code, looking for improvements they could do to their code as part of their commit. Not only are you forgoing an opportunity to ship better code, you are also missing out on the learning experience that will come with it. Coming back to a point we made earlier — pull requests are an amazing tool you can incorporate here. Get in a habit to review your pull request, or have someone do a code review on your it. This will give you the opportunity to re-read through your changes and ensure you are satisfied.

---

## Databases are cool too

I might be biased on this one, but I believe that being able to understand data model diagrams, performance implications of the most basic queries and joins, and different use cases of different databases will make you a better developer overall. I was able to significantly be on boarded faster on client projects than other developers because I could infer a lot of the business straight from the Database. I also don’t think that I had a single job where I did not have to look into a performance issue due to a bad query, create a report for the business, or build new tables. Next time you start a project that uses NoSQL, maybe give SQL a try or vice versa.

---

## Share your Thoughts

and challenge opinions. You might be worried that you _“haven’t earned your spot on the table”_ or even that _“you are too junior to be sharing your ideas”._
Maybe simply worried that you might say something stupid? I am here to tell you that you’re right — you will probably say something stupid. **And that’s okay. **
As a Junior developer, no one expects you to know everything. It is the best time to try, fail, and ask questions you feel like you should know.
There’s hardly a better way to learn than forming an opinion, presenting it, and trying to justify it to people more knowledgeable than you as they are poking holes into it.
As someone starting out you have the **super power** where you haven’t been pre-exposed to too many previous problems, and patterns.
This allows you to ask questions that other team members might not even think about. Asking questions that you‘re worried might be too basic,
might just be the question that will make the Senior developers reconsider their solution to one which ends up on top. Or maybe not… but hey,
at least you were able to learn and demonstrate that you are **actively participating in the conversation.**

---

## Check your ego at the door — practice humility

> _“Ego = 1 / Knowledge. More the knowledge lesser the ego, lesser the knowledge more the ego.” — Albert Einstein_

You are a couple of weeks into your job and you have been killing it. Your team lead complimented your progress on multiple occasions during stand up. Well deserved so, you are killing it. You love your job and you are very proud of the code that you have been shipping. You may have started putting extra time in to get those features all done in time. 40 hour weeks turn into 60 hour weeks. But it’s all worth it. But then it happens… Your code introduced an unnoticed bug. Even worse, you didn’t practice your git commands enough as I told you, and going through huge commits to undo your bug takes some time. After the incident, the team sits down to discuss what happened. When asked, you start to panic, you start blaming the QA team for not catching the bug earlier, the business team for not writing clear enough requirements, and the other developers for leaving tech debt that made it harder for you to develop.

You might just be dealing with a case of an **inflated ego,** and really should take a shot of **humility** to beat it.

If you ever catching yourself doing any of the following:

- being **overprotective** of your code
- **dodging** blame
- **dismissing** other peoples solutions
- find yourself never **asking for help**
- **trash talking** the code base

you might just need to check in with yourself. If you really want to become a better developer, a person other people want to work with, enrich your career with a strong social network, you may want to check out a couple of quick tips:

- Be **open-minded** and **respectful** of other team members ideas
- Enter every meeting with the **purpose** of leaving the meeting knowing more than before
- **Take compliments,** but don’t forget to **pay it forward** to the people around you that helped you

and one of my favorites, if you ever unsure about something, just say “I don’t know, please educate me, i’d love to know more about it”.

Don’t forget about the previous point though. Keeping your Ego in check does **not** mean that you should let other people run over your ideas, or that you shouldn’t speak up during meetings.

One last thing, sometimes you will see developers exhibit those behaviors not because of an inflated ego, but rather the opposite, where they feel like they do not belong.
That everyone is smarter than them and if people find any flaws in their work, they might be exposed as a fraud. There is actually a term for that: [Imposter Syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome).
I won’t go more into detail in this blog post, but will explore it in depth in a future one.

---

## Try to learn Senior Developer Skills

What is the reason a Senior Developer is being paid twice as much as you? Is it their superior technical skills, their responsibilities, or is it just a case of paying your dues. Well, it’s a combination of all of those things, but there are a couple skills I want to point out because I believe they are skills that you should watch and learn from every day. Mastering these will allow you to call yourself an intermediate developer even quicker.

![yo-dawg-list-meme](/assets/what-i-wish-i-knew-when-starting-out-as-a-software-developer/yo-dawg-list-meme.png)

1. how to conduct code reviews
2. how to perform under stress
3. learn skills that they perform outside of their job description
4. understand the impact of a “small” change onto the entire system
5. how to debug
6. how to avoid [bike-shedding](https://en.wikipedia.org/wiki/Law_of_triviality)

But most importantly: **Learn to ask the right questions.**

Asking the right question can be the difference between a panicking business and insane deadlines and a calm well planned out sprint. Senior developers around you will have this skill perfected (hopefully) and no better way to learn this skill than observing it in action.

---

## Certificates

Working for a consulting company, I was certain that gaining a Microsoft Certificate was of the utmost importance for my career.
While I do believe some Certificates are useful and in some cases required, they usually are not until well into your career.
Most tech certificates gain their meaning when coupled with years of experience. I often compare them to Scuba Diving Certificates.
You start with the Open Water Certification which allows you to dive without someone holding your hand, this is similar to your university degree or boot camp.
You can then continue your education with the advanced certificate paired with specific specializations such as deep dive or wreck diving. Here is the rub: Who would you rather hire,
the person who has eight dives in total with many certificates OR the guy who only has the Open Water Certificate,
but 20+ dives? This doesn’t mean you should never consider getting a Certificate, but treat it as part of your **continuous education** rather than a “I have to have this ASAP”.

---

These are the **top 10 tips I wish I would have known earlier.** I hope these tips are helpful and give you some good insight as you start your career.
Lastly, just make sure you **have fun,** build some **kick a$% software,** and **share success with everyone around you.**
