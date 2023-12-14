import 'cypress-mochawesome-reporter/register';
import '../../../support/commands';

describe('United States - Footer tests (Resolution: pixel6 412x915)', () => {

  beforeEach(() => {
    
    cy.setResolution('pixel6')    
    cy.visitVTEXStage('united_states');

  })

  describe('Footer Primary', () => {

    describe('Platform column', () => {

      beforeEach(() => {

        cy.platformColumnAliases()
        cy.get('@PlatformColumnFooter').click()


      })
    
      it('Platform column validation', () => {
        cy.get('@PlatformColumnFooter')
        .should('contain.text', 'Platform')
        .should('be.visible')
        .find('li')
        .should('have.length', 8)
        .should('have.text', 'Commerce PlatformOrder Management SystemMarketplaceVTEX Live ShoppingVTEX Sales AppVTEX Pick and PackVTEX Personal ShopperVTEX IO')
      
      })

      it('Commerce Platform item validation', () => {
        cy.get('@CommercePlatformItem')
        .should('contain.text', 'Commerce Platform')
        .should('be.visible')
        .click()
        cy.request({
          method: 'GET',
          url: 'https://www.google.com/'
        }).then((res) => {
          expect(res.status).to.be.equal(200)
        })   
     
      })


      it('Order Management System item validation', () => {
        cy.get('@OrderManagementSystemItem')
        .should('have.text', 'Order Management System')
        .should('be.visible')
        .click()
        //falta validação do redirecionamento

      })

      it('Marketplace item validation', () => {
        cy.get('@MarketplaceItem')
        .should('have.text', 'Marketplace')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('VTEX Live Shopping item validation', () => {
        cy.get('@VTEXLiveShoppingItem')
        .should('have.text', 'VTEX Live Shopping')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('VTEX Sales App item validation', () => {
        cy.get('@VTEXSalesAppItem')
        .should('have.text', 'VTEX Sales App')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('VTEX Pick and Pack item validation', () => {
        cy.get('@VTEXPickandPackItem')
        .should('have.text', 'VTEX Pick and Pack')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('VTEX Personal Shopper item validation', () => {
        cy.get('@VTEXPersonalShopperItem')
        .should('have.text', 'VTEX Personal Shopper')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('VTEX IO item validation', () => {
        cy.get('@VTEXIOItem')
        .should('have.text', 'VTEX IO')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

  
    })

    describe('Solution column', () =>{

      beforeEach(() => {

        cy.solutionColumnAliases()
        cy.get('@SolutionsColumnFooter').click()


      })
    
      it('Solution column validation', () => {
        cy.get('@SolutionsColumnFooter')
        .should('contain.text', 'Solutions')
        .should('be.visible')
        .find('li')
        .should('have.length', 5)
        .should('have.text', 'B2C CommerceB2B CommerceOmnichannelEcommerce MarktplaceHeadless Commerce')
      })

      it('B2C Commerce item validation', () => {
        cy.get('@B2CCommerceItem')
        .should('have.text', 'B2C Commerce')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento

      })

      it('B2B Commerce item validation', () => {
        cy.get('@B2BCommerceItem')
        .should('have.text', 'B2B Commerce')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('Omnichannel item validation', () => {
        cy.get('@OmnichannelItem')
        .should('have.text', 'Omnichannel')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('Headless Commerce item validation', () => {
        cy.get('@HeadlessCommerceItem')
        .should('have.text', 'Headless Commerce')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })
  
    })

    describe('Partners column', () =>{

      beforeEach(() => {

        cy.partnersColumnAliases()
        cy.get('@PartnersColumnFooter').click()


      })
    
      it('Partners column validation', () => {
        cy.get('@PartnersColumnFooter')
        .should('contain.text', 'Partners')
        .should('be.visible')
        .find('li')
        .should('have.length', 3)
        .should('have.text', 'Find a partnerBecome a partnerLegow')
      })

      it('Find a Partner item validation', () => {
        cy.get('@FindAPartnerItem')
        .should('have.text', 'Find a partner')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento

      })

      it('Become a partner item validation', () => {
        cy.get('@BecomeAPartnerItem')
        .should('have.text', 'Become a partner')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('Legow item validation', () => {
        cy.get('@LegowItem')
        .should('have.text', 'Legow')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })
  
    })

    describe('Resourcers column', () =>{

      beforeEach(() => {

        cy.resourcersColumnAliases()
        cy.get('@ResourcersColumnFooter').click()


      })
    
      it('Resourcers column validation', () => {
        cy.get('@ResourcersColumnFooter')
        .should('contain.text', 'Resourcers')
        .should('be.visible')
        .find('li')
        .should('have.length', 4)
        .should('have.text', 'Resource centerBlogHelp CenterDeveloper Portal')
      })

      it('Resource Center item validation', () => {
        cy.get('@ResourceCenterItem')
        .should('have.text', 'Resource center')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento

      })

      it('Blog item validation', () => {
        cy.get('@BlogItem')
        .should('have.text', 'Blog')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('Help Center item validation', () => {
        cy.get('@HelpCenterItem')
        .should('have.text', 'Help Center')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('Help Center item validation', () => {
        cy.get('@DeveloperPortalItem')
        .should('have.text', 'Developer Portal')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })
  
    })

    describe('Company column', () =>{

      beforeEach(() => {

        cy.companyColumnAliases()
        cy.get('@CompanyColumnFooter').click()


      })
    
      it('Company column validation', () => {
        cy.get('@CompanyColumnFooter')
        .should('contain.text', 'Company')
        .should('be.visible')
        .find('li')
        .should('have.length', 4)
        .should('have.text', 'About usCareersPress roomInvestor relations')

      })

      it('About us item validation', () => {
        cy.get('@AboutUsItem')
        .should('contain.text', 'About us')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento

      })

      it('Careers item validation', () => {
        cy.get('@CareersItem')
        .contains('Careers')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('Press room item validation', () => {
        cy.get('@PressRoomItem')
        .should('contain.text', 'Press room')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })

      it('Investor relations item validation', () => {
        cy.get('@InvestorRelationsItem')
        .contains('Investor relations')
        .should('be.visible')
        .click()

        //falta validação do redirecionamento
        
      })
  
    })

  })

  describe('Footer Secondary', () => {

      beforeEach(() => {

        cy.copywriteMenuAliases()

      })
    
      it('Copywrite menu validation', () => {
        cy.get('@CopywriteMenu')
        .should('be.visible')

      })

      it('Privacy Policy validation', () => {
        cy.get('@PrivacyPolicyFooter')
        .should('contain.text', 'Privacy Policy')
        .should('be.visible')
        cy.get('@PrivacyPolicyFooter')
        .click()
      })

      it('Legal validation', () => {
        cy.get('@LegalFooter')
        .should('contain.text', 'Legal')
        .should('be.visible')
        .click()
      })

      it('Compliance validation', () => {
        cy.get('@ComplianceFooter')
        .should('contain.text', 'Compliance')
        .should('be.visible')
        .click()
      })

      it('Security validation', () => {
        cy.get('@SecurityFooter')
        .should('contain.text', 'Security')
        .should('be.visible')
        .click()
      })

      it('Sitemap validation', () => {
        cy.get('@SitemapFooter')
        .should('contain.text', 'Sitemap')
        .should('be.visible')
        .click()
      })

  })

  describe('Footer Socials', () => {

    beforeEach(() => {

      cy.socialsMenuAliases()

    })
  
    it('Socials menu validation', () => {
      cy.get('@SocialsMenu')
      .should('be.visible')

    })

    it('Facebook validation', () => {
      cy.get('@Facebook')
        .should('be.visible')
        .should('have.attr', 'href', 'https://facebook.com/');
    })

    it('Instagram validation', () => {
      cy.get('@Instagram')
        .should('be.visible')
        .should('have.attr', 'href', 'https://www.instagram.com/');
    })

    it('Youtube validation', () => {
      cy.get('@Youtube')
        .should('be.visible')
        .should('have.attr', 'href', 'https://www.youtube.com/');
    });

    it('Linkedin validation', () => {
      cy.get('@Linkedin')
        .should('be.visible')
        .should('have.attr', 'href', 'https://linkedin.com/');
    });

  })

})

