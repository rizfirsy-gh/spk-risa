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
import { addSiswa } from "./action";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  nisn: z.string().min(5),
  nama_siswa: z.string().min(5),
  tempat_lahir: z.string().min(5),
  tanggal_lahir: z.date({
    required_error: "Tanggal Lahir belum dipilih",
  }),
});

const FormTambahUser = ({
  onPostFinished,
}: {
  onPostFinished: (isClosed: boolean) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nisn: "",
      nama_siswa: "",
      tempat_lahir: "",
      tanggal_lahir: new Date("2018-12-01"),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const newData = {
      nisn: values.nisn,
      nama_siswa: values.nama_siswa,
      tempat_lahir: values.tempat_lahir,
      tanggal_lahir: values.tanggal_lahir,
    };
    console.log("values", values);

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
                      toYear={2004}
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date: any) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Tanggal lahir yang diizinkan maksimal tahun 2004
                </FormDescription>
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

export default FormTambahUser;
