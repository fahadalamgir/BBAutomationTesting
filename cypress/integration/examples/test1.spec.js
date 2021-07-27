/// <reference types="cypress" />

describe('Test big bank site',()=>
{

it('Customer 1 loan amount calculation',()=>
{
const currentValue  = '1893,30 SEK'
cy.visit('https://ansokan.bigbank.se/?amount=85000&period=60&interestRate=10.95&lang=sv&bbsource=google&bbchannel=organic')
cy.contains('Lånebelopp').click()
cy.get('input[type=range]').first().invoke('val',85000).trigger('change',{force:true})
cy.get('input[type=range]').first().invoke('val',60).trigger('change',{force:true})
cy.get('.bb-calculator__result-value').contains(currentValue)
cy.get('.bb-list-item__default-slot').contains('10.95%')
})

it('Customer 1 with changing loan amount calculation',()=>
{
const currentValue  = '4194,59 SEK'
cy.visit('https://ansokan.bigbank.se/?amount=120000&period=40&interestRate=20&lang=sv&bbsource=google&bbchannel=organic')
cy.contains('Lånebelopp').click()
cy.get('input[type=range]').first().invoke('val',120000).trigger('change',{force:true})
cy.get('input[type=range]').first().invoke('val',40).trigger('change',{force:true})
cy.get('.bb-calculator__result-value').contains(currentValue)
cy.get('.bb-list-item__default-slot').contains('20%')
cy.contains('Ansök nu').click()
cy.get('#firstNameField').type('fahad')
cy.get('#surnameField').type('alamgir')
cy.get('.bb-tooltip__bubble').contains('Personnummer ÅÅMMDD-XXXX. Sökande måste vara minst 20 år.')
cy.get('#personalIdentityCodeField').type('700612-1144')
cy.get('#emailField').type('fahadalamgircsd@gmail.com')
cy.get('input[type=tel]').type('1234567')
cy.get('#loanPurposeField').select('Resa')
cy.get('.bb-checkbox__label').click()
})
})