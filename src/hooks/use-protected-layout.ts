import { AuthService } from "@/services/auth/auth";
import { useUserStore } from "@/stores/user/user.store";
import { ShowErrorMessage } from "@/utils/show-error-message";
import { useRouter } from "next/navigation";
import useSWR from "swr";

export const useProtectedLayout = () => {

    const router = useRouter();

    const setName = useUserStore(store => store.setName)

    const { isValidating } = useSWR(
        "checkSession",
        () => AuthService.checkSession(),
    {
      onSuccess: (res) => {
        const name = res.data.name;

        setName(name)

        if (res.data.timeRemainingMilliseconds > 0) {
          setTimeout(() => {
            ShowErrorMessage("La sesion ya expiro");
            router.push("/login")
          }, res.data.timeRemainingMilliseconds);
        }
      },
    }
  );

  return {
    isValidating,
  };
};
