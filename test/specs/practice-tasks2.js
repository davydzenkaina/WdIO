const Pastebin = require('../pageobjects/pastebin.page');

 describe('Should create New Paste in website Pastebin.com with next params', () => {
  it('Shoud open website Pastebin.com', async () => {
    Pastebin.open()
    await browser.pause(5000)
    await expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
  })

  it('Should create code', async () => {
    await Pastebin.createCode.addValue(`git config --global user.name  "New Sheriff in Town"
        git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
        git push origin master --force`)
    expect(Pastebin.createCode).toHaveValue(`git config --global user.name  "New Sheriff in Town"
     //git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
     //git push origin master --force`)
  })

  it('Should choose Syntax Highlighting ', async () => {
    await Pastebin.openSyntaxHighlighting.click()
    await Pastebin.chooseBash.click()
    expect(Pastebin.chooseBash).toHaveValue('Bash')
  })

  it('Should shoose Paste Expiration', async () => {
    await Pastebin.openPasteExpiration.click()
    await Pastebin.shoose10Minutes.click()
  })

  it('Shoud create Paste Name', async () => {
    await browser.pause(5000)
    await Pastebin.openPasteName.addValue('how to gain dominance among developers')
    expect(Pastebin.openPasteName).toHaveValue('how to gain dominance among developers')
  })

  it('Should safe params of New Paste ', async () => {
    await Pastebin.saveNewPaste.click()
  })
})
