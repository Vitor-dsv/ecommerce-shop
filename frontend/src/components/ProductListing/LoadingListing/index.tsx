import { useCallback, useContext } from "react"
import { UseProductContext } from "../Providers/useProductsProvider"
import { TUseProducts } from "../hooks/useProducts"
import Loading from "@/shared/Loading"

const LoadingListing = () => {
    const { isLoading } = useContext(UseProductContext) as TUseProducts

    const LoadingListing = useCallback(() => (
        <Loading isLaoding={isLoading} />
    ), [isLoading])

    return (
        <LoadingListing />
    )
}

export default LoadingListing