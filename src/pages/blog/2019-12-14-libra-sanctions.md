---
templateKey: blog-post
title: Sanctions - The reason Libra will succeed or fail
date: 2019-12-14T15:04:10.000Z
description: I couldn't find a concise overview of how sanctions work, and how that affects Libra, so I put this together.

tags:
  - economics
  - libra
  - cryptocurrency

---

The most interesting part of Mark Zuckerburg's grilling at the feat of congress was this question:

https://twitter.com/tayvano_/status/1187052134165925888

https://twitter.com/i/status/1187070270760030208

Most questions at the hearing were completely orthogonal to Libra.  But I found this exchange fascinating, although I didn't completely understand it.  The United States uses  financial sanctions more than any other country, so it would be useful to know how sanctions work, and why the US dollar is so fundamental to them.  I couldn't find a concise overview of these topics and how they relate to Libra, so let's dive in.

## Sanctions - How do they work?

Primarily, there are two things that make up the backbone of sanctions, and they are the same two things that facilitate the majority of international money transfers (especially amongst businesses): the Fed, and [SWIFT](https://www.investopedia.com/terms/s/swift.asp).  _There are multiple other mechanisms to stop payments, but this seems (to me) to be the primary way it works._

For anyone to do business with foreign countries, they need to somehow transfer money between their bank and a bank in that country (via ["correspondent banks"](https://www.investopedia.com/terms/c/correspondent-bank.asp)).  So a technology for messaging the financial transactions and a level of trust between the institutions is needed.  Enter SWIFT -- a member owned cooperative of financial institutions.  "Member owned" is essentially a trust mechanism for incentivizing the group to keep out bad actors.  Over 11,000 financial institutions in over 200 countries are part of SWIFT.

![swift](/img/swift-quees.png)

What SWIFT does:  SWIFT has a technology that is essentially a messaging service for financial transactions.  The API takes the category of payment, the related parties, and a message.  The correspondent banks do the actual debits and credits based on the message.  There is nothing inherently special about SWIFT as a messaging service, except that it has the network effect of participation by essentially all financial institutions.  If you are a bank, you want to be a part of SWIFT, because that's how you are able to allow customers to take part in international transactions.  See some examples of SWIFT messages [here](https://en.wikipedia.org/wiki/SWIFT_message_types#ISO_15022_MT). 

SWIFT is not subject to US laws -- it is incorporated under Belgian law, so only needs to comply "[with related EU regulation, as confirmed by the Belgian government](https://www.swift.com/about-us/legal/compliance/swift-and-sanctions#DoesSWIFTexpelbanks?)."  [It is up to the financial institutions](https://www.swift.com/about-us/legal/compliance/swift-and-sanctions#DoesSWIFTcomplywithallsanctionslaws?) to comply with sanctions.  

So to impose sanctions (on banks outside the US), the Fed has to have significant control over the institutions that make up SWIFT. How does it manage this?  The answer is again, network effects: the US dollar has become the defacto international currency.  A business in France will typically sell to a business in, say, Canada, with US dollars. So the correspondent banks in SWIFT typically have accounts with the Fed.  That way, the banks can seamlessly transfer money between Fed accounts because they simply instruct the Fed to debit one account and credit the other.  Having a central/shared bank (the Fed) using a shared currency (the dollar) is wonderfully convenient for money transfers. 

With this backdrop, the Fed can enforce sanctions by not allowing correspondent banks to transfer funds to restricted countries.  The consequences to a bank appear to be debilitating: they would lose their account with the Fed and they would get strong-armed out of SWIFT, since it's a member-owned cooperative.  Either of these consequences would essentially disable them from doing any more foreign transactions.

There have been various attempts to make alternative versions of SWIFT:  [Russia is working on it](https://www.cnbc.com/2018/05/23/russias-central-bank-governor-touts-moscow-alternative-to-swift-transfer-system-as-protection-from-us-sanctions.html), [so is Europe](https://en.wikipedia.org/wiki/Instrument_in_Support_of_Trade_Exchanges), and so is [Ripple](https://ripple.com/).  But they won't work, and all for the same reasons - the Fed has immense control over SWIFT, and the banks that might want to use those alternate systems face the possibility of being kicked out of the only network that has scale.  

The way for an international financial system to sidestep SWIFT is for the system to sidestep banks, and to start with massive scale.  This is why Libra might work, and why the US government is scared.  Libra would come out of the gate with scale, to the tune of over 2 billion users.  And payments with Libra would skip banks - transactions would happen directly between the two counter-parties (by being verified by the Libra Association).

## What does this mean for Libra? ##

The US government doesn't want to give up the power of sanctions, so if Zuck is going to comply with all US regulatory bodies, like he says, I see one of three scenarios playing out:

-- FB will change the structure of the Libra foundation, giving 51% ownership to the US government.

-- Zuck scares the US enough with threats of China dominating the space.

-- Libra will give complete control of sanctioning to the Fed, or will require all validators to be US companies (so they will be responsible for upholding US laws).

I think the last option is the most likely.  Giving up control of the Libra foundation to the US government would significantly reduce the amount of validators who would want to be part of the Libra foundation.

The China threats are not convincing, although [Zuck warned of China multiple times during the hearing](https://www.ft.com/content/28c600de-f5a1-11e9-9ef3-eca8fc8f2d65):
> “China is moving quickly with the launch of a similar idea in the coming months ... Libra is going to be backed mostly by dollars and I believe that it will extend America’s financial leadership around the world, as well as our democratic values and oversight.” 


How is China going to achieve worldwide scale for it's payments network?  Through WeChat and Tik-Tok? The user base of WeChat is largely confined to China and Tik-Tok is mostly young people.  Sure, China will beat the US to a state monitored payments system, but it's not going to give the US problems with enforcing sanctions anytime soon, and that's really what's at stake.

So FB will give complete control of sanctioning in Libra to the Fed.  The problem is that the power to censor payments is a huge power in this project.  It's hard to imagine what that would look like, except requiring all the members of the foundation to be US companies, so they can be tried under US laws for facilitating illegal transactions.  Libra's white paper lays out a plan to gradually become more decentralized as time goes on, but that might already be out of the question.  The problem won't be that Facebook will control Libra, but that the US will.

Am I missing something big here?  Let me know! [@jonsjournals](https://twitter.com/jonsjournals)
