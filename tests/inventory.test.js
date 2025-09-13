// TestSprite Inventory Tests for MediTrack Lite
const { test, expect } = require('@testsprite/testsprite-mcp');

test.describe('Inventory Management', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application and login
    await page.goto('http://localhost:5173');
    await page.fill('input[type="email"]', 'admin@meditrack.com');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    
    // Navigate to inventory page
    await page.click('[data-testid="inventory-nav"]');
    await expect(page).toHaveURL(/.*inventory/);
  });

  test('should display inventory list', async ({ page }) => {
    // Check if inventory table is visible
    await expect(page.locator('[data-testid="inventory-table"]')).toBeVisible();
    await expect(page.locator('[data-testid="inventory-header"]')).toContainText('Inventory Management');
  });

  test('should add new medication', async ({ page }) => {
    // Click add medication button
    await page.click('[data-testid="add-medication-btn"]');
    
    // Fill medication form
    await page.fill('[data-testid="medication-name"]', 'Test Medication');
    await page.fill('[data-testid="medication-quantity"]', '100');
    await page.fill('[data-testid="medication-expiry"]', '2025-12-31');
    await page.selectOption('[data-testid="medication-category"]', 'Prescription');
    
    // Submit form
    await page.click('[data-testid="save-medication-btn"]');
    
    // Check if medication was added
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="inventory-table"]')).toContainText('Test Medication');
  });

  test('should edit existing medication', async ({ page }) => {
    // Click edit button for first medication
    await page.click('[data-testid="edit-medication-btn"]:first-child');
    
    // Update medication details
    await page.fill('[data-testid="medication-quantity"]', '150');
    
    // Save changes
    await page.click('[data-testid="save-medication-btn"]');
    
    // Check if changes were saved
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  });

  test('should delete medication', async ({ page }) => {
    // Click delete button for first medication
    await page.click('[data-testid="delete-medication-btn"]:first-child');
    
    // Confirm deletion
    await page.click('[data-testid="confirm-delete-btn"]');
    
    // Check if medication was deleted
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="success-message"]')).toContainText('deleted');
  });

  test('should filter medications by category', async ({ page }) => {
    // Select category filter
    await page.selectOption('[data-testid="category-filter"]', 'Prescription');
    
    // Check if table is filtered
    await expect(page.locator('[data-testid="inventory-table"] tbody tr')).toHaveCount(1);
  });

  test('should search medications by name', async ({ page }) => {
    // Enter search term
    await page.fill('[data-testid="search-input"]', 'Aspirin');
    
    // Check if search results are displayed
    await expect(page.locator('[data-testid="inventory-table"]')).toContainText('Aspirin');
  });
});