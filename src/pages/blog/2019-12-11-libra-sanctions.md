---
templateKey: blog-post
title: Understanding Libra's trouble by understanding sanctions
date: 2019-12-06T15:04:10.000Z
description: I couldn't find a concise overview of how sanctions work and how that affects Libra, so I put this together.

tags:
  - economics
  - libra
  - cryptocurrency

---

The most interesting part of Mark Zuckerburg's grilling at the feat of congress was this question:

https://twitter.com/tayvano_/status/1187052134165925888

https://twitter.com/i/status/1187070270760030208

Most questions at the hearing were completely orthogonal to Libra.  But I found this exchange fascinating, although I didn't completely understand it.  How do sanctions work, and why is the US dollar so fundamental to them?  I couldn't find a consise overview of these topics and how they relate to Libra, so let's dive in.


## Sanctions - How do they work?

Primarily, there are two things that make up the backbone of sanctions, and they are the same two things that allow international transfers of money: the Fed, and [SWIFT](https://www.investopedia.com/terms/s/swift.asp).  There are other mechanisms to stop payments, but this is the primary way it works.

For anyone to do business with foreign countries, they need to somehow transfer money between their bank and a bank in that country (via ["correspondent banks"](https://www.investopedia.com/terms/c/correspondent-bank.asp)).  A technology for messaging the financial transactions and a level of trust between the institutions is needed.  Enter SWIFT -- a member owned cooperative of financial institutions, which is essentially a trust mechanism for incentivizing the group to keep out bad actors.  Over 11,000 financial institutions in over 200 countries are part of SWIFT.

![swift](/img/swift-quees.png)

What SWIFT does:  SWIFT has a technology that is essentially a messaging service for financial transactions.  The API takes the category of payment, the related parties, and a message.  The correspondent banks do the actual debits and credits based on the message.  There is nothing inherently special about SWIFT as a messaging service except that it has the network effect of participation by essentially all financial institutions.  If you are a bank, you want to be a part of SWIFT.  See some examples of SWIFT messages [here](https://en.wikipedia.org/wiki/SWIFT_message_types#ISO_15022_MT).

So to impose sanctions, the Fed has to have significant control over SWIFT. How does it manage this?  The answer is again, network effects: the US dollar has become the defacto international currency, so the ["correspondent banks"](https://www.investopedia.com/terms/c/correspondent-bank.asp) in SWIFT typically have accounts with the Fed.  That way, the banks can seamlessly transfer money between Fed accounts because they simply instruct the Fed to debit one account and credit the other.

The Fed enforces sanctions by not allowing correspondent banks to transfer funds to restricted countries.  The consequences to a bank appear to be debilitating: they would lose their account with the Fed and they would get pushed out of SWIFT, either of which action would essentially disable them from doing any more foreign transactions.

There have been various attempts to make alternative versions of SWIFT:  [Russia is working on it](https://www.cnbc.com/2018/05/23/russias-central-bank-governor-touts-moscow-alternative-to-swift-transfer-system-as-protection-from-us-sanctions.html), [so is Europe](https://en.wikipedia.org/wiki/Instrument_in_Support_of_Trade_Exchanges), and so is [Ripple](https://ripple.com/).  But they won't work, and all for the same reasons - the Fed has immense control over SWIFT, and the banks that might want to use those alternate systems face the possibility of being kicked out of SWIFT.  The only way for an international transfer system to sidestep SWIFT is for the system to sidestep banks and to start with massive scale.

This is why Libra might work.  Libra would come out of the gate with scale, to the tune of over 2 billion users.  Payments with Libra would skip banks - transactions would happen directly between the two counter-parties (by being verified by the Libra Association).

----



The US government doesn't want to give up power, and so if Zuck is going to comply with all US regulatory bodies, I see one of two scenarios playing out:

-- FB will change the structure of the Libra foundation, giving 51% ownership to the US governement

-- FB will give complete control of sanctioning to the Fed

I think the second option is more likely.  The problem is that the power to censor payments is a huge power in this project.

The debate is now turning into public vs private as opposed to centralized vs decentralized.  Libra will be very centralized, and it's vision of becoming completely decentralized is probably already dead in its tracks.

A big part of FB's leverage is China.  China is big and scary and already has a state run 




