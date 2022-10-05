const googleCloudPlatform = require('../pageobjects/googleCloudPlatform.page')

describe('open website cloud.google.com, search Google Cloud Calculator and choose params', () => {
    let price1
    before(async () => {
        googleCloudPlatform.open();
        await browser.pause(5000)
        await googleCloudPlatform.searchCalculator.addValue('Google Cloud Platform Pricing Calculator')
        await browser.keys("Enter")
        await googleCloudPlatform.openCalculator.click()
        await browser.switchToFrame(0)
        await browser.switchToFrame(0)
        await googleCloudPlatform.openComputeEngine.click()
        await googleCloudPlatform.numberOfInstances.addValue('4')
        await googleCloudPlatform.operetionSistem.click()
        await googleCloudPlatform.chooseFree.click()
        await googleCloudPlatform.vmClass.click()
        await googleCloudPlatform.chooseRegular.click()
        await googleCloudPlatform.instanceType.click()
        await googleCloudPlatform.chooseN1.click()
        await googleCloudPlatform.searchMachineType.click()
        await googleCloudPlatform.searchStd8.click()
        await googleCloudPlatform.searchAddGpus.click()
        await googleCloudPlatform.searchGpuType.click()
        await googleCloudPlatform.searchTesla100.click()
        await googleCloudPlatform.searchNumberOfGpus.click()
        await googleCloudPlatform.searchNumberOfGpus1.click()
        await googleCloudPlatform.searchLocalSSD.click()
        await googleCloudPlatform.searchLocalSSD375Gb.click()
        await googleCloudPlatform.searchDataCenterLocation.click()
        await googleCloudPlatform.searchLocationFrankfurt.click()
        await googleCloudPlatform.searchCommittedUsage.click()
        await googleCloudPlatform.searchCommittedUsage1Year.click()

        await googleCloudPlatform.addToEstimate.click()
        price1 = googleCloudPlatform.price1.getText()


        await googleCloudPlatform.chooseEmailEstimate.click()
        await browser.newWindow('https://yopmail.com/ru/')
        await googleCloudPlatform.emailGenerator.click()
        await googleCloudPlatform.copiEmail.click()
        await browser.switchWindow('https://cloud.google.com/')
        await browser.switchToFrame(0)
        await browser.switchToFrame(0)
        await googleCloudPlatform.addEmail.addValue(['Control', 'v'])
        await googleCloudPlatform.sendEmail.click()
        await browser.switchWindow('https://yopmail.com/ru/')
        await googleCloudPlatform.checkEmail.click()
        await browser.pause(5000)
        await googleCloudPlatform.refreshButton.click()
    })

    it('price', async () => {
        await browser.switchToFrame(2)
        await expect(googleCloudPlatform.price).toHaveTextContaining(price1);

    })






})

