describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameFiled:'[name="username"]',
    passwordFiled: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert: '.oxd-alert'

  }
  
  it('Login sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiled).type('Admin')
    cy.get(selectorsList.passwordFiled).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiled).type('Admin')
    cy.get(selectorsList.passwordFiled).type('admin12')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  }
  )
})