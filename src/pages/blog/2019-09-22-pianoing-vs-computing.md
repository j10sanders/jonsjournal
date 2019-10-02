---
templateKey: blog-post
title: Piano-ing is not Computer-ing
date: 2019-10-02T15:04:10.000Z
description: Why the Baumol Effect and Qualia make these activities radically different.

tags:
  - programming
  - economics
  - music
  - learning

---
I recently started learning to play the piano.  I've talked about how [powerlifting is similar to programming](/blog/2019-01-28-software-developers-and-powerlifters/), but in this episode, I'd like to think about why playing the piano is *different* than programming.  More specifically, why composing music is different than coding, and why playing music is different than [something running my code](/blog/2019-02-16-javascript-engines/).

The similarities are easy to come up with: you need to practice frequently to become proficient, general concepts from one instrument apply well to other instruments (analogous to programming languages), music is written in a certain notation and then executed/played, etc...  But I've found that the differences are far more interesting than the similarities.

The analogs are: 
#####Composing music or improvising  --- Coding#####
	
#####Playing music --- Running a program (like a machine)#####


###How composing music/improvising is different than coding:###
- Bugs are fundamentally different.  A composer won't accidentally create an infinite loop or a stack overflow.  I guess you could make a song repeat indefinitely, but you can expect a human player to not get stuck in this trap.
- The notation, or the code that is played, is not so separate from the outcome.  In programming, there are always a million ways to complete the same task.  Not so with music... the musical notation often isn't entirely sufficient.  It's not uncommon to see phrases such as "gradually increase the volume and energy", or "lively", etc...  I'm sure these notes could be codified - it would just be inconvenient, since the machine running the code is a human who also understands English.
- It's desirable for different musicians to interpret a work differently.  Otherwise composers would just make midi files.
	

###How playing music is different from compiling and executing code (like [v8](/blog/2019-02-16-javascript-engines/) does):###
- The performance of playing music is something people take pleasure witnessing.  Concerts are only interesting if someone is playing the music there - live.  This is in stark contrast to a web app - where we care about what we can do with the executed code.
- V8 doesn't practice.
- You can't move your abilities to another machine.  In fact, since no two people play the exact same way, we can't replicate any human performances across humans.

--- 

##Now for the interesting differences:##

###The Baumol Effect:###
The Baumol Effect is something I learned about on [The Not Unreasonable Podcast](https://www.stitcher.com/podcast/david-wright/the-not-unreasonable-podcast/e/62417129) where Alex Tabarrok discussed his book [Why Are the Prices So Damn High](https://www.mercatus.org/system/files/helland-tabarrok_why-are-the-prices-so-damn-high_v2.pdf).
He talks about why prices for some things have been going up since, say, the 1950s, while the prices for most things have decreased.  So while home appliances and telecommunications have become much cheaper, prices for education and healthcare haven't stopped going up.  Bernie Sanders might attribute it to greedy millionaires and pharmaceutical companies, but the less villainous Baumol effect is probably the main driver here.  

![](/img/baumol.png)

Alex gives an example to explain the Baumol Effect:

> Take a Beethoven string quartet in 1826 - it takes 4 people 40 minutes to perform that string quartet.  Now do the same thing today...  It still takes 4 people 40 minutes to perform exactly the same string quartet.  So in nearly 200 years, there had been 0 improvement in productivity in string quartet land.  On the other hand, there are many, many, other sectors of the economy where productivity has increased tremendously. At producing goods... automobiles for example.  Or at producing major appliances, in all of the areas which have made life so much better compared with 1826.

> So if we go back to 1826 and we then compare: what's the cost of performing this type of task?  And by cost, I mean what the economists call 'opportunity costs' - what do we lose? - what does society lose? - when we have an additional performance of Beethoven's string quartet?  Well, society loses 4 people doing something for 40 minutes.  But in 1826, productivity in car production was so low, and in other areas of the economy, that that's a low opportunity cost. You're not giving up a lot, because those guys are not very productive at producing goods (they couldn't produce a lot - 4 people in 40 minutes). But today, 4 people in 40 minutes can produce a lot!  In opportunity cost, it's gone from about $3 in 1826 to more like $70 in average wages.  So the opportunity cost we give up has gone up, precisely because other sectors of the economy have become more productive.

> So anytime you have a stagnant sector - a sector which grows slowly in productivity - the output of that sector will become more expensive over time, regardless of anything else.

I love this example.  The Baumol Effect makes it pretty clear that playing piano is not worth my time, since the productivity garnered out of it hasn't changed in centuries.  And it's compounded by the stagnancy of piano teaching!  Maybe teaching has gotten slightly better since 1820, but certainly nothing dramatic has happened recently -- I'm learning from [a book published in 1998](https://www.amazon.com/gp/product/B00CXX7HEO/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1) after all.  Piano teachers aren't getting any cheaper either.

In contrast, software (and by extension, software development) is "eating the world".  Even since I've been a programmer, I've seen dramatic increases in the ease of creating, deploying, and scaling a web application (for example).

But this analysis is flawed for a couple reasons.  First, just because other sectors are more productive doesn't mean that the wages of the less productive sector go down.  Actually, that sorta what the Baumol effect is explaining.  Although, if I care about GDP generally (which I do, but maybe not enough), then I guess I should pick hobbies that are increasing in productivity since the total output to others would be higher.  

![I will say that a nice keyboard that accuratly mimics the sound and feel of a full piano has gone down, and the Baumol effect supports this notion.](/img/kawai.jpg)


But more importantly, playing piano is a hobby, and it's enjoyable because... well, the experience of learning and playing music is enjoyable!  In the analogy to a Javascript engine running my code, the glaring difference is that v8 doesn't enjoy what it does.

Playing piano has decreased relative to other sectors in productivity, but the personal enjoyment seems to hold it's own against newer forms of enjoyment that I believe offer less satisfaction, such as video games, social media, and streaming videos.
