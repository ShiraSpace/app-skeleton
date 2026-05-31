@AGENTS.md

## Code Style Guidelines

### Mandatory Code Standards

1. **Quotes**: Use single quotes throughout
2. **Exports**: Use named exports ONLY (no default exports)
3. **Return Types**: Add explicit return types to ALL functions
   4**Component Composition**: Extract to small, focused components when needed
   5**ESLint Rules**: Never modify ESLint configuration to suppress warnings or errors — always fix the code itself

### TypeScript

- All functions must have explicit return types (`JSX.Element`, `void`, `number`, etc.)
- Use strict mode
- Prefer interfaces for props and types

### Testing

- Each component has a dedicated test file
- Use `data-testid` for element selection in tests
- Store test IDs and content in constants file
- Place `render()` in `beforeEach` block
- Use `getByTestId` for element queries
- Mock dependencies appropriately
- Use centralized mocks in `__mocks__/` directory for shared module mocks (e.g., `__mocks__/next/image.tsx`) — do not duplicate `jest.mock()` calls across test files

### Code Formatting

- **Prettier** is configured for automatic code formatting
- Configuration (`.prettierrc`):
  - Single quotes for strings (`singleQuote: true`)
  - Semicolons required (`semi: true`)
  - Tab width: 2 spaces
  - Print width: 100 characters
  - Trailing commas: ES5 style
  - Arrow function parentheses: always
- Integrated with ESLint via `eslint-plugin-prettier`
- Formatting happens automatically when running `npm run lint`
- ESLint will both check and fix code style and formatting issues

## Architecture

### Framework & Routing
