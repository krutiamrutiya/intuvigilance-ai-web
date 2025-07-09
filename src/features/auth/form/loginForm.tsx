import { useFormik } from "formik";
import { CustomButton, CustomInput } from "@components/index";
import type { LoginValueProps } from "@features/auth/types";
import { loginSchema } from "@features/auth/schemas/loginSchema";
import { toFormikValidationSchema } from "zod-formik-adapter";
import useLogin from "@features/auth/hooks/useLogin";

const LoginForm = () => {
  const [{ isLoading }, { handleLogin }] = useLogin();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values: LoginValueProps) => handleLogin?.(values),
      validationSchema: toFormikValidationSchema(loginSchema),
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-24">
          <CustomInput
            required
            label={"Email"}
            placeholder={"Enter Your Email"}
            name={"email"}
            value={values?.email}
            error={typeof errors?.email === "string" ? errors.email : undefined}
            showError={!!(errors?.email && touched?.email)}
            onChange={handleChange}
            onBlur={handleBlur}
            size="large"
          />
        </div>
        <div className="mb-24">
          <CustomInput
            required
            inputType="password"
            label={"Password"}
            name={"password"}
            placeholder={"Enter Your Password"}
            value={values?.password}
            error={errors?.password}
            showError={errors?.password && touched?.password}
            onChange={handleChange}
            onBlur={handleBlur}
            size="large"
          />
        </div>
        <CustomButton
          buttonText={"Login"}
          htmlType={"submit"}
          loading={isLoading}
          type="primary"
          className="w-100"
          size="large"
        />
      </form>
    </>
  );
};

export default LoginForm;
