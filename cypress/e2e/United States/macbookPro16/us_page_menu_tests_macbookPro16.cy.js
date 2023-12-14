import 'cypress-mochawesome-reporter/register';
import '../../../support/commands';

describe('United States - Footer tests (Resolution: macbookPro16 1280x720)', () => {

  beforeEach(() => {
      
    cy.setResolution('macbookPro16')
    cy.visitVTEXStage('united_states');
    //alterando no vscode

<<<<<<< HEAD
  })
=======
    //alterando no git

  });
>>>>>>> 8184f25f888f8dfebf7f9c6245d409e42e7d0d5f

  describe('Menu', () => {
    
    //Falta validar redirecionamento pois os itens ainda estão sem links

    describe('Home buttom menu', () => {

      beforeEach(() => {
        
        cy.homeButtonMenuAliases()
        
      })
  
      it('Home buttom validation', () => {
        cy.get('@HomeButtonMenu')
        .should('have.attr', 'href', 'en-us/')
        .should('be.visible')
        .click();
          cy.request({
            method: 'GET',
            url: 'https://stg.vtex.com/en-us'
          }).then((res) => {
            expect(res.status).to.be.equal(200)
          }) 
  
      })

    })

    describe('Platform tab menu', () =>{

      beforeEach(() => {
        
        cy.platformTabMouseOver()
        cy.platformTabAliases()

      })
    
      it('Platform tab validation', () => {
        
        cy.get('@PlatformTabMenu')
        .should('have.text','Platform')
        .should('be.visible')

        cy.get('@CoreCommerceSubMenuCategory')
        .should('be.visible')
        .should('contain.text', 'Core Commerce')
        .find('li')
        .should('have.length', 3) 
        .should('have.text', 'Commerce PlatformA single platform for multiple business modelsOrder Management SystemUnify and optimize your sales and fulfillment operationsMarketplace & Seller ManagementIncrease revenue and profit by launching your own marketplace operation')

        cy.get('@AddsOnsSubMenuCategory') 
        .should('be.visible')
        .should('contain.text', 'Add-ons')
        .find('li')
        .should('have.length', 5) 
        .should('have.text', 'VTEX Live ShoppingStream live and interactive experiences to connect with your customersVTEX Sales AppAll inventories and customers’ data in the hands of your sales teamVTEX Pick and PackReduce logistic costs with an integrated fulfillment solutionVTEX Personal ShopperTake the personalization of in-store services to your digital channelsVTEX InsuranceOffer insurance plans to your customers and create a new revenue stream')
       
        cy.get('@ComposableCommerceSubMenuCategory') 
        .should('be.visible')
        .should('contain.text', 'Composable Commerce')
        .find('li')
        .should('have.length', 2)
        .should('have.text', 'VTEX IOBuild storefronts, apps and integrations with our development platformApp StoreCompose your admin experince with ready-to-use third-party app')
      
      })

      it('Commerce Platform item validation', () => {

        cy.get('@CommercePlatformItem')
        .should('be.visible')
        .should('contains.text', 'Commerce Platform')
        .should('contains.text', 'A single platform for multiple business models')

      })

      it('Order Management System item validation', () => {

        cy.get('@OrderManagementSystemItem')
        .should('be.visible')
        .should('contains.text', 'Order Management System')
        .should('contains.text', 'Unify and optimize your sales and fulfillment operations')

      })

      it('Marketplace & Seller Management item validation', () => {

        cy.get('@Marketplace&SellerManagementItem')
        .should('be.visible')
        .should('contains.text', 'Marketplace & Seller Management')
        .should('contains.text', 'Increase revenue and profit by launching your own marketplace operation')

      })

      it('VTEX Live Shopping item validation', () => {

        cy.get('@VTEXLiveShoppingItem') 
        .should('be.visible')
        .should('contains.text', 'VTEX Live Shopping')
        .should('contains.text', 'Stream live and interactive experiences to connect with your customers')

      })

      it('VTEX Sales App item validation', () => {

        cy.get('@VTEXSalesAppIem') 
        .should('be.visible')
        .should('contains.text', 'VTEX Sales App')
        .should('contains.text', 'All inventories and customers’ data in the hands of your sales team')

      })

      it('VTEX Pick and Pack item validation', () => {

        cy.get('@VTEXPickAndPackItem') 
        .should('be.visible')
        .should('contains.text', 'VTEX Pick and Pack')
        .should('contains.text', 'Reduce logistic costs with an integrated fulfillment solution')

      })

      it('VTEX Personal Shopper item validation', () => {

        cy.get('@VTEXPersonalShopperItem') 
        .should('be.visible')
        .should('contains.text', 'VTEX Personal Shopper')
        .should('contains.text', 'Take the personalization of in-store services to your digital channels')

      })

      it('VTEX Insurance item validation', () => {

        cy.get('@VTEXInsuranceItem') 
        .should('be.visible')
        .should('contains.text', 'VTEX Insurance')
        .should('contains.text', 'Offer insurance plans to your customers and create a new revenue stream')

      })

      it('VTEX IO item validation', () => {

        cy.get('@VTEXIOItem') 
        .should('be.visible')
        .should('contains.text', 'VTEX IO')
        .should('contains.text', 'Build storefronts, apps and integrations with our development platform')

      })

      it('App Store item validation', () => {

        cy.get('@AppStoreItem') 
        .should('be.visible')
        .should('contains.text', 'App Store')
        .should('contains.text', 'Compose your admin experince with ready-to-use third-party app')

      })

    
    })

    describe('Solutions tab menu', () =>{
      
      beforeEach(() => {
        
        cy.solutionsTabMouseOver()
        cy.solutionsTabAliases()
        
      })
    
      it('Solutions tab validation', () => {
        
        cy.get('@SolutionsTabMenu')
        .should('have.text','Solutions')
        .should('be.visible')

        cy.get('@ByUseCaseSubMenuCategory')
        .should('be.visible')
        .should('contain.text', 'By use case')
        .find('li')
        .should('have.length', 5)
        .should('have.text', 'B2C commerceExpand the possibilities of your B2C Commerce with marketplace, Live Shopping and other native solutionsB2B commerceBuild an ecommerce architecture tailored for your B2B businessOmnichannelGlobal inventory visibility and multichannel integrations for a true omnichannel operationEcommerce MarketplaceNative marketplace solution and unified OMS to accelerate your time-to-revenueHeadless CommerceEmbrace a headless and composable approach for a more efficient and scalable tech stack')

        cy.get('@ByIndustrySubMenuCategory') 
        .should('be.visible')
        .should('contain.text', 'By industry')
        .find('li')
        .should('have.length', 5)
        .should('have.text', 'Consumer Packaged GoodsPlataforma de Comércio Digital Plataforma de Comércio DigitalGroceryOfereça experiências melhores com canais conectados e explore novas fontes de receitaManufacturingPlataforma de Comércio Digital Plataforma de Comércio DigitalFashionPlataforma de Comércio Digital Plataforma de Comércio DigitalRetailPlataforma de Comércio Digital Plataforma de Comércio Digital')
      
      })

      it('Commerce Platform item validation', () => {

        cy.get('@B2CCommerceItem')
        .should('be.visible')
        .should('contains.text', 'B2C commerce')
        .should('contains.text', 'Expand the possibilities of your B2C Commerce with marketplace, Live Shopping and other native solutions')

      })

      it('B2B commerce item validation', () => {

        cy.get('@B2BCommerceItem')
        .should('be.visible')
        .should('contains.text', 'B2B commerce')
        .should('contains.text', 'Build an ecommerce architecture tailored for your B2B business')

      })

      it('Omnichannel item validation', () => {

        cy.get('@OmnichannelItem')
        .should('be.visible')
        .should('contains.text', 'Omnichannel')
        .should('contains.text', 'Global inventory visibility and multichannel integrations for a true omnichannel operation')

      })

      it('Ecommerce Marketplace item validation', () => {

        cy.get('@EcommerceMarketplaceItem')
        .should('be.visible')
        .should('contains.text', 'Ecommerce Marketplace')
        .should('contains.text', 'Native marketplace solution and unified OMS to accelerate your time-to-revenue')

      })

      it('Headless Commerce item validation', () => {

        cy.get('@HeadlessCommerceItem')
        .should('be.visible')
        .should('contains.text', 'Headless Commerce')
        .should('contains.text', 'Embrace a headless and composable approach for a more efficient and scalable tech stack')

      })

      it('Consumer Packaged Goods item validation', () => {

        cy.get('@ConsumerPackagedGoodsItem')
        .should('be.visible')
        .should('contains.text', 'Consumer Packaged Goods')
        .should('contains.text', 'Plataforma de Comércio Digital Plataforma de Comércio Digital')

      })

      it('Grocery item validation', () => {

        cy.get('@GroceryItem')
        .should('be.visible')
        .should('contains.text', 'Grocery')
        .should('contains.text', 'Ofereça experiências melhores com canais conectados e explore novas fontes de receita')

      })

      it('Manufacturing item validation', () => {

        cy.get('@ManufacturingItem')
        .should('be.visible')
        .should('contains.text', 'Manufacturing')
        .should('contains.text', 'Plataforma de Comércio Digital Plataforma de Comércio Digital')

      })

      it('Fashion item validation', () => {

        cy.get('@FashionItem')
        .should('be.visible')
        .should('contains.text', 'Fashion')
        .should('contains.text', 'Plataforma de Comércio Digital Plataforma de Comércio Digital')

      })

      
      it('Retail item validation', () => {

        cy.get('@RetailItem')
        .should('be.visible')
        .should('contains.text', 'Retail')
        .should('contains.text', 'Plataforma de Comércio Digital Plataforma de Comércio Digital')

      })
  
    
    })

    describe('Customers button menu',() => {

      beforeEach(() => {
        
        cy.customersButtonMenuAlias()
        
      })
      
      it('Customers button validation', () => {
        
        cy.get('@CustomersButtonMenu')
        .should('have.text','Customers')
        .should('be.visible')
  
      })

    })

    describe('Partners tab menu', () =>{
      
      beforeEach(() => {
        
        cy.partnersTabMouseOver()
        cy.partnersTabAliases()
        
      })
    
      it('Partners tab validation', () => {
        
        cy.get('@PartnersTabMenu')
        .should('have.text','Partners')
        .should('be.visible')

        cy.get('@PartnerSubMenuCategory')
        .should('be.visible')
        .should('contain.text', 'Partner')
        .find('li')
        .should('have.length', 2)
        .should('have.text', 'Become a partnerFind a partner')
      
      })

      it('Become a partner item validation', () => {

        cy.get('@BecomeAPartnerItem')
        .should('be.visible')
        .should('contains.text', 'Become a partner')

      })

      it('Find a partner item validation', () => {

        cy.get('@FindAPartnerItem')
        .should('be.visible')
        .should('contains.text', 'Find a partner')

      })
    
    })

    describe('Resources tab menu', () =>{
      
      beforeEach(() => {
        
        cy.resourcesTabMouseOver()
        cy.resourcesTabAliases()
        
      })
    
      it('Resources tab validation', () => {
        
        cy.get('@ResourcesTabMenu')
        .should('have.text','Resources')
        .should('be.visible')

        cy.get('@LearningSubMenuCategory')
        .should('be.visible')
        .should('contain.text', 'Learning')
        .find('li')
        .should('have.length', 2)
        .should('have.text', 'Resource centerFrom ebooks to videos, find great content about business and commerceBlog')
        
        cy.get('@SupportSubMenuCategory')
        .should('be.visible')
        .should('contain.text', 'Support')
        .find('li')
        .should('have.length', 2)
        .should('have.text', 'Help CenterFind guides, FAQs, articles and tutorials about how the platform worksDeveloper PortalAll the resources you need to develop first-class commerce experiences with VTEX')

        cy.get('@ResourcesCenterSubMenuCategory')
        .should('be.visible')
        .should('contain.text', 'Resources center')
        .find('li')
        .should('have.length', 1)
        .should('have.text', 'CARD')
        
      })

      it('Resource center item validation', () => {

        cy.get('@ResourceCenterItem')
        .should('be.visible')
        .should('contains.text', 'Resource center')
        .should('contains.text', 'From ebooks to videos, find great content about business and commerce')

      })

      it('Blog item validation', () => {

        cy.get('@BlogItem')
        .should('be.visible')
        .should('contains.text', 'Blog')

      })

      it('Help Center item validation', () => {

        cy.get('@HelpCenterItem')
        .should('be.visible')
        .should('contains.text', 'Help Center')
        .should('contains.text', 'Find guides, FAQs, articles and tutorials about how the platform works')

      })

      it('Developer Portal item validation', () => {

        cy.get('@DeveloperPortalItem')
        .should('be.visible')
        .should('contains.text', 'Developer Portal')
        .should('contains.text', 'All the resources you need to develop first-class commerce experiences with VTEX')

      })

      it('CARD item validation', () => {

        cy.get('@CARDItem')
        .should('be.visible')
        .should('contains.text', 'CARD')

      })
    
    })

    describe('Company tab menu', () =>{
      
      beforeEach(() => {
        
        cy.companyTabMouseOver()
        cy.companyTabAliases()
        
      })
    
      it('Company tab validation', () => {
        
        cy.get('@CompanyTabMenu')
        .should('have.text','Company')
        .should('be.visible')

        cy.get('@CompanySubMenuCategory')
        .should('be.visible')
        .should('contain.text', 'Company')
        .find('li')
        .should('have.length', 4)
        .should('have.text', 'About usKnow how VTEX can help you get smart about your digital commerce investmentsCareersPress roomInvestor relationsGet to know our numbers and financial reports')
        
        cy.get('@ResourcersCenterSubMenuCategory')
        .should('be.visible')
        .should('contain.text', 'Resourcers center')
        .find('li')
        .should('have.length', 2)
        .should('have.text', 'CARD 1CARD 2')
        
      })

      it('About us item validation', () => {

        cy.get('@AboutUsItem')
        .should('be.visible')
        .should('contains.text', 'About us')
        .should('contains.text', 'Know how VTEX can help you get smart about your digital commerce investments')

      })

      it('Careers item validation', () => {

        cy.get('@CareersItem')
        .should('be.visible')
        .should('contains.text', 'Careers')

      })

      it('Press Room item validation', () => {

        cy.get('@PressRoomItem')
        .should('be.visible')
        .should('contains.text', 'Press room')

      })

      it('Investor Relations item validation', () => {

        cy.get('@InvestorRelationsItem')
        .should('be.visible')
        .should('contains.text', 'Investor relations')
        .should('contains.text', 'Get to know our numbers and financial reports')

      })

      it('CARD 1 item validation', () => {

        cy.get('@CARD1Item')
        .should('be.visible')
        .should('contains.text', 'CARD 1')

      })

      it('CARD 2 item validation', () => {

        cy.get('@CARD2Item')
        .should('be.visible')
        .should('contains.text', 'CARD 2')

      })
    
    })

    describe('Region select menu',() => {

      beforeEach(() => {
        
        cy.regionSelectMenuAliases()
        
      })

      it('Region select menu validation', () => {

        cy.get('@RegionSelectMenuButtom')
        .should('be.visible')
        .click()

        cy.get('@RegionSubMenuCategory')
        .should('be.visible')
        .should('contain.text', 'Region')
        .find('li')
        .should('have.length', 17)
        .should('have.text', 'ArgentinaAustraliaBrasilChileColombia & North LATAMDeutschlandFranceIndiaItaliaMéxicoPeruPolskaPortugalRomâniaSingaporeUnited KingdomUnited States')
        
        cy.get('@ArgentinaItem')
        .should('be.visible')
        .should('have.attr', 'href', '/es-ar')

        cy.get('@AustraliaItem')
        .should('be.visible')
        .should('have.attr', 'href', '/en-au')
        
        cy.get('@BrasilItem')
        .should('be.visible')
        .should('have.attr', 'href', '/pt-br')

        cy.get('@ChileItem')
        .should('be.visible')
        .should('have.attr', 'href', '/es-cl')

        cy.get('@Colombia&NorthLATAMItem')
        .should('be.visible')
        .should('have.attr', 'href', '/es-co')

        cy.get('@DeutschlandItem')
        .should('be.visible')
        .should('have.attr', 'href', '/de-de')

        cy.get('@RegionList').scrollTo(0, 350)

        cy.get('@FranceItem')
        .should('be.visible')
        .should('have.attr', 'href', '/fr-fr')

        cy.get('@IndiaItem')
        .should('be.visible')
        .should('have.attr', 'href', '/en-in')
        
        cy.get('@ItaliaItem')
        .should('be.visible')
        .should('have.attr', 'href', '/it-it')
        
        cy.get('@MéxicoItem')
        .should('be.visible')
        .should('have.attr', 'href', '/es-mx')
        
        cy.get('@PeruItem')
        .should('be.visible')
        .should('have.attr', 'href', '/es-pe')

        cy.get('@PolskaItem')
        .should('be.visible')
        .should('have.attr', 'href', '/pl-pl')

        cy.get('@RegionList').scrollTo(0, 700)
        
        cy.get('@PortugalItem')
        .should('be.visible')
        .should('have.attr', 'href', '/pt-pt')
        
        cy.get('@RomâniaItem')
        .should('be.visible')
        .should('have.attr', 'href', '/ro-ro')
        
        cy.get('@SingaporItem')
        .should('be.visible')
        .should('have.attr', 'href', '/en-sg')
        
        cy.get('@UnitedKingdomItem')
        .should('be.visible')
        .should('have.attr', 'href', '/en-uk')

        cy.get('@UnitedStatesItem')
        .should('be.visible')
        .should('have.attr', 'href', '/en-us')

      })

    })

    describe('Contact us button menu',() => {

      beforeEach(() => {
        
        cy.contactUsButtonMenuAlias()
        
      })
      
      it('Contact us button validation', () => {
        
        cy.get('@ContactUsButtomMenu')
        .should('have.text','Contact us')
        .should('be.visible')
  
      })

    })


  })    

})

