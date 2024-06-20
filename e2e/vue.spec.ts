import { expect, test } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('div.greetings > h1')).toHaveText('GenericComponent')
  await page.getByRole('button', { name: 'active' }).click()
  await expect(page.locator('#app')).toContainText('1')
  await page.getByRole('button', { name: '0' }).click()
  await page.getByRole('textbox').click()
  await expect(page.getByRole('textbox')).toBeEmpty()
  await page.getByRole('textbox').click()
  await page.getByRole('textbox').fill('test')
  await page.getByRole('textbox').click()
  await page.getByRole('textbox').fill('testtest')
  await expect(page.getByText('GenericComponent active 1')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'GenericComponent' })).toBeVisible()
  await page.getByRole('button', { name: 'active' }).click()
  await expect(page.getByRole('textbox')).toHaveValue('testtest')
  await expect(page.locator('#app')).toContainText('2')
})
