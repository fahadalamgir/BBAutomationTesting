/// <reference types="cypress" />

Cypress.config('baseUrl','https://ansokan.bigbank.se')
describe('API Testing',()=>{
    it('GET method',()=>{
    cy.request('https://ansokan.bigbank.se/')
    .then((res)=>
        {
            expect(res).to.have.property('status',200)
            expect(res.body).to.not.be.null
            expect(res.body).to.have.length(1382)
        })
    })

    it('GET -create data on request',()=>
    { 
        cy.request('/?amount=50000&period=120&interestRate=10.95&lang=sv&bbsource=google&bbchannel=organic')
        cy.request('/?amount=150000&period=12&interestRate=20&lang=sv&bbsource=google&bbchannel=organic')
    })
})