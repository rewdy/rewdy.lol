---
title: Typescript quick reference
date: "2024-10-10T00:00:00.000Z"
description: "Things I wish I knew when I started learning TypeScript"
---

When I started writing TypeScript, I didn't have much of any experience with strongly-typed languages. For that reason, it was a bit of a sharp learning curve. Especially, when I was used to JS that just lets you do whatever the heck you want.

Today, I really love TS and I've written a very basic intro that would have been helpful for me when I started. Hopefully, it's helpful to someone else out there.

![I love TS](./love-typescript.png)

## Typing variables

This is generally pretty straightforward and easy to read:

```ts
// syntax is:
// const var_name: type = "value";
const thing: string = "asdf";
const otherThing: number = 3;
```

Note that these types are _inline_, meaning we set the type and declare the variable in the same line. You can also create the type then assign it to the variable, like this:

```ts
type Thing = string;

const thing: Thing = "asdf";
```

You wouldn't probably do it this 👆 way normally for a string, but when you're making more complex types you certainly do. Let's look at typing objects.

## Typing objects

Typing objects is also fairly easy. The only thing here to be conscious of is properties are required unless you append the `?` after the key. See `aliases` in the example:

```ts
type User = {
  name: string;
  email: string;
  score: number;
  aliases?: string[]; // optional array of strings; can be `undefined`.
  role: "reader" | "writer" | "admin"; // union
  favoriteColor?: string; // optional
}
```

Since I mentioned it above, you _could_ define this type inline, but it starts to get cumbersome:

```ts
const user: {
  name: string;
  email: string;
  score: number;
  aliases?: string[]; // optional array of strings; can be `undefined`.
  role: "reader" | "writer" | "admin"; // union
  favoriteColor?: string; // optional
} = {
  name: "Pat",
  email: "pat@hotmail.com",
  score: 99,
  role: "writer",
  favoriteColor: "teal",
};
// ¯\_(ツ)_/¯
```

## Typing functions

For some reason, this one was confusing to me initially. I think the reason it was confusing to me is that I was expecting there to be a _type_ for a function. However, since all parts of the function should be typed (args and return value), to type a function it's just a matter of syntax. You will use `(args) => return type`. Peep this:

```ts
// typing
type CapitalizeFunc = (text: string) => string;

// implementation
const capitalize: CapitalizeFunc = (text) => {
  return text[0].toUpperCase() + text.slice(1);
}

// or do it inline
const capitalize2 = (text: string): string => text[0].toUpperCase() + text.slice(1);
```

Above we use constants that have a value set to an anonymous function. One benefit of doing this is that it prevents the function from being redefined later on. It comes with a set of asterisks, though. I'll point you to a [Google search for those](https://www.google.com/search?q=const+vs+function+javascript).

If you prefer to write `function() { ... }` style functions, you can do so, but you can't create a type to represent the whole function in the same way (that I know of...). You would do it like this:

```ts
function capitalize(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}
```

## Utility types

There are bunch of utility types built in to Typescript. These include types that make all properties of an object required, no properties required, select some properties of an object, etc. The syntax on these can be a little confusing at first (it was to me). Here are a few examples to gain your bearings:

```ts
// type with optional props
type Favorites = {
  colors?: string[];
  flavors?: string[];
  numbers?: number[];
}

// now, a version with all required
// note that `Favorites` gets passed in to Required as an arg using the <...> syntax 
type FavoritesReq = Required<Favorites>;

// fyi, 👆 is the same as 👇
type FavoritesReq2 = {
  colors: string[];
  flavors: string[];
  numbers: number[];
}
```

You can do the opposite of what the `Required` type does with `Partial`. So, like this:

```ts
// this gets us back to where we started with the Favorites type
type FavoritesOpt = Partial<FavoritesReq>;
```

The final example I'll share is using the `Pick` type. This gives us the ability to create a new type with _some_ of the properties from another type. So, let's say we want favorites with only `flavors` and `numbers`:

```ts
type FavoritesLite = Pick<Favorites, "flavors" | "numbers">; // the second arg here is a union of the keys we want
```

Check out all the built-in utility types here: [Typescript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html). (If you just 😍 lurve 😍 these and want more utility types, check out [type-fest 🎉](https://github.com/sindresorhus/type-fest).)

## Type Generics

This is _sort of_ an advanced topic, but I think it's quite helpful to have some awareness of this early on. Typescript has "generics" which are types that receive an argument and use the type of the argument in the resulting type.

For our first example, let's say you have a function that wraps a value in an object, keeping the typing, and returns it (not necessarily a common use case, but it's easy for an example). We can maintain the typing using generics. Consider the following:

```ts
// Note how we precede the function args with the type args <...>(...) => ...
const wrapIt = <T>(incoming: T): { wrapped: T } => ({
  wrapped: incoming,
});
```

The above example will let `T` be any type. We can narrow what `T` can be by extending existing types. Like this:

```ts
// T can only be a string, number, or boolean
const wrapIt = <T extends string | number | boolean>(incoming: T): { wrapped: T } => ({
  wrapped: incoming,
});

// Or, to make things easier to read as the type maybe grows with more props
// we can break this out into a type then an implementation
type WrapperFunc = <T extends string | number | boolean>(incoming: T) => { wrapped: T };

const wrapIt: WrapperFunc = (incoming) => ({
  wrapped: incoming,
});
```

There's a lot more to generics and things can get a lot more complex, but this at least gives some intro that can be helpful as you're thinking of typing your projects.

Definitely, check out [the Typescript docs on Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) for a lot more details.

---

That's it. Hope you like it.

Live, laugh, learn ❤️.
