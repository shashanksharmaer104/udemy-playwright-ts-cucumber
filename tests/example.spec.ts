import { test, expect } from '@playwright/test'

test('Simple sample script',async ( {page} ) => {
    // Test code
    await page.goto('http://www.example.com')
    const locator = await page.locator('h1')
    await expect(locator).toHaveText('Example Domain')
})
