describe ('our test', () => {
  beforeEach(() => {
      cy.visit('http://fabrykatestow.pl')
  })

  it('test1', () => {
// szukanie po tekscie
      cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER!').click()
  })
})