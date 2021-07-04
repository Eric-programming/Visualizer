import { FormBuilder, FieldGroup, FieldControl, Validators } from "react-reactive-form";
import TextInput from "../../Form/TextInput";
const GraphForm = () => {
  const loginForm = FormBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    rememberMe: false,
  });
  const handleReset = () => {
    loginForm.reset();
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form values", loginForm.value);
  };
  return (
    <FieldGroup
      control={loginForm}
      render={({ get, invalid }) => (
        <form onSubmit={handleSubmit}>
          <FieldControl name="username" render={TextInput} meta={{ label: "Username" }} />

          <FieldControl name="password" render={TextInput} meta={{ label: "Password" }} />

          <FieldControl
            name="rememberMe"
            render={({ handler }) => (
              <div>
                <input {...handler("checkbox")} />
              </div>
            )}
          />
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" disabled={invalid}>
            Submit
          </button>
        </form>
      )}
    />
  );
};

export default GraphForm;
