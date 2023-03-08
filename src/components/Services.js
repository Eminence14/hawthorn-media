import { useLayoutEffect } from "react"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"

const Services = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="tablet">
            <AccNavbar />
            <di style={{ padding: '5em 2em', backgroundColor: '#0001' }}>
                Services
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque modi dolor, ad exercitationem recusandae non ullam unde, eligendi nesciunt natus rem odit laudantium? Consectetur dignissimos possimus quasi tempora in ut aperiam minus exercitationem molestias inventore unde incidunt quia voluptatem non, aliquam perspiciatis? Mollitia ipsa commodi ipsum unde cumque pariatur alias maiores, nisi quibusdam, cupiditate debitis hic. Autem voluptatibus provident odit obcaecati minima, vitae optio a? Vel quas iste dolor ratione eveniet harum dolores eaque obcaecati. Accusantium dolorum repellat perferendis ipsum optio est reprehenderit eveniet quia accusamus unde. Ipsum earum reprehenderit sapiente esse, adipisci laborum? Blanditiis similique quo eius ad veniam qui libero enim minus autem quae dolores possimus architecto, ipsam doloremque consequuntur, unde, neque sequi? Itaque dolorum id at corporis, sapiente, molestias magnam tenetur enim sint tempore modi natus porro asperiores officiis accusamus quaerat deleniti minus beatae! Molestiae consequatur hic ipsa quibusdam vitae ab enim doloremque amet facilis incidunt. Architecto, unde maxime cumque quibusdam quia enim est beatae at repellendus esse fuga excepturi. Error odio fuga cumque nulla possimus illum reprehenderit. Quasi numquam at illo perferendis blanditiis totam pariatur, dolore exercitationem ex rerum nam magnam recusandae fugiat explicabo ratione! Nihil temporibus quos fugiat atque ut enim esse alias sequi!
            </di>
            <Footer />
        </div>
    )
}

export default Services