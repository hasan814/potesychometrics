import { useState, ChangeEvent, FormEvent } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { FormData } from "../../types/Auth";

import toast from "react-hot-toast";

const SignUpPage: React.FC = () => {
  // ============== Navigate ====================
  const navigate = useNavigate();

  // ============== State ====================
  const [formData, setFormData] = useState<FormData>({});
  const [loading, setIsLoading] = useState(false);

  // ============== Change Function ====================
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value.trim() }));
  };

  // ============== Submit Function ====================
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        toast.success("Sign up Successfully");
        navigate("/sign-in");
      } else {
        toast.error(responseData.message);
        setIsLoading(false);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occured";
      toast.error(`Signup error: ${errorMessage}`);
      setIsLoading(false);
    }
  };

  // ============== Rendering ====================
  return (
    <div className="min-h-screen mt-20">
      <div className="gap-5 flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        <div className="flex-1">
          <Link
            to="/"
            className="text-4xl sm:text-xl font-bold dark:text-white"
          >
            <span className="rounded-lg px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              Potepsychometrics
            </span>
          </Link>
          <p className="text-sm mt-5">
            Potepsycholometrics is the study of measuring hidden psychological
            potential through advanced psychometric methods.
          </p>
        </div>
        <div className="flex-1">
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <div>
              <Label value="Your Name :" />
              <TextInput
                type="text"
                id="username"
                placeholder="Username"
                onChange={changeHandler}
              />
            </div>
            <div>
              <Label value="Your Email :" />
              <TextInput
                type="email"
                id="email"
                onChange={changeHandler}
                placeholder="name@comapny.com"
              />
            </div>
            <div>
              <Label value="Your Password :" />
              <TextInput
                id="password"
                type="password"
                placeholder="Password"
                onChange={changeHandler}
              />
            </div>
            {loading ? (
              <BeatLoader color="#1cd50f" className="mx-auto" />
            ) : (
              <Button gradientDuoTone="purpleToPink" type="submit">
                Sign Up
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
