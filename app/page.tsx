"use client";
import React from "react";

import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { postAdminAuth } from "./app-utils/post_data";
import { useRouter } from "next/navigation";
import { decodeToken } from "./app-utils/auth";
import { useToast } from "@/components/ui/use-toast";
import { title } from "process";

const formSchema = z.object({
  username: z.string().min(4).max(50),
  password: z.string().min(8).max(50),
});

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    const res = await postAdminAuth(value);

    if (res.status === 200) {
      if (res.role === "adm") {
        router.push("/dashboard/");
      }
    } else {
      toast({
        variant: "destructive",
        description: res.message,
      });
    }
  }

  return (
    <main className="grid grid-cols-2 min-h-screen">
      <section className="p-8 bg-zinc-100 dark:bg-zinc-900 w-full h-full grid place-content-center border-r">
        <div className="overflow-clip rounded-tr-[56px] rounded-bl-[56px] w-[300px] h-[400px]">
          <Image
            src="/login_image.jpg"
            width={300}
            height={250}
            alt="Picture of the author"
          />
        </div>
      </section>
      <section className="p-8 grid place-content-center">
        <h1 className="text-2xl">Sistem Penunjang Keputusan</h1>
        <h2 className="mb-4">Metode ROC - OCRA</h2>
        <div className="max-w-sm">
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
        </div>
      </section>
    </main>
  );
}
