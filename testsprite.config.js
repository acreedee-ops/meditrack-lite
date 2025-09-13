// TestSprite Configuration for MediTrack Lite
module.exports = {
  // Project settings
  projectName: 'MediTrack Lite',
  baseUrl: process.env.VITE_API_URL || 'http://localhost:3000',
  
  // TestSprite API configuration
  apiKey: process.env.TESTSPRITE_API_KEY,
  
  // Test environment settings
  testEnvironment: {
    headless: true,
    viewport: {
      width: 1280,
      height: 720
    },
    timeout: 30000
  },
  
  // Test directories
  testDir: './tests',
  outputDir: './test-results',
  
  // Browser settings
  browsers: ['chromium', 'firefox', 'webkit'],
  
  // Test patterns
  testMatch: [
    '**/*.test.js',
    '**/*.spec.js',
    '**/*.e2e.js'
  ],
  
  // Reporting
  reporters: [
    'html',
    'json',
    'junit'
  ],
  
  // Retry settings
  retries: 2,
  
  // Parallel execution
  workers: 4,
  
  // Test data
  testData: {
    users: {
      admin: {
        email: 'admin@meditrack.com',
        password: 'admin123'
      },
      user: {
        email: 'user@meditrack.com',
        password: 'user123'
      }
    }
  }
};