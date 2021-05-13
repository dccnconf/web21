import { useIntl as useReactIntl } from "react-intl";

export function useIntl() {
  const { formatMessage } = useReactIntl();
  const translate = (id, values) => formatMessage({ id }, values);

  return { translate };
}
