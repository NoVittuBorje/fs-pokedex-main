const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('localhost:8080')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})
describe('Pokedex pokemon page', () =>{
  test('front page can be opened', async ({ page }) => {
    await page.goto('localhost:8080')
    await page.getByText('bulbasaur').click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})