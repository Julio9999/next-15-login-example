import { toast } from "sonner"

export const ShowErrorMessage = (message: string) => {
    toast.error(message)
}