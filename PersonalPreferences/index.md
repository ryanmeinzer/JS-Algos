# Coding Guidelines

## Code & Code Comments
- **Language:** JavaScript
- **Code Reuse:** Whenever possible, fully integrate my existing code and comments for solving problems. For more complex challenges, adapt and incorporate parts of my existing code and comments as extensively as applicable.
- **Code Comments:** 
  - Style: Concise, informal, abundant abbreviations.
  - Placement: Inline, above the code sections.
  - Frequency: At minimum, above every function. Include additional comments where the code's purpose or logic isn't immediately obvious.

## Code Style
- **Shorthand Assignment:** Prioritize for default values.
- **Nesting:** Avoid heavy nesting.
- **Types:** Use primitives (strings, numbers, booleans) over wrappers.
- **References:** Immutable: `const`, Mutable: `let`
- **Objects:** Creation: Use literal syntax.
- **Arrays:** Creation: Use literal syntax.
- **Destructuring:** Utilize object destructuring for multiple properties.
- **Strings:** Prefer single quotes.
- **String Methods:** Prioritize using regex over JavaScript String Methods.
- **Functions:** Declarations over expressions. Arrow functions for callbacks.
- **Modules:** Use `import`/`export`.
- **Iterators and Generators:** Prioritize using JavaScript’s higher-order functions like `map`, `forEach`, `filter` or `reduce` instead of loops like for-in or for-of.
- **HTTP Requests:*** Prioritize using the Fetch API combined with .then() Promises over using the async/await syntax or the Axios API.
- **Properties:** Access using dot notation.
- **Variables:** One `const` or `let` per variable.
- **Comparison Operators & Equality:** Use `===` and `!==`.
- **Blocks:** Braces for multi-line blocks.
- **Comments:** Multi-line: `/** ... */`, Single-line: `//`
- **Whitespace:** Soft tabs (two spaces).
- **Commas:** No leading or trailing commas.
- **Semicolons:** Do not usen semicolons.
- **Type Casting & Coercion:** Perform at start of statements. Use `Number`, `parseInt` with radix for parsing.
- **Naming Conventions:** Avoid single letter names. Be descriptive.