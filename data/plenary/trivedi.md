---
title: "Software Fault Tolerance via Environmental Diversity"
---

Complex systems in different domains contain significant amount of software.
Several studies have established that a large fraction of system outages are due to software faults. 
Traditional methods of fault avoidance, fault removal based on extensive testing/debugging, and fault tolerance based on design/data diversity 
are found inadequate to ensure high software dependability. The key challenge then is how to provide highly dependable software.

We discuss a viewpoint of fault tolerance of software-based systems to ensure high dependability.
We classify software faults into Bohrbugs and Mandelbugs, and identify aging-related bugs as a subtype of the latter.
Traditional methods have been designed to deal with Bohrbugs. The key challenge then is to develop mitigation methods for Mandelbugs in general and aging-related bugs in particular. 
We submit that mitigation methods for Mandelbugs utilize environmental diversity. Retry operation, restart application, 
failover to an identical replica (hot, warm or cold) and reboot the OS are examples of mitigation techniques that rely on environmental diversity. 
For software aging related bugs, it is also possible to utilize a proactive environmental diversity technique known as software rejuvenation. 
We discuss environmental diversity both from experimental and analytic points of view and cite examples of real systems employing these techniques.
