
const googleCloudPlatform = require('../pageobjects/googleCloudPlatform.page')





describe('open website cloud.google.com, search Google Cloud Calculator and choose params', () => {
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
  })

  it('price 1', async () => {
  
     await expect(googleCloudPlatform.price1).toHaveTextContaining("1,081.20");

  })




  it('regular', async () => {
    expect(googleCloudPlatform.chooseRegular).toHaveValue('Regular')

  })
  it('Instance type:', async () => {
    expect(googleCloudPlatform.searchStd8).toHaveValue('n1-standard-8')

  })
  it('Instance type:', async () => {
    expect(googleCloudPlatform.searchLocationFrankfurt).toHaveValue('Frankfurt')

  })
  it('Instance type:', async () => {
    expect(googleCloudPlatform.searchLocalSSD375Gb).toHaveValue('375GB')

  })
  it('Instance type:', async () => {
    expect(googleCloudPlatform.searchCommittedUsage1Year).toHaveValue('1year')

  })


})


// describe('open calc page, set params and check them', () => {
//   before(async () => {
//     await googleCloudPlatform.open()
//     await googleCloudPlatform.searchForPricingCalculator()
//     await googleCloudPlatform.openPricingCalculator()
//     await googleCloudPlatform.switchToNecessaryFrame()
//     await googleCloudPlatform.setNumberOfInstances('4')
//     await googleCloudPlatform.setDropDownMenyParam(
//       googleCloudPlatform.series, googleCloudPlatform.seriesOption)
//     await googleCloudPlatform.setDropDownMenyParam(
//       googleCloudPlatform.machineType, googleCloudPlatform.machineTypeOption)
//     await googleCloudPlatform.addNecessaryGpu();
//     await googleCloudPlatform.setDropDownMenyParam(
//       googleCloudPlatform.addGpuNumberField, googleCloudPlatform.addGpuNumber)
//     await googleCloudPlatform.setDropDownMenyParam(
//       googleCloudPlatform.addGpuTypeField, googleCloudPlatform.addGpuType)
//     await googleCloudPlatform.setDropDownMenyParam(
//       googleCloudPlatform.localSSDField, googleCloudPlatform.localSSDValue)
//     await googleCloudPlatform.setDropDownMenyParam(
//       googleCloudPlatform.location, googleCloudPlatform.locationValue)
//     await googleCloudPlatform.setDropDownMenyParam(
//       googleCloudPlatform.commitedUsage, googleCloudPlatform.commitedUsageValue)
//     await googleCloudPlatform.clickOnButton(googleCloudPlatform.addToEstimate)
//   });

//   it('VM class is regular', async () => {
//     await expect(googleCloudPlatform.estimateTableVMclas).toHaveText('VM class: regular');
//   });

//   it('Instance type is n1-standard-8', async () => {
//     await expect(googleCloudPlatform.estimateTableInstanceType).toHaveText('Instance type: n1-standard-8');
//   });

//   it('Region is Frankfurt', async () => {
//     await expect(googleCloudPlatform.estimateTableRegion).toHaveText('Region: Frankfurt');
//   });
// //change ssd quantity from 2 to 1
//   it('Total available local SSD space is 2x375 GiB', async () => {
//     await expect(googleCloudPlatform.estimateTableSSDspace).toHaveText('Total available local SSD space 2x375 GiB');
//   });

//   it('Commitment term is 1 Year', async () => {
//     await expect(googleCloudPlatform.estimateTableCommitmentTerm).toHaveText('Commitment term: 1 Year');
//   });

//   it('estimated cost is the same with manual entered', async () => {
//     await expect(googleCloudPlatform.estimateTableCost).toHaveTextContaining('1,083.33');
//   });

// });
