describe('my first scenario', () => {

    it('visit main page and click top menu button', () => {

        //const positionY = jQuery('[data-id="4ee1fd56"]').offset().top
        cy.visit('http://fabrykatestow.pl')
        cy.get('a[href="https://fabrykatestow.pl/cypress"]').eq(1).click()
        cy.url().should('contain','https://fabrykatestow.pl/cypress/')
        cy.get('[data-id="8bbdcf1"]').scrollTo('center',{ensureScrollable:false}).screenshot('kto nauczy cie testow',{overwrite:true})
    })

})