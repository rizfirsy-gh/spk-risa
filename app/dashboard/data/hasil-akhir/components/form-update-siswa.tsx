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
      kelas: data.kelas ? data.kelas.toString() : "0",
      alamat: data.alamat,
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
