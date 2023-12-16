"use client";
import { Button, Callout, Container } from "@radix-ui/themes";
import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema, validatePasswords } from "../validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ErrorPage from "../error";

export type RegistrationFormType = z.infer<typeof registerSchema>;

const RegistrationPage = () => {
  const [passwordMatch, setPasswordMatch] = useState<Boolean>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegistrationFormType> = async (data, e) => {
    e?.preventDefault();
    if (validatePasswords(data) === false) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
      await axios.post("/api/register", data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("name")}
        placeholder="Name"
        className="registration-input"
      />
      {errors.name && <ErrorPage>{errors.name.message}</ErrorPage>}

      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="registration-input"
      />
      {errors.email && <ErrorPage>{errors.email.message}</ErrorPage>}

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="registration-input"
      />
      {errors.password && <ErrorPage>{errors.password.message}</ErrorPage>}

      <input
        {...register("passwordConfirmation")}
        type="password"
        placeholder="Confirm Password"
        className="registration-input"
      />
      {errors.passwordConfirmation && (
        <ErrorPage>{errors.passwordConfirmation.message}</ErrorPage>
      )}

      {passwordMatch === false && (
        <ErrorPage>{"Passwords do not match"}</ErrorPage>
      )}
      
      <Button type="submit" className="w-full p-2 text-white rounded-md">
        Register
      </Button>
    </form>
  );
};

export default RegistrationPage;
