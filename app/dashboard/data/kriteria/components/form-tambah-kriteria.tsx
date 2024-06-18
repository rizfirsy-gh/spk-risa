"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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

const jenisKriteria = [
  {
    value: "benefit",
    label: "Benefit",
  },
  {
    value: "cost",
    label: "Cost",
  },
];

const formSchema = z.object({
  kode_kriteria: z.string().max(2, {
    message: "Kode kKriteria max. 2 karakter.",
  }),
  nama_kriteria: z.string().min(5, {
    message: "Nama Kriteria min. 5 karakter.",
  }),
  tingkat_prioritas: z.string().min(1, {
    message: "Tingkat Prioritas perlu diisi.",
  }),
  jenis_kriteria: z.string(),
});

const FormTambahKriteria = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kode_kriteria: "",
      nama_kriteria: "",
      tingkat_prioritas: "",
      jenis_kriteria: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="kode_kriteria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kode Kriteria</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="nama_kriteria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Kriteria</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="tingkat_prioritas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tingkat Prioritas</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="jenis_kriteria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jenis Prioritas</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormTambahKriteria;
