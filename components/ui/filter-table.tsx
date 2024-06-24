import React, { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";

interface FilterTableProps<TData> {
  table: Table<TData>;
  columnName: string;
  placeholder: string;
}

const FilterTable: React.FC<FilterTableProps<any>> = ({
  table,
  columnName,
  placeholder,
}) => {
  return (
    <div className="flex items-center py-4">
      <Search size={20} color="#a1a1aa" />
      <Input
        placeholder={placeholder}
        value={(table.getColumn(columnName)?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn(columnName)?.setFilterValue(event.target.value)
        }
        className="ml-4 max-w-sm"
      />
    </div>
  );
};

export default FilterTable;
