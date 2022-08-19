import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { createUserInput } from "../schema/user.schema";
import { trpc } from "../utilities/trpc";

const registerPage = () => {
  const { handleSubmit, register } = useForm<createUserInput>();

  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["users.register-user"], {
    onError: (error) => {},
    onSuccess: (data) => {
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
        <h1>Register</h1>
        <input type="email" {...register("email")} />
        <input type="text" {...register("name")} />
        <button type="submit">Submit</button>
      </div>
    </>
  );
};

export default registerPage;
