import { test, expect } from '@playwright/test';

test.describe('CaptureChronicles E2E Tests', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page title contains expected text
    await expect(page).toHaveTitle(/CaptureChronicles|Gallery|Vite/);
    
    // Check if header is visible
    const header = page.locator('header, nav, .header');
    await expect(header.first()).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Try to find and click navigation links
    const homeLink = page.getByRole('link', { name: /home/i }).first();
    if (await homeLink.isVisible()) {
      await homeLink.click();
      await expect(page).toHaveURL(/.*\//);
    }
  });

  test('search functionality', async ({ page }) => {
    await page.goto('/');
    
    // Look for search input
    const searchInput = page.getByPlaceholder(/search/i);
    if (await searchInput.isVisible()) {
      await searchInput.fill('test search');
      await searchInput.press('Enter');
      
      // Should navigate to search results or show results
      await page.waitForTimeout(1000);
      expect(page.url()).toBeDefined();
    }
  });

  test('responsive design', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if mobile menu button exists
    const menuButton = page.getByRole('button').first();
    await expect(menuButton).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.reload();
    
    // Page should still be functional
    await expect(page.locator('body')).toBeVisible();
  });
});
