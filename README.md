# Unexpected NaN Comparison in JavaScript

This repository demonstrates an uncommon bug in JavaScript related to comparing NaN (Not a Number) values.  The issue lies in how JavaScript handles NaN using both loose (==) and strict (===) equality.

## The Bug

The JavaScript code uses strict equality (===) to compare two NaN values.  One would expect this to return `true` (since both variables hold the same 'not-a-number' value), but surprisingly it returns `false`.

## Solution

The solution involves using `Number.isNaN()` to reliably check if a value is NaN.  This function provides the correct behavior, returning `true` only when the value is NaN.

## Usage

1. Clone this repository
2. Run `node bug.js` to see the unexpected result.
3. Run `node bugSolution.js` to see the correct usage of `Number.isNaN()`.