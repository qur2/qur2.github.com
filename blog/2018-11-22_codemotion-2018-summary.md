<!--
title = "Codemotion 2018: My Personal Report"
description = "A summary of the talks I attended at codemotion 2018"
author = "Aurélien Scoubeau"
lang = "en"
date = 2018-11-22T22:22:22Z
tags = ["conference", "codemotion", "AI", "blockchain"]
cover = "https://res.cloudinary.com/qur2/image/upload/c_scale,q_auto:eco,w_1440/c_crop,g_center,h_711,w_1440/v1542980313/blog/2018_1122_08383900_dwcf6q.jpg"
-->
Day 1
=====

Building human interfaces powered by AI by Christian Heilmann
------------------------------
A broad overview of what is (not) AI today as well as the dangers and the opportunities. The core message was that every big
company releases some tools and the speaker encouraged the audience to play with them: everybody should
understand AI and it should get in the hands of many rather than of few privileged.

Key take away: Gamify the way the data is collected to get a lot of it
and later use it in your systems. Captcha images are an example of that.
[Autodraw](https://www.autodraw.com/) uses collected data from an earlier game.

Resources:
* [https://academy.microsoft.com/en-us/professional-program/tracks/artificial-intelligence/](https://academy.microsoft.com/en-us/professional-program/tracks/artificial-intelligence/)
* [https://www.helloruby.com/](https://www.helloruby.com/)


Shokunin of the web by Bruce Lawson
------------------------------
Not very technical, it was a not-so-gentle reminder that half of the planet population lives in south east Asia and that regardless of what we think, this part of the world will become everybody customers sooner than later. Therefore, we should all prepare to deal with specificities of those markets. One of the big obvious advice is to stop pouring huge loads of JS down the cable or trapping styles inside JS. Instead, we should embrace the standards: they will evolve and remain. Plain HTML + CSS is not a crime.

Key take away: Like real japanese artisans, web developers should think not only about what they do, but how it influences what's around as well.

Resources: [https://stylable.io/](https://stylable.io/)


Building Web3.0 with Ethereum by Jerôme de Tychey
------------------------------
Super quick overview of the Ethereum landscape. It was hard to follow because of the huge amount of things presented, but overall very informative.

Key take away: [Brave](https://brave.com/) is an awesome browser

Resources: [https://consensys.net/](https://consensys.net/)


Serverless Machine Learning With TensorFlow by James Thomas
------------------------------
This was an easy to follow setup of TensorFlow.js with docker on AWS Lambda.

Key take away: Prepare as many things as you can in your custom container (i.e. linked binaries, training data)


Two sides of a coin: ethics, human rights and blockchain technologies by Sebastian Porsdam Mann & Maximilian Schmid
------------------------------
This talk had a definitive academic tone. It was a rapid overview of ethics and wether blockchain technologies are unethical or not. The flipside was also presented: can blockchain technologies help with ethics?

Key take away: Technologies are only as good as the people who use them. They can also be harnessed to help people get better.


Monkey Swag: How I sneaked geometry into a fun game by Johanna Janiswewski
------------------------------
This was quite different than what I expected. It was not about geometry or some game engine. Rather, it was a presentation by an entrepreneur about her game and the process of building it. A very human and interactive talk.

Key take away: It will cost more money than anticipated

Resources: [https://www.teachthought.com/](https://www.teachthought.com/)


How to avoid a Web 3.0 babele: transclusions and folksonomies in a content-addressed and block-chained world by Alessandro Confetti
------------------------------
This talk was very interesting for me. It was the last talk of the day, in a small dark room. The speaker looks very serious. It felt a bit like the end of the world was about to be predicated :)

But instead, Alessandro presented flaws in our HTTP internet: links, average page lifetime and the big amount of energy spent on DRM type of technologies.

He then spoke about the [memex](https://en.wikipedia.org/wiki/Memex), a machine that predates the invention of the hyperlink.
He mentioned [Project Xanadu](https://en.wikipedia.org/wiki/Project_Xanadu) from [Ted Nelson](https://en.wikipedia.org/wiki/Ted_Nelson), which was an attempt at making a better hyperlink by using transclusions.

He finally moved on to [IPFS](https://ipfs.io/) and how a content-addressed network can help with many problems and how it can be a perfect companion to blockchain technologies. He also did not forget to point out that content-addressable network come with their own challenges.

Key take away: Humanity is erasing its own trail and we can certainly do a better job at that.

Resources:
* [https://www.wired.com/1995/06/xanadu/](https://www.wired.com/1995/06/xanadu/)
* [https://ipfs.io/](https://ipfs.io/)
* [https://datproject.org/](https://datproject.org/)

Day 2
=====

Everywhere commerce - voice interfaces, autonomous warehouses, self-driving delivery by Daniel Gebler
------------------------------
A very focused talk about [picnic](https://picnic.app/de/) tech department. It sounds like a very focused environment with interesting challenges to solve. For example, they deliver goods with baby trucks and optimize the time spent when the vehicle is stopped, because they operate by neighborhood. They manage to deliver in 20-minutes timeframes, which sounds impressive.
Overall, they bake everything they do with data and go on to build AI / automated things afterwards. You don't want to end up like
[this](https://www.youtube.com/watch?v=IKZToY-V16w),
but rather like [that](https://www.youtube.com/watch?v=4DKrcpa8Z_E).

Key take away: Start with gathering data and learning, and then only move to AI.



Real-Time Serverless Backends with GraphQL by Danilo Poccia
------------------------------
Mildly interesting talk about setting up graphQL. A quick intro about the shortcomings of REST when multiple clients are involved. Then it was mostly an Amazon stack showdown.

Key take away: GraphQL does help to further decouple clients and APIs.


InnerSource: Adopting Open Source Best Practice for the Enterprise by Paul Adams
------------------------------
Inspirational talk about open source inside a company.

One interesting bit about pull requests: when contributing to a project, always open an empty pull requests and start a dialog before pushing any code. State you problem, how you intent to solve it and how it fits the project.

Key take away: Teams should be empowered and trusted so that they can do what they think is good. 

Resources:
* [https://www.oreilly.com/programming/free/getting-started-with-innersource.csp](https://www.oreilly.com/programming/free/getting-started-with-innersource.csp)
* [https://en.wikipedia.org/wiki/Drive:_The_Surprising_Truth_About_What_Motivates_Us](https://en.wikipedia.org/wiki/Drive:_The_Surprising_Truth_About_What_Motivates_Us)


3 Common pitfalls in Microservices Integration by Bernd Ruecker
------------------------------

He had an small API ready with 4 versions and demonstrated each of them. V4 was using a [BPMN engine](https://camunda.com/products/bpmn-engine/) and the speaker showed the dashboard with a generated flow graph and a list of all running requests. Very impressive!
This talk was very nice and interesting. Although the speaker did mention his company product, it was very much a well prepared technical presentation that showed the benefit of [BPMN](http://www.bpmn.org/) in the context of distributed systems. He took a (bad) example of what happen when a component fails when booking a ticket on an arline website and explained how it could be improved.

Key take away: Stateful retry should be done by components in the system, not by the end user!

Resources:
* [https://berndruecker.io/](https://berndruecker.io/)
* [https://www.paysafe.com/fileadmin/content/pdf/Lost_in_Transaction_Volume_1.pdf](https://www.paysafe.com/fileadmin/content/pdf/Lost_in_Transaction_Volume_1.pdf)


Has anyone else seen your code? by Alex Fernàndez
------------------------------
A mildly politically incorrect talk about code review processes. Very entertaining and fun. Many GIFs.

Key take away: There are benefits in having junior devs doing reviews and they should be empowered to ask questions.


Panel Discussion - Technical Leadership by Thiago de Faria, Daniel Gebler, Alessandro Cinelli and Armagan Amcalar
------------------------------
Very interesting discussion about building a culture and embrace diversity.

Key take away: Stay human. Train people to build up the profiles you're looking for.


Living Things by Ashi Krishnan
------------------------------
That's a very hard one to summarize. It was a mix of tales, facts and beliefs. Here is what I took out of it:
Everything that exists does so because we choose to believe in it. That includes countries, religions, laws and everything else. By building widely used systems, coders are also telling a story (even enabling other stories). That means that somehow coders are shaping "reality" and participating for good in all the living things. 

At that point, I thought about the purpose of what I'm doing daily and realized I should make sure I'm telling a story I like.

One thing I remember she said, while speaking about entropy: "The universe is trying to self-destruct so much that it became alive". This kind of speech.

Overall, it resonated with me a lot, because I recognised ideas I encountered before. Some of them while reading Terry Pratchett books (Moving Pictures and Small Gods came to mind).

Key take away: You should attend this talk in person for sure.

Resources: [https://ashi.io/](https://ashi.io/)


Final word
==========
Overall, I really enjoyed those 2 days of conferences. It was very well organised, and I finally went *inside* Kultur Brauerei :)

Codemotion is very broad in topics and that's something I took advantage of. Being technical, it's too easy to get sucked in discussions about languages, frameworks and tools. One should not forget about the bigger picture, and I mean bigger that the product you're building or the company you work for.

A big shout-out to [codemotion](https://magazine.codemotion.com/): continue the good work!
