export default function ProductDetailsLayout({
    children, // we are giving a children prop
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h2>Featured Products</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores consequuntur necessitatibus aliquam odit omnis molestiae cum asperiores a assumenda?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores consequuntur necessitatibus aliquam odit omnis molestiae cum asperiores a assumenda?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores consequuntur necessitatibus aliquam odit omnis molestiae cum asperiores a assumenda?</p>
        </>
    )
}