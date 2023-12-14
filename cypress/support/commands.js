const resolutions = {
  macbookPro16: { width: 1280, height: 720 }, //macos: 1280 x 720 (macbook pro 16)
  thinkpadE14: { width: 1920, height: 1080 }, //windows:1920 x 1080 (thinkpad t14)
  pixel6: { width: 412, height: 915 }, //celular android: 412 × 915 (pixel 6)
  galaxyTabS7: { width: 800, height: 1280 }, //tablet android: 800 x 1280 (galaxy tab s7)
  iphone13: { width: 390, height: 844 }, //iphone ios: 390 x 844 (iphone 13)
  ipadPro11: { width: 834, height: 1190 }, //ipad ios: 834 x 1190 (ipad pro 11)
};

Cypress.Commands.add('setResolution', (device) => {
  if (resolutions[device]) {
    const { width, height } = resolutions[device];
    cy.viewport(width, height);
  } else {
    throw new Error(`The resolution for the device "${device}" was not found.`);
  }
});

const countryUrls = {
  'united_states': 'https://stg.vtex.com/en-us',
  'brasil': 'https://stg.vtex.com/pt-br',

};

Cypress.Commands.add('visitVTEXStage', (countryCode) => {
  const url = countryUrls[countryCode.toLowerCase()];

  if (url) {
    cy.visit(url);
  } else {
    throw new Error(`The URL for  "${countryCode}" was not found.`);
  }
});


//Footer

Cypress.Commands.add('platformColumnAliases', () => {

  cy.get('#footer-primary > :nth-child(1)').as('PlatformColumnFooter')
  cy.get('#footer-primary > nav:nth-child(1) > ul > li:nth-child(1) > a').as('CommercePlatformItem')
  cy.get('#footer-primary > nav:nth-child(1) > ul > li:nth-child(2) > a').as('OrderManagementSystemItem')
  cy.get('#footer-primary > nav:nth-child(1) > ul > li:nth-child(3) > a').as('MarketplaceItem')
  cy.get('#footer-primary > nav:nth-child(1) > ul > li:nth-child(4) > a').as('VTEXLiveShoppingItem')
  cy.get('#footer-primary > nav:nth-child(1) > ul > li:nth-child(5) > a').as('VTEXSalesAppItem')
  cy.get('#footer-primary > nav:nth-child(1) > ul > li:nth-child(6) > a').as('VTEXPickandPackItem')
  cy.get('#footer-primary > nav:nth-child(1) > ul > li:nth-child(7) > a').as('VTEXPersonalShopperItem')
  cy.get('#footer-primary > nav:nth-child(1) > ul > li:nth-child(8) > a').as('VTEXIOItem')

})

Cypress.Commands.add('solutionColumnAliases', () => {

  cy.get('#footer-primary > :nth-child(2)').as('SolutionsColumnFooter')
  cy.get('#footer-primary > nav:nth-child(2) > ul > li:nth-child(1) > a').as('B2CCommerceItem')
  cy.get('#footer-primary > nav:nth-child(2) > ul > li:nth-child(2) > a').as('B2BCommerceItem')
  cy.get('#footer-primary > nav:nth-child(2) > ul > li:nth-child(3) > a').as('OmnichannelItem')
  cy.get('#footer-primary > nav:nth-child(2) > ul > li:nth-child(4) > a').as('EcommerceMarktplaceItem')
  cy.get('#footer-primary > nav:nth-child(2) > ul > li:nth-child(5) > a').as('HeadlessCommerceItem')

})

Cypress.Commands.add('partnersColumnAliases', () => {

  cy.get('#footer-primary > :nth-child(3)').as('PartnersColumnFooter')
  cy.get('#footer-primary > nav:nth-child(3) > ul > li:nth-child(1) > a').as('FindAPartnerItem')
  cy.get('#footer-primary > nav:nth-child(3) > ul > li:nth-child(2) > a').as('BecomeAPartnerItem')
  cy.get('#footer-primary > nav:nth-child(3) > ul > li:nth-child(3) > a').as('LegowItem')

})

Cypress.Commands.add('resourcersColumnAliases', () => {

  cy.get('#footer-primary > :nth-child(4)').as('ResourcersColumnFooter')
  cy.get('#footer-primary > nav:nth-child(4) > ul > li:nth-child(1) > a').as('ResourceCenterItem')
  cy.get('#footer-primary > nav:nth-child(4) > ul > li:nth-child(2) > a').as('BlogItem')
  cy.get('#footer-primary > nav:nth-child(4) > ul > li:nth-child(3) > a').as('HelpCenterItem')
  cy.get('#footer-primary > nav:nth-child(4) > ul > li:nth-child(4) > a').as('DeveloperPortalItem')

})

Cypress.Commands.add('companyColumnAliases', () => {

  cy.get('#footer-primary > :nth-child(5)').as('CompanyColumnFooter')
  cy.get('#footer-primary > nav:nth-child(5) > ul > li:nth-child(1) > a').as('AboutUsItem')
  cy.get('#footer-primary > nav:nth-child(5) > ul > li:nth-child(2) > a').as('CareersItem')
  cy.get('#footer-primary > nav:nth-child(5) > ul > li:nth-child(3) > a').as('PressRoomItem')
  cy.get('#footer-primary > nav:nth-child(5) > ul > li:nth-child(4) > a').as('InvestorRelationsItem')

})

Cypress.Commands.add('copywriteMenuAliases', () => {

  cy.get('#footer-secondary').as('CopywriteMenu')
  cy.get('#footer-secondary > :nth-child(1)').as('PrivacyPolicyFooter')
  cy.get('#footer-secondary > :nth-child(2)').as('LegalFooter')
  cy.get('#footer-secondary > :nth-child(3)').as('ComplianceFooter')
  cy.get('#footer-secondary > :nth-child(4)').as('SecurityFooter')
  cy.get('#footer-secondary > :nth-child(5)').as('SitemapFooter')

})

Cypress.Commands.add('socialsMenuAliases', () => {

  cy.get('#footer-socials').as('SocialsMenu')
  cy.get('#footer-socials > a:nth-child(1)').as('Facebook')
  cy.get('#footer-socials > a:nth-child(2)').as('Instagram')
  cy.get('#footer-socials > a:nth-child(3)').as('Youtube')
  cy.get('#footer-socials > a:nth-child(4)').as('Linkedin')

})

//Menu

//Pc
Cypress.Commands.add('homeButtonMenuAliases', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > a:nth-child(1)').as('HomeButtonMenu')

})

Cypress.Commands.add('platformTabMouseOver', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > button:nth-child(1)').trigger('mouseover')

})

Cypress.Commands.add('platformTabAliases', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > button:nth-child(1)').as('PlatformTabMenu')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').as('CoreCommerceSubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').as('AddsOnsSubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)').as('ComposableCommerceSubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('CommercePlatformItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').as('OrderManagementSystemItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3)').as('Marketplace&SellerManagementItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('VTEXLiveShoppingItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').as('VTEXSalesAppIem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3)').as('VTEXPickAndPackItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4)').as('VTEXPersonalShopperItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5)').as('VTEXInsuranceItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('VTEXIOItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').as('AppStoreItem')

})

Cypress.Commands.add('solutionsTabMouseOver', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > button:nth-child(1)').trigger('mouseover')

})

Cypress.Commands.add('solutionsTabAliases', () => {


  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > button:nth-child(1)').as('SolutionsTabMenu')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').as('ByUseCaseSubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').as('ByIndustrySubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('B2CCommerceItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').as('B2BCommerceItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3)').as('OmnichannelItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4)').as('EcommerceMarketplaceItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5)').as('HeadlessCommerceItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('ConsumerPackagedGoodsItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').as('GroceryItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3)').as('ManufacturingItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4)').as('FashionItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5)').as('RetailItem')
})

Cypress.Commands.add('customersButtonMenuAlias', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > button:nth-child(1)').as('CustomersButtonMenu')

})

Cypress.Commands.add('partnersTabMouseOver', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > button:nth-child(1)').trigger('mouseover')

})

Cypress.Commands.add('partnersTabAliases', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > button:nth-child(1)').as('PartnersTabMenu')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').as('PartnerSubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('BecomeAPartnerItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').as('FindAPartnerItem')

})

Cypress.Commands.add('resourcesTabMouseOver', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > button:nth-child(1)').trigger('mouseover')

})

Cypress.Commands.add('resourcesTabAliases', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > button:nth-child(1)').as('ResourcesTabMenu')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').as('LearningSubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').as('SupportSubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)').as('ResourcesCenterSubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('ResourceCenterItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').as('BlogItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('HelpCenterItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').as('DeveloperPortalItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('CARDItem')

})

Cypress.Commands.add('companyTabMouseOver', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > button:nth-child(1)').trigger('mouseover')

})

Cypress.Commands.add('companyTabAliases', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > button:nth-child(1)').as('CompanyTabMenu')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').as('CompanySubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').as('ResourcersCenterSubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('AboutUsItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').as('CareersItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3)').as('PressRoomItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4)').as('InvestorRelationsItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').as('CARD1Item')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').as('CARD2Item')

})

Cypress.Commands.add('regionSelectMenuAliases', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)').as('RegionSelectMenuButtom')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').as('RegionSubMenuCategory')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').as('RegionList')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').as('ArgentinaItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').as('AustraliaItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)').as('BrasilItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)').as('ChileItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)').as('Colombia&NorthLATAMItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1)').as('DeutschlandItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)').as('FranceItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(8) > a:nth-child(1)').as('IndiaItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(9) > a:nth-child(1)').as('ItaliaItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(10) > a:nth-child(1)').as('MéxicoItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(11) > a:nth-child(1)').as('PeruItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(12) > a:nth-child(1)').as('PolskaItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(13) > a:nth-child(1)').as('PortugalItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(14) > a:nth-child(1)').as('RomâniaItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(15) > a:nth-child(1)').as('SingaporItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(16) > a:nth-child(1)').as('UnitedKingdomItem')
  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(17) > a:nth-child(1)').as('UnitedStatesItem')

})

Cypress.Commands.add('contactUsButtonMenuAlias', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > button:nth-child(2)').as('ContactUsButtomMenu')

})


//Mobile

Cypress.Commands.add('menuMobileClick', () => {

  cy.get('body > header > nav > div.flex.items-center.gap-2 > div:nth-child(3)').click()

})

Cypress.Commands.add('platformTabAliasesOnlyMobile', () => {

  cy.get('.grid > :nth-child(1)').as('PlatformTabMenu')
  cy.get('.grid > :nth-child(2)').as('CoreCommerceSubMenuCategory')
  cy.get('.grid > :nth-child(3)').as('AddsOnsSubMenuCategory')
  cy.get('.grid > :nth-child(4)').as('ComposableCommerceSubMenuCategory')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(1)').as('CommercePlatformItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(2)').as('OrderManagementSystemItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(3)').as('Marketplace&SellerManagementItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(1)').as('VTEXLiveShoppingItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(2)').as('VTEXSalesAppIem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(3)').as('VTEXPickAndPackItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(4)').as('VTEXPersonalShopperItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(5)').as('VTEXInsuranceItem')
  cy.get(':nth-child(4) > :nth-child(2) > ul > :nth-child(1)').as('VTEXIOItem')
  cy.get(':nth-child(4) > :nth-child(2) > ul > :nth-child(2)').as('AppStoreItem')

})

Cypress.Commands.add('solutionsTabAliasesOnlyMobile', () => {

  cy.get('.grid > :nth-child(1)').as('SolutionsTabMenu')
  cy.get('.grid > :nth-child(2)').as('ByUseCaseSubMenuCategory')
  cy.get('.grid > :nth-child(3)').as('ByIndustrySubMenuCategory')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(1)').as('B2CCommerceItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(2)').as('B2BCommerceItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(3)').as('OmnichannelItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(4)').as('EcommerceMarketplaceItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(5)').as('HeadlessCommerceItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(1)').as('ConsumerPackagedGoodsItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(2)').as('GroceryItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(3)').as('ManufacturingItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(4)').as('FashionItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(5)').as('RetailItem')

})

Cypress.Commands.add('customersButtonMenuAliasOnlyMobile', () => {

  cy.get('.grid > :nth-child(3)').as('CustomersButtonMenu')

})

Cypress.Commands.add('partnersTabAliasesOnlyMobile', () => {

  cy.get('.grid > :nth-child(1)').as('PartnersTabMenu')
  cy.get('.grid > :nth-child(2)').as('PartnerSubMenuCategory')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(1)').as('BecomeAPartnerItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(2)').as('FindAPartnerItem')

})

Cypress.Commands.add('resourcesTabAliasesOnlyMobile', () => {

  cy.get('.grid > :nth-child(1)').as('ResourcesTabMenu')
  cy.get('.grid > :nth-child(2)').as('LearningSubMenuCategory')
  cy.get('.grid > :nth-child(3)').as('SupportSubMenuCategory')
  cy.get('.grid > :nth-child(4)').as('ResourcesCenterSubMenuCategory')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(1)').as('ResourceCenterItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(2)').as('BlogItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(1)').as('HelpCenterItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(2)').as('DeveloperPortalItem')
  cy.get(':nth-child(4) > :nth-child(2) > ul > .p-4').as('CARDItem')

})

Cypress.Commands.add('companyTabAliasesOnlyMobile', () => {

  cy.get('.grid > :nth-child(1)').as('CompanyTabMenu')
  cy.get('.grid > :nth-child(2)').as('CompanySubMenuCategory')
  cy.get('.grid > :nth-child(3)').as('ResourcersCenterSubMenuCategory')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(1)').as('AboutUsItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(2)').as('CareersItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(3)').as('PressRoomItem')
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(4)').as('InvestorRelationsItem')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(1)').as('CARD1Item')
  cy.get(':nth-child(3) > :nth-child(2) > ul > :nth-child(2)').as('CARD2Item')

})

Cypress.Commands.add('regionSelectMenuAliasesOnlyMobile', () => {

  cy.get('header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)').as('RegionSelectMenuButtom')
  cy.get('[data-testid="vi-locale-menu"] > .bg-neutral-lightest').as('RegionSubMenuCategory')
  cy.get('.overflow-y-auto > ul > :nth-child(1)').as('ArgentinaItem')
  cy.get('.overflow-y-auto > ul > :nth-child(2)').as('AustraliaItem')
  cy.get('.overflow-y-auto > ul > :nth-child(3)').as('BrasilItem')
  cy.get('.overflow-y-auto > ul > :nth-child(4)').as('ChileItem')
  cy.get('.overflow-y-auto > ul > :nth-child(5)').as('Colombia&NorthLATAMItem')
  cy.get('.overflow-y-auto > ul > :nth-child(6)').as('DeutschlandItem')
  cy.get('.overflow-y-auto > ul > :nth-child(7)').as('FranceItem')
  cy.get('.overflow-y-auto > ul > :nth-child(8)').as('IndiaItem')
  cy.get('.overflow-y-auto > ul > :nth-child(9)').as('ItaliaItem')
  cy.get('.overflow-y-auto > ul > :nth-child(10)').as('MéxicoItem')
  cy.get('.overflow-y-auto > ul > :nth-child(11)').as('PeruItem')
  cy.get('.overflow-y-auto > ul > :nth-child(12)').as('PolskaItem')
  cy.get('.overflow-y-auto > ul > :nth-child(13)').as('PortugalItem')
  cy.get('.overflow-y-auto > ul > :nth-child(14)').as('RomâniaItem')
  cy.get('.overflow-y-auto > ul > :nth-child(15)').as('SingaporItem')
  cy.get('.overflow-y-auto > ul > :nth-child(16)').as('UnitedKingdomItem')
  cy.get('.overflow-y-auto > ul > :nth-child(17)').as('UnitedStatesItem')

})

Cypress.Commands.add('contactUsButtonMenuAliasOnlyMobile', () => {

  cy.get('.border-t > .w-fit').as('ContactUsButtomMenu')

})

