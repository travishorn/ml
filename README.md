# Machine Learning

Create and browse visual drawings and charts. Based on Radu Mariescu-Istodor's
[No Black Box Machine Learning
Course](https://www.youtube.com/watch?v=vDDjtwQDw2k&t=5295s) for
[freeCodeCamp](https://www.freecodecamp.org/).

## Installation

Clone this repository

```sh
git clone https://github.com/travishorn/ml
```

Change into the directory

```sh
cd ml
```

Install dependencies

```sh
npm install
```

Migrate the database

```sh
npx knex migrate:latest
```

Seed the database

```sh
npx knex seed:run
```

Start the development server

```sh
npm run dev
```

Go to http://localhost:5173

## Create training data (drawings)

Go to http://localhost:5173

Click on **Draw**

Click to draw the item indicated on the screen, then click **Done**

Repeat as many times as desired to continually add training data.

## Browse training data (drawings)

Go to http://localhost:5173

Click on **Browse**

Scroll to view submitted drawings

## Predict

Go to http://localhost:5173

Click on **Predict**

The chart at the top plots data on two features: width and height.

Draw in the box at the bottom. As you draw, the features of your drawing are
plotted alongside the training data. 

*To do (under development):*

A prediction is made based on the nearest neighbors to your drawing.

## License

The MIT License (MIT)

Copyright © 2023 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
