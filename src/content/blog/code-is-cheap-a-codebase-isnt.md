---
title: "Code is cheap. A codebase isn't."
pubDate: "2026-09-10"
description: "I listed every reason we do PR reviews and sorted them into two buckets: what you can verify today, and what only shows up in month six. AI can have one."
---

Every couple of years something arrives promising the fundamentals stopped mattering. I go and check every time. So far they still do. This is the first time I've been less sure, and that's what this post is.

I've been thinking about the purpose of PR reviews a lot lately, because a lot of related "trends" landed on my timeline at once. [Dylan Garcia's tweet](https://x.com/_dylanga/status/2096638574351327371): the only thing that matters in a PR review now is how fast you can recover if it's wrong. On the surface a mentality I relate to. I'm all about [two-way doors](https://s2.q4cdn.com/299287126/files/doc_financials/annual/2015-Letter-to-Shareholders.PDF). He does add a classifier though. Then [Jack Ellis](https://x.com/JackEllis), CTO of Fathom Analytics: we used to design before coding because building the wrong thing cost tens of thousands of dollars. Now code is cheap. And Uncle Bob, of all people, tweeted that his [current strategy is to not read any of the code his agents write](https://x.com/unclebobmartin/status/2080257779395154409). His argument being that with enough constraints, unit tests, Gherkin, mutation testing, coverage, it's fine. Six weeks later he went further and said he's [starting to think he's over-constraining them](https://x.com/unclebobmartin/status/2096994914185662851).

The theme underneath all of them is how far we let agents go without a human in the loop. I think the whole industry feels it. Are we just part of the planning stage? Are we the gatekeeper? Are we the [meat proxy](https://simonwillison.net/2026/Aug/3/dont-be-a-meat-proxy/), pasting agent output into a PR and reviewer comments back into the agent? I really like Addy Osmani's framing in [Software Factories, Light and Dark](https://addyosmani.com/blog/software-factories/): a dark factory runs the agents with nobody reading the output. A lit factory is the same pipeline with "the lights left on where judgment lives". His rule for choosing: you can only hand a loop as much autonomy as you can cheaply and reliably verify. This post is me working out whether PRs are one of the places the lights stay on. For now, at least. All of this keeps moving.

What I agree with, with all of them: it works. At least in the beginning.

See, it always worked in the beginning. Every startup I've watched shipped fast for the first year on a codebase nobody defended. The ones without somebody who'd been through it before sank into the same [tar pit](https://www.informit.com/store/mythical-man-month-essays-on-software-engineering-anniversary-9780201835953) somewhere between month six and month eighteen. I've spent over half my career in startups, the rest in government and consulting for companies big enough that you've eaten at them or own their phone. I tell technical people to move faster at least as often as I tell them to slow down, because speed to market beats almost everything. I also know what the bill looks like later. I think you can have both, as long as someone on the team can smell the tar before they're in it. Bob C. Martin charted the tar pit in the first chapter of [*Clean Architecture*](https://www.informit.com/store/clean-architecture-a-craftsmans-guide-to-software-structure-9780134494166): productivity per engineer falling release after release, heading for zero, while the cost of every line climbs. He calls it the signature of a mess. I'd argue that chart is the reason the book was written. In a lot of ways that book is what the job of a software developer was to me: standing for standards, for the architecture, weighing short-term gain against long-term velocity on every change.

So here's what actually keeps me up at night, as the person running engineering teams and responsible for where the product is in a year. Not this week. Month three. Month six. I'm enjoying the velocity gains as much as anyone. I'm also the one who explains to the board why developers are quitting and why velocity is dropping. The one who tells a customer their feature is taking longer because our developers are scared to touch a codebase nobody understands anymore. Not something customers love to hear. The one who explains why we no longer have four nines. Sadly everyone only seems to talk about the first six months.

To figure out where I land, I listed the reasons we use(d) PR reviews for in the first place. Specifically, I wanted to know whether we even still need them. When I did, the reasons sorted roughly into two buckets: what you can verify today, and what only shows up in month six.

## Bucket one: what you can verify today

**Catching bugs.** How this gets done varies a lot. Some people pull the PR down, run it, hand-QA it. Personally I may have pulled down three PRs in the last ten years. After you've seen enough code you just see the missing null check, the wrong design-system token, the typo. For correctness, the manual QA, I've always expected full ownership from the developer opening the PR. Test it by hand, or write the tests that prove it. Given that ownership piece, this is a good candidate to hand to AI. I haven't found a study that does the real comparison. My own feeling is that AI is on par with human review here, but only with the frontier models, and only with the right review setup. That means an adversarial pass, and a step that makes the model prove the bug is real rather than hypothetical. UI is trickier, but with the right setup, agents that can run the app, take screenshots, record video, the outcomes are very good.

**Was the right thing built.** The comment nobody wants on their PR, and it still happens. Knowledge is spread across a company, and sometimes someone knows a much better way. It used to mean follow-up tickets, ship, iterate. Now that code is cheap, it should mean closing the PR and starting over. I don't see AI catching this. What does catch it is moving the conversation earlier: pair prompting, planning together, a quick "what are you about to build?" before the first line exists. That won't catch all of it, but it catches enough that the review isn't the place for it anymore.

**SOC 2.** Most companies that are SOC 2 compliant most likely have a control that says all merged code is reviewed and approved by another developer. Strictly, SOC 2 doesn't require it. Your controls do, because you wrote them that way. Changing them means changing the evidence you hand the auditor, not flipping a branch rule. It's a checkbox, and checkboxes are verifiable. Maybe one day a model counts as the second pair of eyes. Today I don't believe it does.

That's bucket one. Everything in it you can check before the merge. If that were the only purpose of PRs, I'd agree. Two-way doors. Ship it.

## Bucket two: what only shows up in month six

Nothing here fails a test today. All of it shows up later, in the code or in the people who have to work in it.

**Standards.** In theory solved. Write the rule once in a skill or an `AGENTS.md`, and the models are great at copying whatever pattern already exists in the repo. In practice it still comes up a lot. Part of it is mechanical: models are non-deterministic, they don't follow your rules 100% of the time, and context bloats. The bigger part is that the standards that matter most are the ones that are hard to put into words. I might be biased here. I've always thought rules that make you think beat hard rules. Rules are for the guidance of wise men and the obedience of fools, as the saying goes. Most codebases I've enjoyed working in ran on the first half of that sentence. More on what that means for the rule file below.

**Honesty, or accountability.** I love code. I care about it more than I should at times. But I slip too. The Product Owner or an Account Manager asks if you can get this out quickly. The only thing between you and being celebrated for saving the day is a unit test. "I'll add the test later." *Narrator: later never came.* Once code is merged, new features beat tech debt every time. A PR is a place where you get called out.

**Mentoring and growth.** PRs do double duty here. On one hand they're a tool for me to scale myself. I can squeeze a review in between meetings and give a developer real feedback through comments, alternative approaches, general feedback. On the other they're one of many data points I use to check on growth. A new hire might get thirty comments on their first PR, a month later five, and so on. It's one number, but it helps paint a picture.

A conversation with a new hire a while ago stuck with me. Using AI from day one made them productive from day one, verifiably true. They contributed to a codebase in a language they had little experience with. Three months in, they told me their confidence in the codebase hadn't grown much since. About as productive as day one. That's the flat line where the comment curve used to be, and in six months it's a team that hasn't grown. I don't have a study for this either, but I'll go out on a limb: no developer has ever felt they drastically improved because a review bot left a comment on their PR, even a correct one. And I won't count bot findings as a metric of anyone's growth.

### Nobody understands the code anymore

**Knowledge sharing**, or what's left of it. The classic argument: at least one person besides the author knows this code exists, how it works, what it touches. Bus factor two instead of one. I always had my doubts about how much knowledge a review really transfers. It was something I accepted and never questioned. Now I don't think it can be real anymore, because I'm not sure if even the developer who opened the PR understands it.

Addy calls it comprehension debt: the gap between how much code exists and how much of it any human still understands. I'm not sure how to track it. The code is so clearly not written for the next human. Auto-generated PR descriptions that explain the **what** and the **how** and never the **why**. Disjointed stacks of fifteen PRs. The code isn't wrong, necessarily. Just alien. Every abstraction one notch too general, nothing *simple*. And I don't think developers are good at iterating it back down. To simplify code you have to understand it, and you only understand code that well if you wrote it. I've caught myself spending longer shrinking a stack back down than writing the feature would have taken. How bad this gets depends on the size of the change. A five-line bug fix is fine. A user story is some work. A new subsystem is where I lose days. None of that is new with AI. What changed is people reach for the subsystem-sized change more often now, because it's easy and code is cheap.

Underneath the stack problem is a bigger one. To reason about a system at all, to say whether a change to the data model is right, I have to truly understand the code. And writing it is what gave me that. Reading the diff doesn't. Reviewing doesn't. Writing the spec doesn't, and grilling myself on the plan before a line exists doesn't either, however well done. Yes, I generate myself diagrams and interactive HTML pages, and of course it helps. But quiz me on the feature two weeks later and you'll see how rotten my brain has gotten. Compared to this, TikTok is a workout for the mind.

### What AI writes, AI can't fix

The three examples below all have the same shape. The outcome is right, exactly what the "only the outcome matters" crowd asks for. The code is worse in a way no test will catch. And the agent that wrote it won't fix it, because from where it stands nothing is broken. It found the change that satisfies the request. It never stepped back to ask whether the request exposed a problem with how we modelled the thing. I haven't noticed a difference between Opus 4.5 and Fable here.

The ticket says: resending an invoice must not charge the card again. The agent's fix:

```ts
async function sendInvoice(invoice: Invoice, skipCharge = false) {
  if (!skipCharge) {
    await chargeCard(invoice);
  }
  await emailInvoice(invoice);
}

sendInvoice(invoice);       // first send
sendInvoice(invoice, true); // resend
```

Bug fixed. Test passes. Outcome correct. And the function now has two jobs and a flag. Month six, it has four flags and nobody knows which combinations are valid. The better solution:

```ts
async function issueInvoice(invoice: Invoice) {
  await chargeCard(invoice);
  await emailInvoice(invoice);
}

async function resendInvoice(invoice: Invoice) {
  await emailInvoice(invoice);
}
```

Same outcome. No flag. The next person who needs "email without charging" calls the function instead of adding a fifth boolean.

Second pattern: the "load-bearing" comment.

```ts
await updateUser(id, patch);

// NOTE: this delay is load-bearing. Without it the next read returns
// the old user. Do not remove.
await new Promise((resolve) => setTimeout(resolve, 200));

return getUser(id);
```

That's a stale cache with a note attached. The comment even sounds responsible. It's the agent documenting the bug instead of fixing it, because the outcome was met: "the updated user comes back". The fix is one line somewhere else: invalidate the cache on write, or return the updated row from `updateUser` and stop reading it back. The agent never went looking for where the staleness came from, because the test was already green.

Hot tip: don't tell the AI to never leave comments. Every comment is a hint at where the code could have been better, and the AI won't get there without you.

Third: the variable that stopped being true. Support staff can now manage users, so `isAdmin` grows an `|| isSupport` at six call sites. Nobody renames it to `canManageUsers`. Every call site is correct. The variable lost its essence.

The admission that goes with this: I've taught workshops on this. I've taught best practices and put systems in place on teams of every skill level, background, and mentality. And I never managed to systemize how I think about architecture to a level I'm truly happy with. I can write the rules down, and I did, every time. And every time the rules covered about half of it. The other half was engaging with the specific problem in front of you and leaving room for best judgement. The wise-men half.

So when someone tells me to just put it in the `AGENTS.md`, I believe them. I've also been trying to put it in the `AGENTS.md` for humans for as long as I can remember. The half that wouldn't go in is the half in the three examples above. And it's not for lack of material. Every one of the three has a rule with a name. The boolean flag breaks single responsibility, Uncle Bob's own principle. The load-bearing comment is chapter four of *Clean Code*: don't comment bad code, rewrite it. The `isAdmin` rename is chapter two, meaningful names. The models have read every one of these books. Feed them to the agent and the three examples above are still what comes out, because the books were never the rules either. They were the judgement, explained. And past the principles is the data model, which the books cover least and matters most. DDD and spec-driven design have been around for twenty years, and AI hasn't solved a single hard part of either. Those are still human tools. A whole other post.

None of these fail a test. All of them show up in the next ticket, and the one after that. This is exactly the second chapter of *Clean Architecture*, the section literally called "Fight for the Architecture". The business will always pick the urgent feature over the important structure, so it falls on developers to defend the architecture. If architecture loses every argument, the system gets slower to change until it can't change at all. "Velocity isn't a problem anymore" is a claim about this week's velocity. Architecture is about month six.

And the thing that took me longest to see: code quality used to be enforced by self-interest. The person adding the boolean flag was going to be the person maintaining it. The agent never has to live in the codebase it leaves behind.

## What I'm trying currently

Not a framework. A list of things I'm putting more focus on, all aimed at bucket two. Bucket one I've handed over. These sit on top of a setup that's already pretty AI native: review skills, agents on ticket triage, a self-improvement loop.

**Units, not features.** Features run away from you. One giant grill-me session and then "build the feature" produces the fifteen-PR stack because it was asked for a feature. I'm going back to something closer to how we worked early on with Cursor and Windsurf in the editor: one piece at a time. Build a unit, verify the interface, build the next. Slower per feature. Perhaps faster overall. Especially after a prototyping session or two first, so the units are the right ones. The trick is finding the threshold. Below it, the agent one-shots the change and I don't look twice. Above it, we hand-craft the shape and let the agent fill it in. I don't want to over-correct here. I know I'm the bottleneck. I'm hoping to find the balance.

**Zero AI-generated PR text.** Write out exactly how it works yourself. If you can't, you don't understand it yet, and finding that out is the point. It'll also be shorter. As you may have noticed from this 3,000-word essay, that's something I desperately need to work on. Pascal, in a [letter from 1657](https://ccel.org/ccel/pascal/provincial/provincial.xviii.html): "The present letter is a very long one, simply because I had no leisure to make it shorter." My clankers don't get leisure, so it's on me. Then hand that description to the AI reviewer along with the diff. Now it can tell you when the code doesn't do what you said it does.

**Read for the three patterns.** The bot reads for bugs. I read for a flag that should have been two functions, a comment that's documenting a bug, a name that stopped being true. It's a shorter review than the one I used to do, and a harder one, because none of it is on the diff. It's in what the diff should have been.

## Where I land, for now

Everything in bucket one, AI can have. Bugs, was it the right thing, and the SOC 2 checkbox the day the auditors agree. I'll take the velocity and I won't pretend I'm not enjoying it.

Everything in bucket two got harder, and bucket two is the part of the job that's actually mine. Not what I can verify today. What shows up in month six, in the code and in the people working in it.

How would I even know? With one team we started measuring: output, velocity, bug metrics, and a regular dev check-in. Velocity is up about 4x across everything we track. Fewer outages. Long-standing issues closed, tech debt squashed, and our zero-bug-policy SLA went from seven days to about eight hours. Very outcome-focused again, I know, and I still don't think it captures the essence. Can you really quantify quality? Maybe it doesn't matter. What those numbers do buy me is the right to be cutting edge instead of bleeding edge. At least while we're still figuring out the right path forward.

So, are PRs one of the places the lights stay on? For bucket one, no. Let the factory run. For bucket two, yes, and it's a different review than the one I used to do. I'm not reading PRs to find bugs anymore. I'm reading them because the agent doesn't have to live with the code, and my team does.

And maybe none of this matters. Maybe I'm focused on the wrong thing. Maybe the right move is to let go completely and let the tooling take me the way it's taking everyone else. Some days I think that. I know the reply, too: if code is cheap, the month-six cleanup is cheap as well. Except the cleanup was never the typing. It's understanding what the change touched, verifying the replacement, noticing the mistake at all. Nothing in my experience says those got cheap. The fundamentals didn't stop mattering. They moved to month six, where nobody's looking. But I'm the one standing in front of that board, and that customer, and I'm not at that point yet. So I'd ask one thing. Am I willing to bet the company on it? Are you? Because if it doesn't work out, the person who told you coding was solved won't be there to help you unfuck your codebase.
