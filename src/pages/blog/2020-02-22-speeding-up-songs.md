---
templateKey: blog-post
title: Why do some songs sound like garbage when you speed them up (and others don't)?
date: 2020-02-22T15:04:10.000Z
description: Ever listen to podcasts at 2x speed and everything sounds fine until a song comes on?

tags:
  - audio
  - programming

---

Like many people, I listen to podcasts sped up.  Anywhere from 1.5x - 2x speed, and it's great!  These days, people's voices don't sound like chipmunks when you speed up digital audio, because instead of merely playing the audio faster, the sample rate is reduced and the remaining audio is stitched together.  Think of it like pulling out tiny slices of audio and then pressing the remaining slices together - this is called the "sampling method," and it's used for all types of media content that have duration - (think podcasts and videos). Nice coverage of the topic from WaPo [here](https://www.washingtonpost.com/news/wonk/wp/2016/06/22/i-have-found-a-new-way-to-watch-tv-and-it-changes-everything/).

But sometimes, it doesn't work so well.  If you watch a lot of videos sped up, you may notice that a lot of music sounds terrible, while speech almost always sounds natural.  Why?

To begin with, of course music is going to sound somewhat worse -- lower sample rates entail lower fidelity.  It's a general guideline to record audio of all types in 44100HZ - which means audio is sampled 23 times every .00050th of a second -- or 46,000 times in a second.  Which seems really high.  So even if you speed a 44100HZ video up 2x, you still get 23,000 samples per second.  It's still going to be recognizable with that much data, but it's longer going to be as high-def.

Initial research led me to think that maybe songs with higher pitches get hit harder, because you actually lose the ability to accurately represent high notes with lower sample rates:

<iframe width="560" height="315" src="https://www.youtube.com/embed/fZzMXdxbOes" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

But after digging in a bit, I realized that pitch isn't predictive of how badly a song gets screwed up by the sampling method.  Some styles lose their sense of rhythm, and others get a "buzzing" effect, sort of like the music is imitating bees.  So I decided to try listening to a bunch of styles of music, on YouTube, sped up, to figure out what characteristics cause a song to degrade (so you don't have to).

First, I wanted to make sure that YouTube's speed controller is in fact using the sampling method (described above). I checked out the code, and it uses Chromium's API to change the speed.  And sure enough, Chromium [changes the sample rate of the audio](https://github.com/chromium/chromium/tree/master/media/filters), so the sampling method is confirmed.

I found these characteristics to ruin a song sped up: **vibrato** and **tempo defined by similar sounds**...
###Try listening to these at 1.75 - 2x speed:###

<iframe width="560" height="315" src="https://www.youtube.com/embed/J0w0t4Qn6LY?start=2038" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- Vibrato is messing this one up.  Hilary's violin sounds like it's buzzing, and the entire orchestra, aside from the brass section, sounds less synchronized.


------

<br />
<iframe width="560" height="315" src="https://www.youtube.com/embed/oGgDwmCx5lI?start=98" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- Again, vibrato (both from Frank and the strings behind him) is bringing this audio "to it's knees" (get it?).


------
<br />

<iframe width="560" height="315" src="https://www.youtube.com/embed/4fHw4GeW3EU?start=2323" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- This one confuses me more...  When played at normal speed, there is a clear 4/4 rhythm coming from the drum machine.  Speed it up and it loses that completely - it's just a mishmash of a drum sounds charging straight ahead (althouth you can still make out a rythm from the horn-sound).  This one might actually be because of [losing fidelity in the upper range](https://youtu.be/fZzMXdxbOes).  The drum sounds are fairly high frequencies, and when you lose fidelity, you can't tell them apart.  That's just a guess... anyone have better ideas?  Tweet me [@jonsjournals](https://twitter.com/jonsjournals).

<br />

###Here are some songs that sound pretty ok sped up (try listening at 1.75 - 2x speed):###

<iframe width="560" height="315" src="https://www.youtube.com/embed/47XlUL6sRow?start=700" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- Honestly, I might like this band even more sped up.  They don't seem to lose anything and I think it's a bit more lively.  My guess: this band is very percussive.  The vibrato from the double base is not extremely fast and there aren't any vocals.

------
<br />
<iframe width="560" height="315" src="https://www.youtube.com/embed/ByhXM9AvnQo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- I still understand the rhythm, I don't notice a buzzing effect, and I can actually enjoy the music.  It's worse, for sure, but not glaringly so.  No vibrato, and notes are easy to tell apart.

------
<br />
But there there is this... Hurt by neither vibrato nor similar sounds driving the rhythm, this song becomes significantly worse:
<br />
<br />
<iframe width="560" height="315" src="https://www.youtube.com/embed/gvzC8MmC850" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- I can't point out what sounds so bad about this one, but it's a sad song and it loses that feeling at a higher tempo.  The emotion is drained from it somehow... this makes me think that maybe I need to chill with the speed controller sometimes.  It's hard to define what makes a song sad, but this loses whatever that is.  I'm not sure how that translates to speech.

------
<br />

If you have other theories or songs that don't fit these patterns and still sound like garbage, let me know.  And maybe more interesting, I found that vibrato gets ruined when it's sped up with the sampling technique, but can anyone explain why? Tweet me [@jonsjournals](https://twitter.com/jonsjournals).