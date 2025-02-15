import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useUpdateSiteTitle = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("site_title");
  }, [t]);

  return null;
};
