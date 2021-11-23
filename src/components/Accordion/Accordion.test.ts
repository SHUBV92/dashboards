import { screen, render } from '@testing-library/react'
import  Accordion  from './Accordion'


describe("Accordion", () => {
    it("Accordion", () => {

        const props = {
            id:1,
            title:"Crypto Currency ",
            content:"Shubs",
            avatar:true,
            handleOpen:jest.fn(),
            open:true,
        }
        // const { getByText } = render(<Accordion 
        //     id=1
        //     title="Crypto Currency "
        //     content="Shubs",
        //     avatar=true
        //     handleOpen=jest.fn()
        //     open=true
        //     />)
    })
})