import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameFiled:'[name="username"]',
    passwordFiled: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '.oxd-alert'
  }
  

  it('Login sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiled).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordFiled).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - UserFail',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiled).type(userData.userFail.username)
    cy.get(selectorsList.passwordFiled).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
  it('Login - PasswordFail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiled).type(userData.passwordFail.username)
    cy.get(selectorsList.passwordFiled).type(userData.passwordFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})