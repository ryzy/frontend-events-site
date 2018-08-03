import { AbstractPage, URLs } from './abstract.po';

export class UserPage extends AbstractPage {
  static URL = URLs.User;

  static PAGE_TITLE = 'Your account';
  static LOGIN_FORM_PAGE_TITLE = 'Log in to your account';

  public static visit(url = this.URL) {
    super.visit(url);
  }

  public static loginGoogleButton() {
    return cy.get('.button-login--google');
  }

  public static logoutButton() {
    return cy.get('.button-logout');
  }

  public static loginWithGoogle() {
    this.visit();
    this.loginGoogleButton()
      .should('exist')
      .should('contain', 'Login with Google');
  }

  public static loginWithForm(username: string = '', password: string = '', expectSuccess = true) {
    cy.log('When I visit login form page');
    this.visit(this.URL + '/login');
    cy.contains(this.LOGIN_FORM_PAGE_TITLE);

    cy.log(`And I type credentials for *${username}*`);
    this.typeIntoFormField('username', username);
    this.typeIntoFormField('password', password);
    cy.log('And I submit the form');
    this.button('Log In', false).click();

    if (expectSuccess) {
      this.expectToBeLoggedIn();
    }
  }

  public static visitAndLogOut() {
    cy.log('When I visit user page by clicking on avatar link');
    cy.get('a')
      .get('app-user-avatar')
      .click({ force: true });
    cy.log('And I am presented with User Profile page');
    cy.contains(this.PAGE_TITLE);

    // Just to make sure we're still logged in...
    cy.reload(true);

    cy.log('Then I should be able to click on logout button and log out');
    this.logoutButton().click();
  }
}
