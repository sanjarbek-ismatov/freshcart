import en from "./locales/en/translation.json";
import uz from "./locales/uz/translation.json";
import ru from "./locales/ru/translation.json";

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
