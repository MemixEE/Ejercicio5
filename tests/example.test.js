import HomePage from "../pages/HomePage";

describe('Home',()=>{
    let homePage
    beforeAll(async () =>{
        homePage = new HomePage();

    })
    it("homepage should be displayed", async () =>{
        await homePage.visit();
    })
    it("navbar should be displayed", async () => {
        await homePage.isNavBarDisplayed();
    })


})