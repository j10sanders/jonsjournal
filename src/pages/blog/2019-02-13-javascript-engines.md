---
templateKey: blog-post
title:  Something is running my JavaScript
date: 2019-02-13T15:04:10.000Z
category: JavaScript
description: Everything is a system.  Engines are systems.  JavaScript is run by engines.


tags:
  - programming
  - JavaScript
---


Recently, I've been writing client-side code.  Which means that web browsers download my code and run it, using their local machine's resources.  That's obviously cool, but it's also mysterious.

I realized that I don't understand how browsers are doing this.  Since I end up writing a good deal of CSS and HTML (well... JSX), I'm quite familiar with the DOM, but that's just one small part of the browser that I'm using when I make an app.  What happens to the JavaScript?

I thought about making this another exercise in 'figuring it out for myself' (like I did [here](https://jonsjournal.com/blog/2019-02-02-sort_deck_of_cards.md/)), but I wasn't able to get very far: I figured that there is something that compiles JavaScript code into bytecode (and then to machine code), and that there are some standards that popular browsers use so that applications work in the same way in different browsers.  But that's not really useful.  I talked to cool person and current Recurser, [J](https://optimistictypes.com/), about how I don't know what is running my code, and J said to think about how "everything is a system".   

I'm still not sure what that means.  One of my initial thoughts is that maybe the browser is something like an OS.  J liked that thought, but said it might be more helpful to think of the browser (or more specifically, the part running JavaScript) as a game engine.  That seems like a helpful place to start, except that I don't understand game engines either.  So let's start with a system that I can conceptualize a bit better.

How about cars -- they have engines?  They can be powerful, efficient, quiet, maintainable, etc... (and all of the opposites).  You put gasoline in (or electricity).  Then you provide it with inputs, such as pressing the gas pedal or changing the gears (the latter is now usually taken care of by an automated layer between the user's inputs and the engine).  The engine responds by providing the appropriate level of rotation to the wheels's axels.  You can change the engine in your car out for another one, and it should work in a similar way.  You could even use the engine for another purpose, although it probably won't be optimal for anything besides your car.

![drivetrain](/img/drivetrain.jpg)

The engine running JavaScript code serves a similar purpose -- instead of gasoline, it uses the computer's hardware and power supply, and it takes inputs in the form of JavaScript functions and objects.  Instead of powering wheels, it executes the functions and returns the results to the browser's display.  And yes, there is more than one JavaScript engine -- different engines are used in different browsers and optimized for different devices.  They all do things similarly, since they are all trying to execute JavaScript code, but one may work better than others for a specific task or with specific hardware.

It turns out that Google is fond of the engine analogy, and takes it a few steps further than I just did:

They built the V8 ([get it?](https://en.wikipedia.org/wiki/V8_engine)) JavaScript engine, which is used in Chrome (and in the default version of Node).  They even named the interpreter part of the engine: Ignition and the compiler: [TurboFan](https://en.wikipedia.org/wiki/Turbofan).  It used to have another JIT compiler, named Crankshaft, of course.  Which, I should mention, is kinda cool - V8 is an interpreter and a just-in-time compiler, and it is smart about optimizing the bytecode it produces.

![Diagram image](/img/v8.png)

You can find out much more about V8 from the excellent Franziska Hinkelmann's [post with JSCONF talk](https://fhinkel.rocks/2017/08/16/Understanding-V8-s-Bytecode/).

The biggest upside of looking into what exactly runs my code, is learning about optimizations that I can make for the engine to run my code faster.  One of the more interesting ones is that JavaScript engines optimize property access based on the objects shape.  To optimize for this, you should always initialize your objects in the same way, so they don’t end up having different shapes.  More [here](https://mathiasbynens.be/notes/shapes-ics)

--- Try messing with an engine.
https://mathiasbynens.be/notes/shapes-ics
https://www.youtube.com/watch?v=p-iiEDtpy6I

Optimized into assembly code

http://www.mattzeunert.com/2015/08/19/viewing-assembly-code-generated-by-v8.html
https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775
