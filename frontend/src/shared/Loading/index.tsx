interface Props {
    isLaoding: boolean
    className?: string
}

const Loading = ({ isLaoding, className }: Props) => (
    <>
        {isLaoding && (
            <div className={`animate-spin rounded-full border-4 border-solid border-t-orange-600 border-t-4 h-20 w-20 z-auto absolute block top-1/2 left-1/2 ${className}`}></div>
        )}
    </>
)

export default Loading