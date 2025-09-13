# TestSprite Integration for MediTrack Lite

This document describes the TestSprite test automation integration for the MediTrack Lite application.

## Overview

TestSprite has been integrated into the MediTrack Lite project to provide automated testing capabilities for the web application. The integration includes end-to-end testing for authentication, inventory management, and other core features.

## Files Created

### Configuration Files
- `mcp-config.json` - MCP server configuration for TestSprite
- `testsprite.config.js` - TestSprite test configuration
- `.env` - Updated with TestSprite API key

### Test Files
- `tests/auth.test.js` - Authentication flow tests
- `tests/inventory.test.js` - Inventory management tests

## Available Test Scripts

The following npm scripts have been added to `package.json`:

```bash
# Run all tests
npm run test

# Run authentication tests only
npm run test:auth

# Run inventory tests only
npm run test:inventory

# Run tests in watch mode
npm run test:watch

# Run tests in headless mode
npm run test:headless

# Generate HTML test report
npm run test:report
```

## Environment Variables

The following environment variable has been added to `.env`:

```
TESTSPRITE_API_KEY=sk-user-9YlabI9-EeQJ4zjwfsATwA454SRoEVI9nuxz3211llL5im6altVw-57Bk9LGak_4hsk6CRGs9BKTFy7SkeYKNHVOvJIrCTq9Sq_5JZDZ_TIQq1v9fv4avksbdCQ5rK8Z0VU
```

## Test Configuration

The TestSprite configuration includes:

- **Project Name**: MediTrack Lite
- **Base URL**: http://localhost:3000 (configurable via VITE_API_URL)
- **Browsers**: Chromium, Firefox, WebKit
- **Test Environment**: Headless mode with 1280x720 viewport
- **Timeout**: 30 seconds
- **Retries**: 2 attempts
- **Workers**: 4 parallel workers
- **Output Directory**: ./test-results

## Test Coverage

### Authentication Tests (`tests/auth.test.js`)
- Login form display validation
- Successful login with valid credentials
- Error handling for invalid credentials
- Logout functionality

### Inventory Management Tests (`tests/inventory.test.js`)
- Inventory list display
- Adding new medications
- Editing existing medications
- Deleting medications
- Filtering by category
- Search functionality

## Running Tests

1. **Prerequisites**: Ensure the development server is running:
   ```bash
   npm run dev
   ```

2. **Run all tests**:
   ```bash
   npm run test
   ```

3. **Run specific test suites**:
   ```bash
   npm run test:auth
   npm run test:inventory
   ```

4. **Development mode** (watch for changes):
   ```bash
   npm run test:watch
   ```

## Test Data

The configuration includes test user credentials:

- **Admin User**: admin@meditrack.com / admin123
- **Regular User**: user@meditrack.com / user123

## Reporting

Test results are generated in multiple formats:
- HTML reports for visual analysis
- JSON reports for programmatic processing
- JUnit reports for CI/CD integration

Reports are saved to the `./test-results` directory.

## MCP Server Integration

The MCP (Model Context Protocol) server configuration allows TestSprite to communicate with the application through the configured API key. The server runs using:

```bash
npx @testsprite/testsprite-mcp@latest
```

## Troubleshooting

### Common Issues

1. **Node.js Version Warning**: TestSprite requires Node.js >=22, but the project runs on Node.js 20.14.0. This may cause warnings but should not prevent functionality.

2. **API Key Issues**: Ensure the TESTSPRITE_API_KEY is correctly set in the .env file.

3. **Port Conflicts**: Make sure the development server is running on the expected port (default: 5173).

4. **Test Failures**: Check that all required test data attributes are present in the UI components.

### Required Test Attributes

Ensure the following data-testid attributes are present in your components:

- `login-form`
- `dashboard`
- `error-message`
- `logout-button`
- `inventory-nav`
- `inventory-table`
- `inventory-header`
- `add-medication-btn`
- `medication-name`
- `medication-quantity`
- `medication-expiry`
- `medication-category`
- `save-medication-btn`
- `edit-medication-btn`
- `delete-medication-btn`
- `confirm-delete-btn`
- `success-message`
- `category-filter`
- `search-input`

## Next Steps

1. Add more test cases for additional features
2. Integrate with CI/CD pipeline
3. Set up test data management
4. Configure test environment variables for different stages
5. Add visual regression testing

## Support

For TestSprite-specific issues, refer to the official TestSprite documentation or contact their support team.