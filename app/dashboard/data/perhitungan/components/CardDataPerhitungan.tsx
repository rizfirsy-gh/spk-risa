import React from "react";
import TabelPerhitungan from "./TablePerhitungan";
import { Card } from "@/components/ui/card";

const CardDataPerhitungan = ({ data }: any) => {
  return (
    <Card className="my-8 p-4">
      <h1 className="font-bold pt-2 pb-4 text-lg">Data Matrix Keputusan</h1>
      <TabelPerhitungan {...data} />
    </Card>
  );
};

export default CardDataPerhitungan;