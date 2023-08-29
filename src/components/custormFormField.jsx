export const InputField = ({
  inputIcon,
  placeHolder,
  name,
  type,
  errors,
  register,
  labelTitle,
  selectOption,
  selectArrayOption,
  defaultValue,
  subTitle,
  labelStyle,
  style,
}) => {
  switch (type) {
    case 'radio':
      return (
        <div className="flex mb-3 items-center">
          <input
            className={style}
            type={type}
            name={name}
            placeholder={placeHolder}
            {...register(`${name}`)}
          />
          <label className={labelStyle} htmlFor={name}>
            {labelTitle}
          </label>
        </div>
      );
      break;

    case 'checkbox':
      return (
        <div className="flex mb-3 items-center">
          <input
            className={style}
            type={type}
            name={name}
            placeholder={placeHolder}
            {...register(`${name}`)}
          />
          <label className={labelStyle} htmlFor={name}>
            {labelTitle}
          </label>
        </div>
      );
      break;

    case 'select':
      return (
        <div className="flex flex-col mb-3">
          <label className={labelStyle} htmlFor={name}>
            {labelTitle}
          </label>
          {subTitle && <h6 className="text-xs text-start my-1">{subTitle}</h6>}
          <select
            className={style}
            name={name}
            defaultValue={defaultValue ? defaultValue : null}
            {...register(`${name}`, {
              required: `${labelTitle ? labelTitle : name} field is invalid`,
            })}
          >
            {selectArrayOption &&
              selectArrayOption.map((option, index) => {
                return (
                  <option value={option} key={index}>
                    {option}
                  </option>
                );
              })}
            {selectOption && (
              <option value={selectOption}>{selectOption}</option>
            )}
          </select>
          {errors && <p className="text-red-500 ">{errors.message}</p>}
        </div>
      );
      break;
    case 'password':
      return (
        <div className="flex flex-col mb-2 relative">
          <label className={labelStyle} htmlFor={name}>
            {labelTitle}
          </label>
          <input
            className={style}
            type={type}
            name={name}
            defaultValue={defaultValue ? defaultValue : null}
            placeholder={placeHolder}
            {...register(`${name}`, {
              required: `${labelTitle ? labelTitle : name} field is invalid`,
              minLength: {
                value: 8,
                message: 'password must not be less than 8 characters',
              },
            })}
          />
          {errors && <p className="text-red-500 ">{errors.message}</p>}
          {inputIcon && (
            <img src={inputIcon} className="icon" alt="object not found" />
          )}
        </div>
      );
      break;
    default:
      return (
        <div className="flex flex-col mb-2 relative">
          <label className={labelStyle} htmlFor={name}>
            {labelTitle}
          </label>
          {subTitle && <h6 className="text-xs text-start my-1">{subTitle}</h6>}
          <input
            className={style}
            type={type}
            name={name}
            defaultValue={defaultValue ? defaultValue : null}
            placeholder={placeHolder}
            {...register(`${name}`, {
              required: `${labelTitle ? labelTitle : name} field is invalid`,
            })}
          />
          {errors && <p className="text-red-500 ">{errors.message}</p>}
          {inputIcon && (
            <img src={inputIcon} className="icon" alt="object not found" />
          )}
        </div>
      );
  }
};
