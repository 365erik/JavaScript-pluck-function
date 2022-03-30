## Pluck Func in JavaScript with .reduce()

Implement a simple pluck using Array.prototype.reduce.
 
```javascript
const pluck = (list, key) =>
  list.reduce((pV, cV) => (key in cV ? [...pV, cV[key]] : [...pV]), []);
```

- https://replit.com/@365Erik/JavaScript-pluck-function#pluck.js
- https://dev.to/365erik/pluck-func-in-javascript-with-reduce-2od5

## Usage
Provide an array (`list`) of objects and a property name (`key`) to pluck, and the function will return a list of all values found in `list[n*][key]`.  

```javascript
// Sample data
const movies = [
  {
    title: "Invasion of the Body Snatchers",
    releaseDate: 1978,
    mpar: "R",
    rating: 5,
    comments: "This is my favorite!",
  },
  {
    title: "Invasion of the Body Snatchers",
    releaseDate: 1956,
    comments:
      "This a good film, but doesn't have Jeff Goldblum, Leonard Nimoy, or even Donald Sutherland in it.",
  },
  {
    title: "The Invasion",
    releaseDate: 2007,
    rating: 3,
    comments: "Not my favorite, but it was watchable.",
  },
  {
    title: "Attack the Block",
    releaseDate: 2010,
    rating: 4.5,
    comments: "A fun movie, innit.",
  },
  {
    title: "Ubik",
    comments: "It's just as well; they probably would have ruined it anyway.",
    mpar: null,
  },
];

```

Pluck all `title` values from `movies`...

```javascript
console.log(pluck(movies, "title"));
```

```bash
[
  'Invasion of the Body Snatchers',
  'Invasion of the Body Snatchers',
  'The Invasion',
  'Attack the Block',
  'Ubik'
]
```

Pluck all `mpar` (Motion Picture Association ratings) from `movies`.

```javascript
console.log(pluck(movies, "mpar"));
```

```bash
[ 'R', null ]
```

Note that pluck() is not fooled by falsie values because `(key in cV)` explicitly checks for the key and returns whatever value it's pointed at–even if the value is `undefined`! I think this is what you want from `pluck()` to keep it generic. You could clean out any unwanted values like `undefined` or `false` on a second pass or extend this to accept a filtering callback after the `(key in cV)`, but I'm stupid, so I'm keeping it simple.