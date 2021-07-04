const TextInput = (props: any) => {
  const { handler, touched, hasError, meta } = props;
  return (
    <div>
      <input placeholder={`Enter ${meta.label}`} {...handler()} />
      <span>{touched && hasError("required") && `${meta.label} is required`}</span>
      {/* <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div> */}
    </div>
  );
};

export default TextInput;
