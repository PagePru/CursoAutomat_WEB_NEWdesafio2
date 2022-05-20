const puppeteer = require('puppeteer')

describe('Prueba Unitarias: Verificar elementos e imágenes de la página automationpractice.com ', () => {
	it('Prueba1: acceder y dar click en la imagen WOMEN, usando el Selector del elemento', async () => {
		const browser = await puppeteer.launch({ headless: true })
		const page = await browser.newPage()
		await page.goto('http://automationpractice.com/index.php')
		const SEARCH_INPUT = '#block_top_menu > ul > li:nth-child(1) > a' //  datos del Selector
		// Hacemos Click usando el selector
		await page.click(SEARCH_INPUT)
		// Esperamos por la imagen para saber si aceptó bien el botón anterior de WOMEN, usamos el XPath de la imagen:
		await page.waitForXPath('//*[@id="center_column"]/div[1]')
		await browser.close()
	})

	it('Prueba2: acceder y dar click en la imagen WOMEN, usando el XPath', async () => {
		const browser = await puppeteer.launch({ headless: true })
		const page = await browser.newPage()
		await page.goto('http://automationpractice.com/index.php')
		// Se define el XPath de la imagen Women "a la que se quiere hacer click":
		const INPUTWITH_XPATH = await page.waitForXPath('/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[1]/a')
		await INPUTWITH_XPATH.click() 
		await browser.close()
	})

	it('Prueba3: acceder y dar click en la imagen WOMEN, usando la clase', async () => {
		const browser = await puppeteer.launch({ headless: true })
		const page = await browser.newPage()
		await page.goto('http://automationpractice.com/index.php')
		// hacer click sobre la imagen Women usando su CLASE ya que no se ubicó su CSS
		const SEARCH_WomenClase = '.sf-with-ul'
		/// await page.click.SEARCH_WomenClase
		await page.click(SEARCH_WomenClase)
		// Esperamos por la imagen para saber si aceptó bien el click anterior de WOMEN, usamos la imagen:
		await page.screenshot({ path: '3-category_default.jpg' })
		await browser.close()
	})
})