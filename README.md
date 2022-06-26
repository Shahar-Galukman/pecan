# Pecan Test

Howdy,

I've created a recursive component to render the request navigator tree.

Bonus 1: Can your solution support a large quantity of items?
Answer: Yes, since rendered items are tracked there is less traversing on rendered items.

Bonus 2: Can your solution support an infinite depth (beneath the column level)?
Answer 2: Kinda Yes, as navigator component is recursive it can handle the actual rendering.
As to presentation, there would be a need to adjust for styling (e.g icons for inner level from column)

#### Note:

Regarding User permissions on the client end... 
I wasn't sure what was the meaning, as the user would fetch from a "server" getting relevant results.
In our given case, assuming there is a logged-in user, 
we could expect server to return children `false` for user without permissions, for a given entry (item).

In my humble opinion, this should be done on a separate level (e.g interceptors), and not as part of the metadata model.

Cheers,

Shahar

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
