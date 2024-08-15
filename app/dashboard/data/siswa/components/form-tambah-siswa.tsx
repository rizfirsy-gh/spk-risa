"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
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
import { CalendarIcon, CheckIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { addSiswa } from "../action";

const formSchema = z.object({
  nisn: z.string().min(5).max(10),
  nama_siswa: z.string().min(4),
  tempat_lahir: z.string().min(5),
  tanggal_lahir: z.date({
    required_error: "Tanggal Lahir belum dipilih",
  }),
  password: z.string().min(6),
});

const FormTambahSiswa = ({
  onPostFinished,
}: {
  onPostFinished: (isClosed: boolean) => void;
}) => {
  const [maxBirthYear, setMaxBirthYear] = useState(2013);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nisn: "",
      nama_siswa: "",
      tempat_lahir: "",
      tanggal_lahir: new Date(),
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const date = new Date(values.tanggal_lahir);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const generatedPassword = `${day}${month}${year.toString().slice(2)}`;

    console.log("generatedPassword" + generatedPassword);
    const newData = {
      nisn: values.nisn,
      nama_siswa: values.nama_siswa,
      tempat_lahir: values.tempat_lahir,
      tanggal_lahir: new Date(`${year}-${month}-${day}`),
      password: values.password,
    };

    const res = await addSiswa(newData);

    if (res.status === 200) {
      setIsLoading(false);
      onPostFinished(false);

      toast({
        title: res.message,
      });
    } else {
      setIsLoading(false);
      onPostFinished(false);

      toast({
        title: res.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="nisn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NISN</FormLabel>
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
            name="nama_siswa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Siswa</FormLabel>
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
            name="tempat_lahir"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tempat lahir</FormLabel>
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
            name="tanggal_lahir"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Tanggal lahir</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pilih tanggal</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      toYear={maxBirthYear}
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date: any) =>
                        date > new Date(`${maxBirthYear}-12-31`)
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Tanggal lahir yang diizinkan maksimal tahun {maxBirthYear}
                </FormDescription>
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
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={isLoading ? true : false}>
          {isLoading ? "Sedang mengirim..." : "Kirim"}
        </Button>
      </form>
    </Form>
  );
};

export default FormTambahSiswa;
