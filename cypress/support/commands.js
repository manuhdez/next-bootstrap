// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'
// You can now use all of DOM Testing Library's findBy, findAllBy, queryBy and queryAllBy commands off the global cy object.
// See the About queries docs for reference. https://testing-library.com/docs/queries/about

// Note: the get* queries are not supported because for reasonable Cypress tests you need retryability and find* queries
// already support that. query* queries are no longer necessary since v5 and will be removed in v6. find* fully support
// built-in Cypress assertions (removes the only use-case for query*).
