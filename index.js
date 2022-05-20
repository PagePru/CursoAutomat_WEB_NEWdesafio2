const puppeteer = require('puppeteer')

async function pruebaNavegador() {
	const browser = await puppeteer.launch({ headless: false })
	const page = await browser.newPage()
	await page.goto('https://www.google.com')
	await browser.close()
}

pruebaNavegador()
