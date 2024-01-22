import { test, expect } from '@playwright/test'

test('Simple sample script',async ( {page} ) => {
    // Test code
    await page.goto('http://www.example.com')
    const locator = await page.locator('h1')
    await expect(locator).toHaveText('Example Domain')
})

test('Click on element',async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click("#signin_button")
    await page.click('text=Sign in')
    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})