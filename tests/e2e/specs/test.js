// https://docs.cypress.io/api/introduction/api.html

'default e2e tests' = browser => {
  browser
  .url(process.env.VUE_DEV_SERVER_URL)
  .waitForElementVisible( '#home' , 5000)
  .assert.elementPresent( '.tituloHome' )
  .assert.containsText( 'h1' , 'Lista de Juegos Disponibles' )
  .end()
  }
