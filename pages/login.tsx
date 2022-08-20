import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createUserInput } from "../schema/user.schema";
import { trpc } from "../utilities/trpc";

const registerPage = () => {
  const { handleSubmit, register } = useForm<createUserInput>();
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["users.request-otp"], {
    onError: (error) => {},
    onSuccess: (data) => {
      setSuccess(true);
      router.push("/login");
    },
  });

  const onSubmit = (data: createUserInput) => {
    mutate(data);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>{error && error.message}</form>
        {success && <h1>Success, check your email</h1>}
        <h1>Login</h1>
        <input type="email" {...register("email")} />
        <input type="text" {...register("name")} />
        <button type="submit">Submit</button>
      </div>
    </>
  );
};

export default registerPage;
