import uz from "./locales/uz/translation.json";
import en from "./locales/uz/translation.json";
import ru from "./locales/uz/translation.json";

import { usePathname } from "next/navigation";

export function getTranslation(lng: string) {
  switch (lng) {
    case "en":
      return en;
    case "uz":
      return uz;
    case "ru":
      return ru;
    default:
      return uz;
  }
}

export function useTranslation() {
  const pathname = usePathname();
  return getTranslation(pathname.split("/")[1]);
}
