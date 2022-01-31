import { buttonsData } from "components/containers/navigation/utils/buttons-data";

export const urlToIndexConverter = (pathname: string) => {
  const foundId = buttonsData().find((btn) => btn.link === pathname)?.id ?? 0;
  return foundId;
};
