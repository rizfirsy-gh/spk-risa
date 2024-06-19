"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const jenisKriteria = [
  {
    value: "kehadiran",
    label: "Kehadiran",
  },
  {
    value: "tanggungjawab",
    label: "Tanggung Jawab",
  },
  {
    value: "sikap",
    label: "Sikap/Attitude",
  },
  {
    value: "kerjasama",
    label: "Kerja Sama",
  },
  {
    value: "inisiatif",
    label: "Inisiatif",
  },
  {
    value: "integritas",
    label: "Integritas",
  },
  {
    value: "komunikasi",
    label: "Komunikasi",
  },
  {
    value: "knowledge",
    label: "Knowledge",
  },
  {
    value: "loyal",
    label: "Loyal",
  },
  {
    value: "penampilan",
    label: "Penampilan",
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
  jenis_kriteria: z.string({
    required_error: "Silahkan pilih Jenis Kriteria",
  }),
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
              <FormItem className="flex flex-col">
                <FormLabel>Jenis Kriteria</FormLabel>
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
                          ? jenisKriteria.find(
                              (kriteria) => kriteria.value === field.value
                            )?.label
                          : "Pilih Jenis Kriteria"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Cari Jenis Kriteria..."
                        className="h-9"
                      />
                      <CommandEmpty>Jenis Kriteria kosong.</CommandEmpty>
                      <CommandGroup>
                        <CommandList>
                          {jenisKriteria.map((kriteria) => (
                            <CommandItem
                              value={kriteria.label}
                              key={kriteria.value}
                              onSelect={() => {
                                form.setValue("jenis_kriteria", kriteria.value);
                              }}
                            >
                              {kriteria.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  kriteria.value === field.value
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormTambahKriteria;
