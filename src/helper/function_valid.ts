/* eslint-disable implicit-arrow-linebreak */
// eslint-disable-next-line import/prefer-default-export
export const cheackNameFunction = (name: any) => {
  // eslint-disable-next-line no-useless-escape
  // eslint-disable-next-line operator-linebreak
  const regExp =
    // eslint-disable-next-line no-useless-escape
    /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
  return regExp.test(name);
};

export const validateEmail = (email: any) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
