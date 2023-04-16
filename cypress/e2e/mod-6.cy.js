describe('network request handling', () => {

    const url = 'https://jsonplaceholder.typicode.com/posts'

    it('GET and POST methods', () => {
        
        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)
        })

        cy.request(
            {
                method:'POST',
                url:url,
                body: JSON.stringify({
                        title:'foo',
                        body:'bar',
                        userId:1
                    }),
                headers:{'Content-type':'application/json'}
            }
        ).then((response) => {
            const body = JSON.stringify(response.body)
            cy.log(body)
        })
    })

    it ('PUT method test', () => {

        cy.request(
            {
                method:'PUT',
                url: `${url}/1`,
                body: ({
                    id:1,
                    body:"this is the end, I know",
                    title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit I updated this."
                }),
                headers:{'Content-type':'application/json'}
            }
        ).then((response) => {
            expect(response.status).to.eq(200)
            const bodyPut = JSON.stringify(response.body.body)
            const title = JSON.stringify(response.body.title)
            const id = response.body.id
            expect(bodyPut).to.include("this is the end")
            expect(title).to.include('I updated this.')
            expect(id).to.eq(1)
        })

    })

    it ('DELETE method test', () => {

        cy.request({
            method:'DELETE',
            url: `${url}/4`,
            headers:{'Content-type':'application/json'}
        }).then((response) => {
            if (response.status === 200) {
                expect (response.body).to.be.empty
            }         
        })
    })
       
})