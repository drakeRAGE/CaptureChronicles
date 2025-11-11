# Testing Setup Documentation

This project now includes comprehensive testing setup for both frontend and backend applications.

## Frontend Testing (Gallery)

### Setup
- **Framework**: Vitest + React Testing Library
- **Environment**: jsdom
- **Location**: `/gallery/src/components/__tests__/`

### Running Tests
```bash
cd gallery
npm run test          # Run tests in watch mode
npm run test:run      # Run tests once
npm run test:ui       # Run tests with UI
```

### Sample Test
- `Header.test.jsx` - Tests for the Header component including:
  - Component rendering
  - Search functionality
  - Mobile menu toggle
  - User authentication states

## Backend Testing (API)

### Setup
- **Framework**: Jest + Supertest
- **Environment**: Node.js
- **Location**: `/api/__tests__/`

### Running Tests
```bash
# From root directory
npm run test          # Run backend tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Sample Tests
- `simple.test.js` - Basic functionality tests including:
  - Mathematical operations
  - String manipulations
  - Object property testing
  - Async function testing
- `user.test.js` - API route tests (requires additional ES module configuration)

## Combined Testing

### Run All Tests
```bash
npm run test:all      # Run both frontend and backend tests
npm run test:frontend # Run only frontend tests from root
```

## Configuration Files

### Frontend
- `vite.config.js` - Vitest configuration
- `setupTests.js` - Test environment setup

### Backend
- `jest.config.js` - Jest configuration
- `.babelrc` - Babel configuration for ES modules
- `api/__tests__/setup.js` - Test setup and mocks

## Test Structure

```
├── gallery/
│   ├── src/
│   │   ├── components/
│   │   │   └── __tests__/
│   │   │       └── Header.test.jsx
│   │   └── setupTests.js
│   └── vite.config.js
├── api/
│   └── __tests__/
│       ├── setup.js
│       └── user.test.js
├── jest.config.js
└── .babelrc
```

## Adding New Tests

### Frontend Component Tests
1. Create test file in `gallery/src/components/__tests__/`
2. Import testing utilities from `@testing-library/react`
3. Wrap components with `TestWrapper` for Redux/Router context

### Backend API Tests
1. Create test file in `api/__tests__/`
2. Import `supertest` and create Express app
3. Mock database models and middleware as needed

## Best Practices

1. **Isolation**: Each test should be independent
2. **Mocking**: Mock external dependencies (DB, APIs)
3. **Coverage**: Aim for meaningful test coverage
4. **Naming**: Use descriptive test names
5. **Setup**: Use beforeEach/afterEach for test cleanup

## Future Enhancements

- [ ] Add Playwright for E2E testing
- [ ] Integrate with CI/CD pipeline
- [ ] Add visual regression testing
- [ ] Implement test database seeding
