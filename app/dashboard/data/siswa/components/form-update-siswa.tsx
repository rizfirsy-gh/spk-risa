"use client";

import React, { useState } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { updateSiswa } from "../action";
import { SiswaType } from "@/app/app-utils/models";

const statusSiswa = [
  {
    value: "yatim",
    label: "Yatim",
  },
  {
    value: "piatu",
    label: "Piatu",
  },
  {
    value: "yatim_piatu",
    label: "Yatim Piatu",
  },
];

const formSchema = z.object({
  nama_siswa: z.string(),
  tempat_lahir: z.string(),
  tanggal_lahir: z.date(),
  kelas: z.string().min(1).max(1),
  alamat: z.string().min(5),
  status: z.string(),
  penghasilan_orang_tua: z.string().min(5).max(9),
  tanggungan_orang_tua: z.string(),
});

const FormUpdateSiswa = ({
  data,
  onUpdateFinished,
}: {
  data: SiswaType;
  onUpdateFinished: (isClosed: boolean) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama_siswa: data.nama_siswa,
      tempat_lahir: data.tempat_lahir,
      tanggal_lahir: new Date(data.tanggal_lahir),
      alamat: data.alamat,
      kelas: data.kelas ? data.kelas.toString() : "0",
      status: data.status,
      penghasilan_orang_tua: data.penghasilan_orang_tua
        ? data.penghasilan_orang_tua.toString()
        : "0",
      tanggungan_orang_tua: data.tanggungan_orang_tua
        ? data.tanggungan_orang_tua.toString()
        : "0",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const newData = {
      nama_siswa: values.nama_siswa,
      tempat_lahir: values.tempat_lahir,
      tanggal_lahir: values.tanggal_lahir,
      kelas: Number(values.kelas),
      alamat: values.alamat,
      status: values.status,
      penghasilan_orang_tua: Number(values.penghasilan_orang_tua),
      tanggungan_orang_tua: Number(values.tanggungan_orang_tua),
    };

    const res = await updateSiswa(data.nisn, newData);

    if (res.status === 200) {
      setIsLoading(false);
      onUpdateFinished(false);

      toast({
        title: res.message,
      });
    } else {
      setIsLoading(false);
      onUpdateFinished(false);

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
            name="nama_siswa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
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
                <FormLabel>Tempat Lahir</FormLabel>
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
                        date > new Date() || date < new Date("2004-01-01")
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
        <div className="mb-4">
          <FormField
            control={form.control}
            name="kelas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kelas</FormLabel>
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
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Status Siswa</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? statusSiswa.find(
                              (status) => status.value === field.value
                            )?.label
                          : "Pilih Status"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandEmpty>Nama Kriteria kosong.</CommandEmpty>
                      <CommandGroup>
                        <CommandList>
                          {statusSiswa.map((status) => (
                            <CommandItem
                              value={status.label}
                              key={status.value}
                              onSelect={() => {
                                form.setValue("status", status.value);
                              }}
                            >
                              {status.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  status.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandList>
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="alamat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="penghasilan_orang_tua"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Penghasilan Orang Tua</FormLabel>
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
            name="tanggungan_orang_tua"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tanggungan Orang Tua</FormLabel>
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

export default FormUpdateSiswa;
