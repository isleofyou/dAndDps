/* eslint-disable no-undef */
describe('D&DPS battle screen test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api.open5e.com/weapons/?format=json', {
      fixture: 'weapons.json'
    });
    cy.visit('http://localhost:3000')
    .get('td')
      .first()
      .click()
      .get('h3[class="weapon-name"]')
      .get('div[class="button-container"]')
      .click()
  })

  it('As a user, I should be able to see a number as damage', () => {
    cy.get('h3[class="damage"]')
      .expect('h3').to.be.within(1,4)
  })

  it('As a user, I should be able to click on the Roll Damage button to show the battle screen', () => {
      // eslint-disable-next-line no-undef
      cy.url()
      .should('include', '/roll')
      .get('div[class="roll-container"]')
      .should('have.length', 1)
  })

  it('As a user, I should be able to click on the clear button to hide the weapon details', () => {
      cy.get('button')
      .first()
      .click()
      .get('h3[class="weapon-name"]')
      .should('have.length', 0)
  })
})