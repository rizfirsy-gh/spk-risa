"use client";
import React, { useEffect } from "react";

import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { getToken, login } from "./app-utils/auth";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  username: z.string().min(4).max(50),
  password: z.string().min(5).max(50),
});

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const token = getToken();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    const res = await login(value);

    console.log("res", res.status);

    if (res.status !== 200) {
      toast({
        variant: "destructive",
        description: res.message,
      });
    }
    router.push("/redirect/");
  }

  if (token) {
    router.push("/dashboard");
  }

  return (
    <main className="grid grid-cols-2 min-h-screen">
      <section className="p-8 flex flex-col justify-between bg-zinc-200 dark:bg-zinc-800 relative">
        <div>
          <h1 className="text-xl mb-4">
            IMPLEMENTASI DECISION SUPPORT SYSTEM PENENTUAN PENERIMAAN BANTUAN
            UNTUK ANAK YATIM PIATU MENGGUNAKAN METODE PROMETHEE
          </h1>
          <h2 className="mb-4">(Studi Kasus : MI Raudlatul Athfal)</h2>
        </div>
        <div>
          <Image src={"/logo.png"} width={300} height={300} alt="logo" />
        </div>
      </section>
      <section className="p-8 grid place-content-center">
        <h1 className="text-2xl mb-4">Silahkan Login untuk melanjutkan</h1>
        <Card className="max-w-sm p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                          <Input
                            placeholder="password"
                            {...field}
                            type={showPassword ? "text" : "password"}
                          />
                          <Button
                            type="button"
                            variant={"outline"}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff size={16} />
                            ) : (
                              <Eye size={16} />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </Card>
      </section>
    </main>
  );
}
