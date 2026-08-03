---
title: "My relationship with AI: It’s complicated"
description: "How I learned to (mostly) embrace AI."
pubDate: 2026-08-03
tags: ["AI", "tech"]
draft: false
---

A couple of years ago, I _loathed_ the very thought of artificial intelligence (AI). I felt the technology threatened both my job and my craft. Even after (very selective) AI tooling was approved for use at work, I refused to give in. But it became clear to me that fluency with AI was going to matter — sooner than I wanted it to.

I started slowly. I threw all my existing ideas at it and asked for minimal brainstorming help. I gave it a sentence or two I was struggling to get _just right_ and requested alternatives. I asked for comprehensive answers to questions rather than performing web searches (apologies to everyone counting on those SEO analytics). As my prompt confidence and accuracy increased, I began to use AI for more involved tasks, simply to save time. I fed it project documents and had it create executive summaries. I prompted for diagrams based on RFDs.

## Amazed... and terrified

I learned quickly that AI was capable of astounding things.

By the time I moved to the Application Security team as a Security Engineer, AI was absolutely everywhere, in every app and tool. In the interest of full transparency, I was still in a state of denial. But the role transition was demanding and I needed all the support I could get. So I took a deep breath, swallowed my pride, and leaned in.

But I want to be honest about what that means. It’s not an entirely frictionless fairytale like those you’ve probably seen in your LinkedIn feed.

## Confidence and correctness are not the same thing

Using AI is its own craft: output quality is directly proportional to the quality of the input. If I’m vague, I get vagueness in return. I have to challenge the agent to ensure accuracy, because AI, at the time of this writing at least, is remarkably poor at telling the two apart. It turns out my fear that AI would make my writing skills irrelevant was not only unfounded, it has, in fact, made them absolutely vital.

There’s also a part that has nothing to do with prompt quality: knowing what I shouldn’t send at all. The obvious rules are a given; the part that takes real thought is restraint. It’s tempting to hand over an entire file when a single function will do, or a whole document when I need help with one paragraph. [Least privilege](https://1password.com/blog/guiding-principles-how-least-privilege-leads-to-more-security) applies to prompts, too. The less I send, the less I have to reason about later.

I’m also careful with what comes back. Output from a model is just input from a source I don’t control, and I’ve spent my whole career learning to be suspicious of those. It can be wrong. It can be _confidently_ wrong. And if the model read something along the way that was written specifically to manipulate it, that ends up in my lap, as well. So I read what it gives me the same way I’d read anything else I didn’t write myself.

After I became comfortable with those limitations, I decided to embrace AI. It’s made me faster and more efficient, and has collapsed the time between “I need to understand X” and “I understand X” in ways that have genuinely accelerated my growth. As a Security Engineer, however, I want to make one thing very clear: It has never replaced, and will never replace, my judgment. It’s made me even more keen to apply it; more skeptical of what I see.

And these days, I _build_ with it. Most of my time goes to a security review pipeline that reads pull requests and flags potential vulnerabilities. One model looks for problems, a second tries to tear the first model’s findings apart, and a third decides who was right. The models are deliberately from different vendors, so one model’s blind spots don’t become the whole pipeline’s. [Read more about that project here.](/engineering)

A few years ago, I loathed the very idea of AI. Now I build with it every day (and argue with it regularly). Progress, sure, but our relationship status stands.
