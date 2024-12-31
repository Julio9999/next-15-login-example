import { AuthService } from "@/services/auth/auth"
import { useUserStore } from "@/stores/user/user.store";
import router from "next/router"
import useSWRMutation from "swr/mutation";

export const useNavbar = () => {

    const name = useUserStore(store => store.name);

    const { trigger, isMutating } = useSWRMutation(
        'logout',
        async () => AuthService.logout(),
        {
            onSuccess: () => {
                router.push('/login')
            }
        }
    )

    const onLogout = async() => {
        await trigger().catch(() => {})
    }

    return {
        onLogout,
        isMutating,
        name
    }
}