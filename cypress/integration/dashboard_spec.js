/* eslint-disable no-undef */
describe('D&DPS dashboard test', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.open5e.com/weapons/?format=json', {
      fixture: 'weapons.json'
    });
    cy.visit('http://localhost:3000');
  })
  
  it('As a user, when I visit the homepage I should see a header', () => {
    cy.get('div[class="header"]')
      .contains('D&DPS')
  })

  it('As a user, when I visit the homepage the URL should be "/"', () => {
    cy.url()
      .should('include', '/');
  })
     
  it('As a user, when I visit the homepage I should see all the weapons', () => {
    cy.get('div[class="weapons-page"]')
      .should('have.length', 1)
  })

  it('As a user, I should be able to click on a weapon to see the details', () => {
    cy.get('td')
      .first()
      .click()
      .get('h3[class="weapon-name"]')
      .contains('Club')  
  })

  it('As a user, I should be able to click on the name category to sort in ascending order', () => {
    cy.get('th')
      .first()
      .click()
      .get('td')
      .first()
      .contains('Club')
      .get('td').eq(6)
      .contains('Greatclub')
  })

  it('As a user, I should be able to click again on the name category to sort in descending order', () => {
    cy.get('th')
      .first()
      .click()
      .click()
      .get('td')
      .first()
      .contains('Greatclub')
      .get('td').eq(6)
      .contains('Club')
  })

  it('As a user, I should be able to click on the cost category to sort in ascending order', () => {
    cy.get('th').eq(1)
      .click()
      .get('td').eq(1)
 
      .contains('$1')
      .get('td').eq(7)
      .contains('$2')
  })

  it('As a user, I should be able to click on the cost category again to sort in descending order', () => {
    cy.get('th').eq(1)
      .click()
      .click()
      .get('td').eq(1)
 
      .contains('$2')
      .get('td').eq(7)
      .contains('$1')
  })

  it('As a user, I should be able to click on the clear button to hide the weapon details', () => {
    cy.get('td')
      .first()
      .click()
      .get('button')
      .first()
      .click()
      .get('h3[class="weapon-name"]')
      .should('have.length', 0)
  })

  it('As a user, I should be able to click on the Roll Damage button to show the battle screen', () => {
    cy.get('td')
      .first()
      .click()
      .get('h3[class="weapon-name"]')
      .get('div[class="button-container"]')
      .click()
      cy.url()
      .should('include', '/roll')
      .get('div[class="roll-container"]')
      .should('have.length', 1)
  })


});
