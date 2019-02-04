---
templateKey: blog-post
title: Let's Sort Cards, and save log n
date: 2019-02-02T15:04:10.000Z
description: What is the fastest way to sort a deck of cards?

tags:
  - programming
  - learning
  - algorithms

---


While hanging out at RC last week, Byong asked me a question: "What is the fastest way to sort a deck of cards?""  I thought this might be a trick question, because the answer is so obvious: Merge Sort.  The beautiful algorithm sorts an array of *n* items in Θ(*n* log *n*) with a beautifully simple divide-and-conquer method.  And that's that -- you can't sort a randomly unsorted array any faster than *n* log *n*

![merge](/img/Merge-sort.gif)

Byong smiled at me and replied:  Actually, you can sort a deck of cards in Θ(*n*), using Bin Sort.

No Byong, that's not how the world works.  Θ(*n* log *n*) is the fastest sorting method.  But tell me more.

The fastest way to sort a deck of cards is to first lay out a sorted array of slots ("bins" are the more generic term) where each card will go.  Then, you iterate straight through the cards, and put each card in it's respective slot.  Θ(*n*).

No.  Wow.  It's makes so much sense.  It's terribly efficient.  But how?  How did I not know what Bin Sort was?  Why is Merge Sort taught at all?  Just because it's so beautiful?  Isn't merge sort what most programming languages use when you `.sort()`? *Answer: kinda -- it uses [timsort](http://bugs.python.org/file4451/timsort.txt), which is a hybrid of Merge and Insertion sort.* Did the core python devs make a mistake?  Is culture holding back efficient programming?  Or was the super simple Bin Sort just discovered?  Did Byong discover it?  Are computers about to get far faster?  log *n* faster?  Did an AI discover it?  So that it can become sentient log *n* faster?  Is Bin Sort going to save or destroy us?

Before my thoughts could spiral any further out of control, Byong consoled me:  it's because we have extra information about the deck of cards... we know the range.  I quickly came crashing back down to earth.  There are limitations here.  Knowing the range is one of them. So we started poking holes in how great Bin Sort really is.  Maybe it's not that good.  But let's see..

I was tempted to google this mysterious, brutally simple algorithm, but figured it might be better to try implementing it myself.  And to write about it's upsides and downsides *before seeing what anyone else has said about it*.  So this is an exercise in thinking -- and if you want to learn more about this algorithm, feel free to google it instead of reading my inefficient way of understanding it.  You will save more than log *n* seconds.  Up to you.

Let's start by organizing an array of numbers.  Here is an algorithm that takes the range of the numbers, and give back a sorted version.


###Incredibly dumb version:
```javascript
var binSort = (nums, range) => {
  const low = range ? range[0] : Math.min(...nums); // Θ(n) if needed
  const high = range ? range[1] : Math.max(...nums); // Θ(n) if needed
  const bins = []
  for (let i = low; i <= high; i++) { // Θ(n)
    bins.push(i);
  }
  return bins
}
```

This is a dumb algorithm.  It just returns an array built from the range.  Sure, it works, but only if you are sorting an array of plain numbers, with no missing numbers, and no duplicates.  Very silly indeed.


###Smart version:
```javascript
const binSort = (nums, range) => {
  const low = range ? range[0] : Math.min(...nums); // Θ(n) if needed
  const high = range ? range[1] : Math.max(...nums); // Θ(n) if needed
  const bins = [];
  const sorted = [];
  for (let i = low; i <= high; i++) { // Θ(n)
    // highlight-next-line
    bins.push([]);
  }
  for (let i of nums){ // Θ(n)
    bins[i-low].push(i);
  }
  return [].concat.apply([], bins)
}
```

This version can handle duplicate and missing numbers within the range, and we've still shaved off log *n*. 

What's the downside?  Space.  I personally don't think about space enough.  One of the reasons that Merge Sort is so beautiful is the space complexity