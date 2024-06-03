import { Suspense } from "react"
const LazyLoading = (props) => {
    const { fallBackComponent, mainComponent } = props 
    const component = lazy(() => mainComponent);
    return (
        <section>
            <Suspense fallback={<fallBackComponent/>}>
                <component/>
            </Suspense>
        </section>
    )
}

export default LazyLoading;