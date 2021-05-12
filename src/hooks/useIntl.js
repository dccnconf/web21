import { useIntl as useReactIntl } from "react-intl";

export function useIntl() {
  const { formatMessage } = useReactIntl();
  const translate = (id) => formatMessage({ id });

  return { translate };
}
