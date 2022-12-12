import { useEffect } from "react"

interface ImagePreviewProps {
    image: File | null | string
    setPreview: Function
}

export const useImagePreview = ({ image, setPreview }: ImagePreviewProps) => {
    useEffect(() => {
        if (typeof image !== 'string') {
            if (image) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result as string);
                }
                reader.readAsDataURL(image);
            } else {
                setPreview(null);
            }
        } else {
            setPreview(image)
        }
    }, [image])
}