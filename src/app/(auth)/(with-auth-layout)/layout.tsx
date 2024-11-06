export default function AuthLayout({
    children, 
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h2>inner layout</h2>
            {children}
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores consequuntur necessitatibus aliquam odit omnis molestiae cum asperiores a assumenda?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores consequuntur necessitatibus aliquam odit omnis molestiae cum asperiores a assumenda?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores consequuntur necessitatibus aliquam odit omnis molestiae cum asperiores a assumenda?</p>
        </>
    )
}