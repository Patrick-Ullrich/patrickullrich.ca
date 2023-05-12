---
title: "Many-To-Many in EF .NET 5"
pubDate: "2020-11-05"
bannerUrl: "/assets/many-to-many-in-ef-net-5/banner.png"
description: "A new Many-2-Many syntax has been show cased during the .NET Conf 2020. We will take a look at see how it simplifies the setup."
---

.NET Conf 2020 was happening this week. We were shown tips and tricks using csharp 9, Blazor, and all the performance improvements we are getting with .NET 5.
One update that stuck with me is the new **Many-to-Many** syntax coming to Entity Framework.

Let’s take a look at what a Many-to-Many looked like before .NET 5 and how the new syntax simplifies it.

---

Let me introduce the data model we will be using for this post. It’s a straight forward relationship between Streamers and Subscribers. A streamer can have many subscribers and a subscriber can subscribe to many Streamers. They are linked via a Junction Table that we will call Subscriptions.

![data-model::Data Model](/assets/many-to-many-in-ef-net-5/data-model.png)

I will only show some highlights in this post. You can find some more complete code here on [GitHub](https://github.com/Patrick-Ullrich/m2mdotnet5).

Without further ado, let’s look at the old way to implement Many-To-Many.

<script src="https://gist.github.com/Patrick-Ullrich/7fbc140fe2b58c1c8923b72e3481836e.js"></script>

As we can see the Streamer has a List of Subscriptions (and so does the Subscriber). This means if we want to get all Subscribers of a Streamer we need to navigate through the Subscription Entity every time.

For example, if we are looking for Streamers that have Subscribers above the age of 18 we would use the following query:

```csharp
context.Streamers.Where(streamer => streamer.Subscriptions.Any(sub => sub.Subscriber.Age > 18)).ToList();
```

Yes, in our Database we do expect to have a Junction Table, but it currently has no additional purpose but to connect our two entities. Wouldn’t it be way better, if we could simply navigate from Streamers to Subscribers?

Incomes EF .NET 5 with even better Many-to-Many support.

We are now able to go directly from our Streamer entity to our Subscriber entity. First, let’s add a reference between the 2 entities.

```csharp
public class Subscriber
{
    ...
    public ICollection<Streamer> Streamers { get; set; }
}
public class Streamer
{
    ...
    public ICollection<Subscriber> Subscribers { get; set; }
}
```

This allows us to simplify the query:

```csharp
context.Streamers.Where(streamer => streamer.Subscribers.Any(sub => sub.Age > 18)).ToList();
```

Awesome, but wait - what if we need more information on our Junction Table? Let’s say, we want to track how many months a Subscriber has been Subscribed.

---

First, we will have to add some configuration to our `DbContext`.
If you are already familiar with Entity Framework, then this part will be familiar.

<script src="https://gist.github.com/Patrick-Ullrich/aee278201c269e09f57e2bb0ae71de71.js"></script>

This allows us to query the Junction Table like so:

```csharp
context.Subscribers.Where(sub => sub.Subscriptions.Any(x => x.MonthsSubscribed > 3)).ToList();
```

The first time I heard about this change was from [@shayrojansky](https://twitter.com/shayrojansky) during the .NET Conf 2020.
You can find the recording here: [https://www.youtube.com/watch?v=BIImyq8qaD4](https://www.youtube.com/watch?v=BIImyq8qaD4)

If you want to read further about it I highly suggest checking out the [official Microsoft Docs](https://docs.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key#many-to-many) as well.
